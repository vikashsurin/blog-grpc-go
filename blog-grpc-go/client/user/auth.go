package user

import (
	"blog/protos/authpb"
	"context"
	"fmt"
	"log"
)

// Token ....
var Token string

// Login ...
func Login(c authpb.AuthServiceClient) {
	fmt.Println("Logging in User")

	req := &authpb.LoginRequest{
		UserName: "vikash",
		Password: "password",
	}
	res, err := c.Login(context.Background(), req)
	if err != nil {
		log.Println("there was an error Login Client ", err)
	}
	Token = res.GetToken()
	fmt.Println("login res received ", res.GetToken())
}
