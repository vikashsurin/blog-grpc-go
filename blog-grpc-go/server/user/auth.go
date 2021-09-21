package user

import (
	"context"
	"fmt"
	"time"

	"blog.com/protos/authpb"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// UserSession store
var UserSession = map[string]Session{}

// User ..
var User string

// AuthServer is ....
type AuthServer struct {
	authpb.UnimplementedAuthServiceServer
}

// Session ...
type Session struct {
	SID    string
	Expire time.Time
}

// f Create Session ....
func newSession(sID string, t time.Duration) *Session {
	return &Session{SID: sID, Expire: time.Now().Add(t)}
}

// DestroySession ....
func DestroySession() {
	delete(UserSession, User)
	return
}

// Login is ...
func (*AuthServer) Login(ctx context.Context, req *authpb.LoginRequest) (*authpb.LoginResponse, error) {
	fmt.Println("LOGIN :: ")
	userEmail := req.GetUserEmail()
	Password := req.GetPassword()
	if userEmail == "" || Password == "" {
		return nil, nil
	}

	// create a empty user
	data := &userItem{}
	res := userCollection.FindOne(context.Background(), bson.M{"email": userEmail})
	if err := res.Decode(data); err != nil {
		return nil, status.Errorf(
			codes.NotFound, fmt.Sprintf("Cannot find the user with the ID : %v", err))
	}

	// verify password
	if data.Password != Password {
		return nil, nil
	}
	fmt.Print("password matched")

	// create Session
	sid := uuid.New()
	s := newSession(sid.String(), 100*time.Second)
	// store session and user
	User = userEmail
	UserSession[userEmail] = *s
	loginRes := &authpb.LoginResponse{
		Token: s.SID,
	}
	fmt.Println("USER FROM LOGIN :: ", User)
	fmt.Println("user session created ")
	fmt.Println("USERSESSIONS :: ", UserSession)

	return loginRes, nil
}

// Logout is ....
func (*AuthServer) Logout(ctx context.Context, req *authpb.LogoutRequest) (*authpb.LogoutResponse, error) {
	delete(UserSession, User)
	return nil, nil
}
