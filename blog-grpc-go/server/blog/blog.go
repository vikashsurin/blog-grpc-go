package blog

import (
	"context"
	"fmt"

	"blog.com/protos/blogpb"
	"blog.com/server/config"
	"blog.com/server/user"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// Server ...
type Server struct {
	blogpb.UnimplementedBlogServiceServer
}

type blogItem struct {
	ID        primitive.ObjectID `bson:"_id,omitempty"`
	AuthorId  string             `bson:"author_id"`
	FirstName string             `bson:"first_name"`
	LastName  string             `bson:"last_name"`
	Content   string             `bson:"content"`
	Title     string             `bson:"title"`
}

var blogCollection = config.ConnectDB().Database("blogdb").Collection("blogs")

func (*Server) CreateBlog(ctx context.Context, req *blogpb.CreateBlogRequest) (*blogpb.CreateBlogResponse, error) {

	// * get admin detail from user package
	admin, _ := user.GetAdmin(ctx)
	fmt.Println("admin ", admin.ID.Hex())

	/*

	* data goes to mongodb
	* admin is the logged_in_user
	* admin is needed for AuthorId, FirstName  and LastName

	 */
	blog := req.GetBlog()

	data := blogItem{
		AuthorId:  admin.ID.Hex(),
		FirstName: admin.FirstName,
		LastName:  admin.LastName,
		Title:     blog.GetTitle(),
		Content:   blog.GetContent(),
	}
	res, err := blogCollection.InsertOne(context.Background(), data)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			fmt.Sprintf("Internal error : %v", err),
		)
	}
	oid, ok := res.InsertedID.(primitive.ObjectID)
	if !ok {
		return nil, status.Errorf(
			codes.Internal,
			"Cannot convert to OID",
		)
	}
	response := &blogpb.CreateBlogResponse{
		Blog: &blogpb.Blog{
			Id:        oid.Hex(),
			AuthorId:  admin.ID.Hex(),
			FirstName: admin.FirstName,
			LastName:  admin.LastName,
			Title:     blog.GetTitle(),
			Content:   blog.GetContent(),
		},
	}
	return response, nil
}

// ReadBlog ...
func (*Server) ReadBlog(ctx context.Context, req *blogpb.ReadBlogRequest) (*blogpb.ReadBlogResponse, error) {
	fmt.Println("READ BLOG REQUEST :: ", req)

	blogID := req.GetBlogId()

	oid, err := primitive.ObjectIDFromHex(blogID)

	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, fmt.Sprintf("Cannot parse ID"))
	}

	//create an empty struct
	data := &blogItem{}

	res := blogCollection.FindOne(context.Background(), bson.M{"_id": oid})

	if err := res.Decode(data); err != nil {
		return nil, status.Errorf(
			codes.NotFound,
			fmt.Sprintf("Cannot find the blog with the ID : %v", err),
		)
	}

	response := &blogpb.ReadBlogResponse{
		Blog: dataToBlogPb(data),
	}
	return response, nil
}

func dataToBlogPb(data *blogItem) *blogpb.Blog {
	return &blogpb.Blog{
		Id:        data.ID.Hex(),
		AuthorId:  data.AuthorId,
		FirstName: data.FirstName,
		LastName:  data.LastName,
		Content:   data.Content,
		Title:     data.Title,
	}
}

