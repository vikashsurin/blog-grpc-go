package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	fmt.Println("connecting")
	// clientOptions := options.Client().
	// 	ApplyURI("mongodb+srv://vikash:vikash@cluster0.1dafl.mongodb.net/blogdb?retryWrites=true&w=majority")
	// clientOptions := options.Client().
	// 	ApplyURI("mongodb://localhost:27017")
	// os.Getenv
	clientOptions := options.Client().
		ApplyURI("mongodb://localhost:27017")
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		fmt.Println("Ping Error")
		log.Fatal(err)
	}
	blogdb := client.Database("blogdb")
	blogs := blogdb.Collection("blogs")

	res, err := blogs.InsertOne(ctx, bson.D{
		{Key: "title", Value: "this is a to docker and  new blog"},
	})
	if err != nil {
		fmt.Println("ERROR", err)
	}
	fmt.Println(res)
}
