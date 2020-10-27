package main

import (
	"blog/client/blog"
	"blog/client/user"
	"blog/data"
	"blog/protos/authpb"
	"blog/protos/blogpb"
	"blog/protos/userpb"
	"context"
	"fmt"
	"log"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/metadata"
)

func main() {
	log.SetFlags(log.LstdFlags | log.Lshortfile)
	fmt.Println("BLOG CLIENT STARTED...")

	certFile := data.Path("x509/ca_cert.pem")
	fmt.Println("Hello there")
	creds, sslErr := credentials.NewClientTLSFromFile(certFile, "x.test.example.com")
	if sslErr != nil {
		log.Fatalf(("Erro while loading CA trust certificates: %v"), sslErr)
	}
	fmt.Println("Hello there")

	opts := []grpc.DialOption{
		grpc.WithUnaryInterceptor(unaryInterceptor),
		grpc.WithTransportCredentials(creds),
		grpc.WithBlock(),
	}
	cc, err := grpc.Dial("localhost:5000", opts...)
	if err != nil {
		log.Fatalf("could not connect: %v", err)
	}
	fmt.Println("Connected to localhost:5000")
	defer cc.Close()

	c := blogpb.NewBlogServiceClient(cc)
	u := userpb.NewUserServiceClient(cc)
	// t := testpb.NewTestServiceClient(cc)
	a := authpb.NewAuthServiceClient(cc)
	blog.CreateBlog(c)
	blog.ReadBlog(c)
	blog.UpdateBlog(c)
	// DeleteBlog(c)
	blog.ListBlog(c)

	user.CreateUser(u)
	// user.ReadUser(u)
	// user.UpdateUser(u)
	// test.TestServer(t)

	user.Login(a)
}

func unaryInterceptor(ctx context.Context, method string, req interface{}, reply interface{}, cc *grpc.ClientConn, invoker grpc.UnaryInvoker, opts ...grpc.CallOption) error {
	fmt.Println("CLIENT-INT CALLED")
	// md := metadata.Pairs("timestamp", "2:pm")
	md := metadata.New(map[string]string{"token": "fsdfjk sdfks"})

	ctx = metadata.NewOutgoingContext(context.Background(), md)
	err := invoker(ctx, method, req, reply, cc, opts...)
	if err != nil {
		log.Println("there was an error in the client interceptor ", err)
	}

	return nil
}
