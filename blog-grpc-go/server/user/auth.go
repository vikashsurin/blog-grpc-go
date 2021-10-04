package user

import (
	"context"
	"encoding/json"
	"fmt"

	"blog.com/protos/authpb"
	"blog.com/server/config"

	"github.com/gomodule/redigo/redis"
	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
)

// AuthServer is ....
type AuthServer struct {
	authpb.UnimplementedAuthServiceServer
}

// DestroySession ....
func DestroySession() {
	// delete(UserSession, User)
	return
}

/*
 * check if user is logged in
 */
func (*AuthServer) IsLoggedIn(ctx context.Context, req *authpb.IsLoggedInRequest) (*authpb.IsLoggedInResponse, error) {

	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return nil, nil
	}
	token := md["authorization"]
	_, err := redis.Bytes((config.Cache.Do("GET", token[0])))
	if err != nil {
		return nil, err
	}
	isLoggedIn := &authpb.IsLoggedInResponse{
		IsLoggedIn: true,
	}
	return isLoggedIn, nil

	// token := req.GetToken()
	// if token == "" {
	// 	isLoggedIn := &authpb.IsLoggedInResponse{
	// 		IsLoggedIn: false,
	// 	}
	// 	return isLoggedIn, status.Error(codes.NotFound, "No token found")
	// }

	// if token != "" {

	// }
	// return true, nil
}

// Login function
func (*AuthServer) Login(ctx context.Context, req *authpb.LoginRequest) (*authpb.LoginResponse, error) {
	userEmail := req.GetUserEmail()
	Password := req.GetPassword()
	if userEmail == "" || Password == "" {
		return nil, nil
	}

	/*
	 data is an empty user Item
	 login the user and set it as admin
	*/
	admin := &userItem{}
	res := userCollection.FindOne(context.Background(), bson.M{"email": userEmail})
	if err := res.Decode(admin); err != nil {
		return nil, status.Errorf(
			codes.NotFound, fmt.Sprintf("Cannot find the user with the ID : %v", err))
	}

	/*
		TODO  encrypt the password
	*/

	// verify password
	if admin.Password != Password {
		return nil, nil
	}
	fmt.Print("password matched")

	// create Session
	sid := uuid.New()

	/*
	   convert the admin data into []byte for the ease of storage in reids-cache
	*/
	adminBs, _ := json.Marshal(admin)
	_, err := config.Cache.Do("SETEX", sid, "36000", adminBs)
	if err != nil {
		fmt.Println("error in redis while SETEX", err)
	}

	/*
		Response data
		fistname,lastname and token
	*/
	loginRes := &authpb.LoginResponse{
		FirstName: admin.FirstName,
		LastName:  admin.LastName,
		Token:     sid.String(),
	}

	return loginRes, nil
}

// Logout is ....
func (*AuthServer) Logout(ctx context.Context, req *authpb.LogoutRequest) (*authpb.LogoutResponse, error) {
	// delete(UserSession, User)
	return nil, nil
}