// UpdateBlog ...
func (*Server) UpdateBlog(ctx context.Context, req *blogpb.UpdateBlogRequest) (*blogpb.UpdateBlogResponse, error) {
	fmt.Println("UPDATE BLOG REQUEST :: ", req)
	blog := req.GetBlog()
	oid, err := primitive.ObjectIDFromHex(blog.GetId())

	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, fmt.Sprintf("Cannot parse ID"))
	}

	// create empty struct
	data := &blogItem{}
	res := blogCollection.FindOne(context.Background(), bson.M{"_id": oid})
	if err := res.Decode(data); err != nil {
		return nil, status.Errorf(
			codes.NotFound,
			fmt.Sprintf("Cannot find the blog with the ID : %v", err),
		)
	}

	// update internal struct
	data.AuthorId = blog.GetAuthorId()
	data.Content = blog.GetContent()
	data.Title = blog.GetTitle()

	updateRes, err := blogCollection.UpdateMany(context.Background(),
		bson.M{"_id": oid},
		bson.D{
			{"$set", bson.D{{"author_id", data.AuthorId}}},
			{"$set", bson.D{{"content", data.Content}}},
			{"$set", bson.D{{"title", data.Title}}},
		})
	if err != nil {
		return nil, status.Errorf(codes.Internal, fmt.Sprintf("Cannot update the object : %v", err))
	}
	fmt.Println("Server update res ", updateRes.ModifiedCount)

	return &blogpb.UpdateBlogResponse{
		Blog: dataToBlogPb(data),
	}, nil
}

// DeleteBlog ...
func (*Server) DeleteBlog(ctx context.Context, req *blogpb.DeleteBlogRequest) (*blogpb.DeleteBlogResponse, error) {
	fmt.Println("DELETE BLOG REQUEST :: ", req)
	oid, err := primitive.ObjectIDFromHex(req.GetBlogId())

	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, fmt.Sprintf("Cannot parse ID"))
	}
	deleteRes, err := blogCollection.DeleteOne(context.Background(), bson.M{"_id": oid})
	if err != nil {
		return nil, status.Errorf(codes.Internal, fmt.Sprintf("Cannot delete the object : %v", err))
	}
	if deleteRes.DeletedCount == 0 {
		if err != nil {
			return nil, status.Errorf(codes.Internal, fmt.Sprintf("Cannot find document  object : %v", err))
		}

	}
	fmt.Println("deleted count", deleteRes)
	return &blogpb.DeleteBlogResponse{
		BlogId: req.GetBlogId(),
	}, nil
}

// ListBlogByUserId ...
func (*Server) ListBlogByUserId(req *blogpb.ListBlogRequestByUserId, stream blogpb.BlogService_ListBlogByUserIdServer) error {
	fmt.Println("LIST BLOG REQUEST BY USER ID:: ", req)
	id := req.GetUserId()
	cursor, err := blogCollection.Find(context.Background(), bson.M{"author_id": id})

	if err != nil {
		return status.Errorf(codes.Internal, fmt.Sprintf("Unknown Internal error : %v ", err))
	}
	defer cursor.Close(context.Background())
	for cursor.Next(context.Background()) {
		data := &blogItem{}
		err := cursor.Decode(data)
		if err != nil {
			return status.Errorf(codes.Internal, fmt.Sprintf("Error while decoding data : %v", err))
		}
		stream.Send(&blogpb.ListBlogResponseByUserId{Blog: dataToBlogPb(data)})
		fmt.Println("data ", data)
	}
	if err := cursor.Err(); err != nil {
		return status.Errorf(codes.Internal, fmt.Sprintf("Unknown Internal error : %v ", err))
	}
	return nil
}

// ListBlogAllBlogs ...
func (*Server) ListBlog(req *blogpb.ListBlogRequest, stream blogpb.BlogService_ListBlogServer) error {
	fmt.Println("LIST BLOG REQUEST :: ", req)
	// cursor, err := blogCollection.Find(context.Background(), primitive.D{{}})
	cursor, err := blogCollection.Find(context.Background(), primitive.D{{}})
	if err != nil {
		return status.Errorf(codes.Internal, fmt.Sprintf("Unknown Internal error : %v ", err))
	}
	defer cursor.Close(context.Background())
	for cursor.Next(context.Background()) {
		data := &blogItem{}
		err := cursor.Decode(data)
		if err != nil {
			return status.Errorf(codes.Internal, fmt.Sprintf("Error while decoding data : %v", err))
		}
		stream.Send(&blogpb.ListBlogResponse{Blog: dataToBlogPb(data)})
		fmt.Println("data ", data)
	}
	if err := cursor.Err(); err != nil {
		return status.Errorf(codes.Internal, fmt.Sprintf("Unknown Internal error : %v ", err))
	}
	return nil
}
