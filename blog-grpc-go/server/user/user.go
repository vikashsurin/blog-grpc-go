package user

import (
	userpb "blog/protos/userpb"
	"blog/server/config"
	"log"

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
	ID       primitive.ObjectID `bson:"_id,omitempty"`
	Name     string             `bson:"name"`
	Email    string             `bson:"email"`
	Password string             `bson:"password"`
}

// CreateUser ...
func (*Server) CreateUser(ctx context.Context, req *userpb.CreateUserRequest) (*userpb.CreateUserResponse, error) {

	user := req.GetUser()

	data := userItem{
		Name:     user.GetName(),
		Email:    user.GetEmail(),
		Password: user.GetPassword(),
	}
	res, err := userCollection.InsertOne(context.Background(), data)
	if err != nil {
		log.Fatalln("Unable to create user :: ", err)
	}

	oid, ok := res.InsertedID.(primitive.ObjectID)
	if !ok {
		return nil, status.Errorf(
			codes.Internal,
			fmt.Sprintf("Cannot convert to OID"),
		)
	}
	response := &userpb.CreateUserResponse{
		User: &userpb.User{
			Id:    oid.Hex(),
			Name:  user.GetName(),
			Email: user.GetEmail(),
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
		return nil, status.Errorf(codes.InvalidArgument, fmt.Sprintf("Cannot parse ID"))
	}
	data := &userItem{}
	res := userCollection.FindOne(context.Background(), bson.M{"_id": oid})
	if err := res.Decode(data); err != nil {
		return nil, status.Errorf(
			codes.NotFound, fmt.Sprintf("Cannot find the user with the ID : %v", err))
	}
	response := &userpb.ReadUserResponse{User: &userpb.User{
		Id:    data.ID.Hex(),
		Name:  data.Name,
		Email: data.Email,
	}}
	return response, nil
}

//UpdateUser ...
func (*Server) UpdateUser(ctx context.Context, req *userpb.UpdateUserRequest) (*userpb.UpdateUserResponse, error) {
	fmt.Println("Updating the User.")
	user := req.GetUser()

	oid, err := primitive.ObjectIDFromHex(user.GetId())
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, fmt.Sprintf("Cannot parse ID"))
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
	data.Name = user.GetName()
	data.Email = user.GetEmail()

	updateRes, err := userCollection.UpdateMany(context.Background(), bson.M{"_id": oid},
		bson.D{
			{"$set", bson.D{{"name", data.Name}}},
			{"$set", bson.D{{"email", data.Email}}},
		})
	if err != nil {
		return nil, status.Errorf(codes.Internal, fmt.Sprintf("Cannot update the object : %v", err))
	}
	fmt.Println("User update res : ", updateRes.ModifiedCount)

	retRes := &userpb.UpdateUserResponse{
		User: &userpb.User{
			Id:    data.ID.Hex(),
			Name:  data.Name,
			Email: data.Email,
		},
	}
	return retRes, nil
}

//DeleteUser ...
func (*Server) DeleteUser(ctx context.Context, req *userpb.DeleteUserRequest) (*userpb.DeleteUserResponse, error) {
	oid, err := primitive.ObjectIDFromHex(req.UserId)
	primitive.ErrParseInf.Error()

	deleteRes, err := userCollection.DeleteOne(context.Background(), bson.M{"_id": oid})
	if err != nil {
		log.Fatalln("error deleting the user ", err)
	}
	fmt.Println("deleted count ", deleteRes.DeletedCount)
	return &userpb.DeleteUserResponse{
		UserId: string(deleteRes.DeletedCount),
	}, nil
}
