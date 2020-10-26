package main

import (
	"blog/server/user"
	"context"
	"fmt"
	"log"
	"strings"
	"time"

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
	"/blog.BlogService/ListBlo",
	"/auth.AuthService/Login",
}

// valid validates the authorization.
func valid(tokenString []string) bool {

	token := strings.TrimPrefix(tokenString[0], "token ")
	fmt.Println("token received:", token)
	if user.UserSession[user.User].SID != token {

		log.Println("token not matched")
		return false
	}
	diff := user.UserSession[user.User].Expire.Sub(time.Now())
	fmt.Println(diff)

	// if the session is expired , destroy it.
	if diff < 0 {
		user.DestroySession()
	}
	return diff > 0

}

func unaryInterceptor(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
	log.Println("-->ensure valid token :: ", info.FullMethod)

	for _, v := range publicRPC {
		if v == info.FullMethod {
			fmt.Println("this is a public RPC")
			return handler(ctx, req)
		}
	}
	md, ok := metadata.FromIncomingContext(ctx)
	log.Println("-->metadata :: ", md)
	if !ok {
		return nil, errMissingMetadata
	}

	// validate the token
	if !valid(md["token"]) {
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
