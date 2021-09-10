package user

import (
	userpb "blog.com/protos/userpb"
	"context"
	"fmt"
)

var userID string

// CreateUser ...
func CreateUser(u userpb.UserServiceClient) {
	fmt.Println("Creating the user")

	user := &userpb.User{
		Name:     "vikash",
		Email:    "vikashsurin10@gmail.com",
		Password: "password",
	}

	createUserRes, err := u.CreateUser(context.Background(), &userpb.CreateUserRequest{User: user})
	if err != nil {
		fmt.Println("Unexpected error :: ", err)
	}
	fmt.Println("Created User :: ", createUserRes)
	userID = createUserRes.GetUser().GetId()
}

// ReadUser ...
func ReadUser(u userpb.UserServiceClient) {
	fmt.Println("Reading the user.")

	readUserReq := &userpb.ReadUserRequest{UserId: userID}
	readUserRes, err := u.ReadUser(context.Background(), readUserReq)
	if err != nil {
		fmt.Println("there was an error reading ", err)
	}
	fmt.Println("Read User :: ", readUserRes)
}

// UpdateUser ...
func UpdateUser(u userpb.UserServiceClient) {
	fmt.Println("Update the user.")
	newUser := &userpb.User{
		Id:    userID,
		Name:  "vikashsurin",
		Email: "vikash@gmail.com",
	}
	updateUserRes, err := u.UpdateUser(context.Background(), &userpb.UpdateUserRequest{User: newUser})
	if err != nil {
		fmt.Println("error updating the user .", err)
	}
	fmt.Println("Updated the user :: ", updateUserRes)
}

// DeleteUser ...
func DeleteUser(u userpb.UserServiceClient) {
	fmt.Println("Delete the user.")

	req := &userpb.DeleteUserRequest{
		UserId: "xyz",
	}
	deleteRes, err := u.DeleteUser(context.Background(), req)
	if err != nil {
		fmt.Println("error deleting the user .", err)
	}
	fmt.Println("Updated the user :: ", deleteRes)
}
