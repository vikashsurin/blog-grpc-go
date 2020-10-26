package test

import (
	testpb "blog/protos/testpb"
	"context"
	"fmt"
)

// Server ...
type Server struct {
	testpb.UnimplementedTestServiceServer
}

// // Testserver ...
// func Testserver() *grpc.Server {
// 	t := grpc.NewServer()
// 	testpb.RegisterTestServiceServer(t, &Server{})
// 	return t
// }

// Test ...
func (*Server) Test(ctx context.Context, req *testpb.TestRequest) (*testpb.TestResponse, error) {
	fmt.Println("Test Server is running .")
	test := req.GetTest()

	response := &testpb.TestResponse{Test: test}
	return response, nil
}
