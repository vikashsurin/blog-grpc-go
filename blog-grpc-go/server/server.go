package main

import (
	"blog/data"
	"blog/protos/authpb"
	blogpb "blog/protos/blogpb"
	testpb "blog/protos/testpb"
	userpb "blog/protos/userpb"
	blog "blog/server/blogs"
	"blog/server/config"
	"blog/server/test"
	"blog/server/user"
	"context"
	"fmt"
	"log"
	"net"

	"os"
	"os/signal"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

func main() {
	log.SetFlags(log.LstdFlags | log.Lshortfile)
	serve()
}

func serve() {
	log.SetFlags(log.LstdFlags | log.Lshortfile)
	lis, err := net.Listen("tcp", "0.0.0.0:5000")
	if err != nil {
		log.Fatalf("Error while listening : %v", err)
	}

	// credentials
	certFile := data.Path("x509/server_cert.pem")
	keyFile := data.Path("x509/server_key.pem")

	creds, sslErr := credentials.NewServerTLSFromFile(certFile, keyFile)
	if sslErr != nil {
		log.Fatalf("Failed loading certification : %v", sslErr)
		return
	}
	// opts := grpc.Creds(creds)
	opts := []grpc.ServerOption{
		grpc.UnaryInterceptor(unaryInterceptor),
		grpc.StreamInterceptor(streamInterceptor),
		grpc.Creds(creds),
	}
	// fmt.Println("creds :: ", opts, creds)
	s := grpc.NewServer(opts...)

	// Register grpc servers
	blogpb.RegisterBlogServiceServer(s, &blog.Server{})
	userpb.RegisterUserServiceServer(s, &user.Server{})
	testpb.RegisterTestServiceServer(s, &test.Server{})
	authpb.RegisterAuthServiceServer(s, &user.AuthServer{})
	go func() {
		if err := s.Serve(lis); err != nil {
			log.Fatalf("Error while serving : %v", err)
		}
	}()

	ch := make(chan os.Signal, 1)
	signal.Notify(ch, os.Interrupt)

	// Block until signal is received
	<-ch

	fmt.Println("Stopping the server ")
	s.Stop()
	fmt.Println("Stopping the Listener")
	lis.Close()
	fmt.Println("Closing mongodb Connection.")
	config.ConnectDB().Disconnect(context.TODO())
	fmt.Println("End of program .")

}
