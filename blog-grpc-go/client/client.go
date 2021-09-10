package main

import (
	"blog.com/client/blog"
	"blog.com/data"
	"blog.com/protos/blogpb"
	"golang.org/x/oauth2"

	// "blog/protos/testpb"
	"context"
	"fmt"
	"log"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/credentials/oauth"
	"google.golang.org/grpc/metadata"
)

func main() {
	log.SetFlags(log.LstdFlags | log.Lshortfile)
	fmt.Println("BLOG CLIENT STARTED...")

	// Certificates for tls
	// Set up the credentials for the connection.
	perRPC := oauth.NewOauthAccess(fetchToken())
	creds, sslErr := credentials.NewClientTLSFromFile(data.Path("x509/ca_cert.pem"), "http://localhost:3000")
	if sslErr != nil {
		log.Fatalf(("Erro while loading CA trust certificates: %v"), sslErr)
	}

	tls := true
	var opts []grpc.DialOption
	if tls == true {
		opts = []grpc.DialOption{
			// grpc.WithUnaryInterceptor(unaryInterceptor),
			grpc.WithPerRPCCredentials(perRPC),

			grpc.WithTransportCredentials(creds),
			grpc.WithBlock(),
		}

	} else {
		opts = []grpc.DialOption{
			grpc.WithInsecure(),
		}
	}
	// uri := "192.168.49.2:31000"
	// uri := "34.69.82.135:80"
	uri := "localhost:8080"

	// when not tls
	// cc, err := grpc.Dial(uri, grpc.withInsecure())
	cc, err := grpc.Dial(uri, opts...)
	if err != nil {
		log.Fatalf("could not connect: %v", err)
	}
	// connect to localhost:8080 through envoy
	// connect to localhost:5000 dicrectly  without envoy
	fmt.Println("Connected to port:8080")
	defer cc.Close()

	b := blogpb.NewBlogServiceClient(cc)
	// u := userpb.NewUserServiceClient(cc)
	// t := testpb.NewTestServiceClient(cc)
	// a := authpb.NewAuthServiceClient(cc)
	// test.TestServer(t)
	// user.Login(a)
	// blog.CreateBlog(b)
	// blog.ReadBlog(b)
	// blog.UpdateBlog(b)
	// DeleteBlog(c)
	blog.ListBlog(b)

	// user.CreateUser(u)
	// user.ReadUser(u)
	// user.UpdateUser(u)

}

func unaryInterceptor(ctx context.Context, method string, req interface{}, reply interface{}, cc *grpc.ClientConn, invoker grpc.UnaryInvoker, opts ...grpc.CallOption) error {
	fmt.Println("CLIENT-INT CALLED")
	// md := metadata.Pairs("timestamp", "2:pm")
	md := metadata.New(map[string]string{"authorizationToken": "thisistoken"})

	ctx = metadata.NewOutgoingContext(context.Background(), md)
	err := invoker(ctx, method, req, reply, cc, opts...)
	if err != nil {
		log.Println("there was an error in the client interceptor ", err)
	}

	return nil
}

func fetchToken() *oauth2.Token {
	return &oauth2.Token{
		AccessToken: "cab3188a-e8fc-4530-9ff0-7e8c768a3a5d",
	}
}
