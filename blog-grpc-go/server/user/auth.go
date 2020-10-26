package user

import (
	"blog/protos/authpb"
	"context"
	"fmt"
	"time"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// UserSession store
var UserSession = map[string]Session{}

// User ..
var User string

// Session ...
type Session struct {
	SID    string
	Expire time.Time
}

// function to create newSession
func newSession(sID string, t time.Duration) *Session {
	return &Session{SID: sID, Expire: time.Now().Add(t)}
}

// DestroySession ....
func DestroySession() {
	delete(UserSession, User)
	return
}

// AuthServer is ....
type AuthServer struct{}

// Login is ...
func (*AuthServer) Login(ctx context.Context, req *authpb.LoginRequest) (*authpb.LoginResponse, error) {
	fmt.Println("LOGIN :: ")
	userName := req.GetUserName()
	Password := req.GetPassword()
	if userName == "" || Password == "" {
		return nil, nil
	}

	// create a empty user
	data := &userItem{}
	res := userCollection.FindOne(context.Background(), bson.M{"name": userName})
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
	User = userName
	UserSession[userName] = *s
	loginRes := &authpb.LoginResponse{
		Token: s.SID,
	}
	fmt.Println("USER FROM LOGIN :: ", User)
	fmt.Println("user session created ")

	return loginRes, nil
}

// Logout is ....
func (*AuthServer) Logout(ctx context.Context, req *authpb.LogoutRequest) (*authpb.LogoutResponse, error) {
	return nil, nil
}
