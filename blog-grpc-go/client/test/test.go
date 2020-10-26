package test

import (
	testpb "blog/protos/testpb"
	"context"
	"fmt"
)

// TestServer ...
func TestServer(t testpb.TestServiceClient) {
	fmt.Println("Testing Server ")
	testRes, err := t.Test(context.Background(), &testpb.TestRequest{Test: "hi there"})
	if err != nil {
		fmt.Println("Test error :: ", err)
	}
	fmt.Println("Tested Server :: ", testRes)
}
