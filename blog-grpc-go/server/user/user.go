package user

import (
	"log"

	"blog.com/protos/userpb"
	"blog.com/server/config"

	"context"
	"fmt"

	"go.mongodb.org/mongo-driver/bson"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

var userCollection = config.ConnectDB().Database("blogdb").Collection("users")

// Server ...
type Server struct {
	userpb.UnimplementedUserServiceServer
}

type userItem struct {
	ID        primitive.ObjectID `bson:"_id,omitempty"`
	FirstName string             `bson:"firstName"`
	LastName  string             `bson:"lastName"`
	Email     string             `bson:"email"`
	Password  string             `bson:"password"`
}

// CreateUser ...
func (*Server) CreateUser(ctx context.Context, req *userpb.CreateUserRequest) (*userpb.CreateUserResponse, error) {

	user := req.GetUser()

	data := userItem{
		FirstName: user.GetFirstName(),
		LastName:  user.GetLastName(),
		Email:     user.GetEmail(),
		Password:  user.GetPassword(),
	}
	exist, err := userCollection.CountDocuments(context.Background(), bson.M{"email": data.Email})
	if err != nil {
		return nil, status.Error(codes.Aborted, "there was an error")
	}
	if exist != 0 {
		fmt.Println("user already exists")
		return nil, status.Error(codes.AlreadyExists, "user already exists")
	}
	res, err := userCollection.InsertOne(context.Background(), data)
	if err != nil {
		log.Fatalln("Unable to create user :: ", err)
	}

	oid, ok := res.InsertedID.(primitive.ObjectID)
	if !ok {
		return nil, status.Errorf(
			codes.Internal,
			"could not conver to OID",
		)
	}
	response := &userpb.CreateUserResponse{
		User: &userpb.User{
			Id:        oid.Hex(),
			FirstName: user.GetFirstName(),
			LastName:  user.GetLastName(),
			Email:     user.GetEmail(),
		},
	}
	fmt.Println("User data  ", data)
	return response, nil
}

//ReadUser ...
func (*Server) ReadUser(ctx context.Context, req *userpb.ReadUserRequest) (*userpb.ReadUserResponse, error) {
	userID := req.GetUserId()
	oid, err := primitive.ObjectIDFromHex(userID)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "cannot parse ID")
	}
	data := &userItem{}
	res := userCollection.FindOne(context.Background(), bson.M{"_id": oid})
	if err := res.Decode(data); err != nil {
		return nil, status.Errorf(
			codes.NotFound, fmt.Sprintf("Cannot find the user with the ID : %v", err))
	}
	response := &userpb.ReadUserResponse{User: &userpb.User{
		Id:        data.ID.Hex(),
		FirstName: data.FirstName,
		LastName:  data.LastName,
		Email:     data.Email,
	}}
	return response, nil
}

//UpdateUser ...
func (*Server) UpdateUser(ctx context.Context, req *userpb.UpdateUserRequest) (*userpb.UpdateUserResponse, error) {
	fmt.Println("Updating the User.")
	user := req.GetUser()

	oid, err := primitive.ObjectIDFromHex(user.GetId())
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "Cannot parse ID")
	}

	data := &userItem{}

	res := userCollection.FindOne(context.Background(), bson.M{"_id": oid})
	if err := res.Decode(data); err != nil {
		return nil, status.Errorf(
			codes.NotFound,
			fmt.Sprintf("Cannot find the blog with the ID : %v", err),
		)
	}
	// udpate
	data.FirstName = user.GetFirstName()
	data.LastName = user.GetLastName()
	data.Email = user.GetEmail()

	updateRes, err := userCollection.UpdateMany(context.Background(), bson.M{"_id": oid},
		bson.D{
			{"$set", bson.D{{"firstName", data.FirstName}}},
			{"$set", bson.D{{"lastName", data.LastName}}},
			{"$set", bson.D{{"email", data.Email}}},
		})
	if err != nil {
		return nil, status.Errorf(codes.Internal, fmt.Sprintf("Cannot update the object : %v", err))
	}
	fmt.Println("User update res : ", updateRes.ModifiedCount)

	retRes := &userpb.UpdateUserResponse{
		User: &userpb.User{
			Id:        data.ID.Hex(),
			FirstName: data.FirstName,
			LastName:  data.LastName,
			Email:     data.Email,
		},
	}
	return retRes, nil
}

//DeleteUser ...
func (*Server) DeleteUser(ctx context.Context, req *userpb.DeleteUserRequest) (*userpb.DeleteUserResponse, error) {
	oid, err := primitive.ObjectIDFromHex(req.UserId)
	primitive.ErrParseInf.Error()
	if err != nil {
		status.Errorf(codes.Internal, "user not found")
	}
	deleteRes, err := userCollection.DeleteOne(context.Background(), bson.M{"_id": oid})
	if err != nil {
		log.Fatalln("error deleting the user ", err)
	}
	fmt.Println("deleted count ", deleteRes.DeletedCount)
	return &userpb.DeleteUserResponse{
		UserId: string(deleteRes.DeletedCount),
	}, nil
}
