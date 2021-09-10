package main

import (
	"context"
	"fmt"
	"log"
	"strings"
	"time"

	"blog.com/server/user"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
)

var (
	errMissingMetadata = status.Errorf(codes.InvalidArgument, "missing metadata")
	errInvalidToken    = status.Errorf(codes.Unauthenticated, "invalid token")
)

var publicRPC = []string{
	"/blog.BlogService/ReadBlog",
	"/blog.BlogService/ListBlog",
	"/auth.AuthService/Login",
	"/user.UserService/CreateUser",
}
var privateRPC = []string{
	"/blog.BlogService/CreateBlog",
	"/blog.BlogService/UpdateBlog",
	"/blog.BlogService/DeleteBlog",
	"/auth.AuthService/Logout",
	"/user.UserService/ReadUser",
	"/user.UserService/UpdateUser",
	"/user.UserService/DeleteUser",
}

// valid validates the authorization.
func valid(authorization []string) bool {
	if len(authorization) < 1 {
		return false
	}
	token := strings.TrimPrefix(authorization[0], "Bearer ")
	// Perform the token validation here. For the sake of this example, the code
	// here forgoes any of the usual OAuth2 token validation and instead checks
	// for a token matching an arbitrary string.

	fmt.Println("USER SESSIONS :: ", user.UserSession)
	fmt.Println("TOKEN :: ", token)

	if user.UserSession[user.User].SID != token {
		log.Println("token not matched")
		return false
	}

	// Perform a check if the session is expired.
	// difference of time.Now() and time of creation.
	// on session expiry it , will be destroyed and user have to relogin.
	diff := user.UserSession[user.User].Expire.Sub(time.Now())
	fmt.Println(diff)
	if diff < 0 {
		user.DestroySession()
	}
	return diff > 0
}

// ensureValidToken ensures a valid token exists within a request's metadata. If
// the token is missing or invalid, the interceptor blocks execution of the
// handler and returns an error. Otherwise, the interceptor invokes the unary
// handler.
func ensureValidToken(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
	// Checks if the rcp is public.
	// if it is public it will skip the validation of token.
	for _, v := range publicRPC {
		if v == info.FullMethod {
			fmt.Println("\n\nthis is a public RPC")
			return handler(ctx, req)
		}
	}

	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return nil, errMissingMetadata
	}
	fmt.Println("MD :: ", md)
	// The keys within metadata.MD are normalized to lowercase.
	// See: https://godoc.org/google.golang.org/grpc/metadata#New
	if !valid(md["authorization"]) {
		return nil, errInvalidToken
	}
	// Continue execution of handler after ensuring a valid token.
	return handler(ctx, req)
}

// streamInterceptor
func streamInterceptor(srv interface{}, ss grpc.ServerStream, info *grpc.StreamServerInfo, handler grpc.StreamHandler) error {
	log.Println("--> stream interceptor :: ", info.FullMethod)
	for _, v := range publicRPC {
		if v == info.FullMethod {
			fmt.Println("this is a public RPC")
			return handler(srv, ss)
		}
	}
	return nil
}
