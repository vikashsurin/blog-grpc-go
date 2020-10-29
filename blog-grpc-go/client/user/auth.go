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
		UserEmail: "vikashsurin10@gmail.com",
		Password:  "password",
	}
	res, err := c.Login(context.Background(), req)
	if err != nil {
		log.Println("there was an error Login Client ", err)
	}
	Token = res.GetToken()
	fmt.Println("login res received ", res.GetToken())
}

// Logout ...
func Logout(c authpb.AuthServiceClient) {
	fmt.Println("Logging out user")
	res, err := c.Logout(context.Background(), &authpb.LogoutRequest{})
	if err != nil {
		log.Fatalln("error while logging out", err)
	}
	fmt.Println(res)
}
