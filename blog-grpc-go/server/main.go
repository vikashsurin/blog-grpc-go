package main

import (
	"context"
	"crypto/tls"
	"fmt"
	"log"
	"net"

	"blog.com/protos/authpb"
	blogpb "blog.com/protos/blogpb"
	testpb "blog.com/protos/testpb"
	userpb "blog.com/protos/userpb"
	blog "blog.com/server/blogs"
	"blog.com/server/config"
	"blog.com/server/test"
	"blog.com/server/user"
	"github.com/gomodule/redigo/redis"

	"blog.com/data"

	"os"
	"os/signal"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

func main() {
	log.SetFlags(log.LstdFlags | log.Lshortfile)
	initCache()

	serve()

}

func initCache() {
	conn, err := redis.DialURL("redis://localhost")
	if err != nil {
		panic(err)
	}
	config.Cache = conn

}

func serve() {
	log.SetFlags(log.LstdFlags | log.Lshortfile)
	// lis, err := net.Listen("tcp", "0.0.0.0:5000")
	lis, err := net.Listen("tcp", "0.0.0.0:8080")
	if err != nil {
		log.Fatalf("Error while listening : %v", err)
	}

	// credentials
	cert, err := tls.LoadX509KeyPair(data.Path("x509/server_cert.pem"), data.Path("x509/server_key.pem"))
	if err != nil {
		log.Fatalf("failed to load key pair: %s", err)
	}
	// tls toggle
	tls := false
	var opts []grpc.ServerOption
	if tls == true {
		opts = []grpc.ServerOption{
			// grpc.UnaryInterceptor(unaryInterceptor),
			grpc.UnaryInterceptor(ensureValidToken),
			grpc.StreamInterceptor(streamInterceptor),
			grpc.Creds(credentials.NewServerTLSFromCert(&cert)),
		}
	} else {
		opts = []grpc.ServerOption{
			// grpc.UnaryInterceptor(unaryInterceptor),
			// grpc.UnaryInterceptor(unaryInterceptor),
			grpc.UnaryInterceptor(ensureValidToken),
			grpc.StreamInterceptor(streamInterceptor),
		}
	}
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
