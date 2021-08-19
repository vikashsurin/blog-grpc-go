package config

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

//ConnectDB ...
func ConnectDB() *mongo.Client {
	fmt.Println("mongodb connecting...")
	uri := os.Getenv("URI")
	clientOptions := options.Client().ApplyURI(uri)
	// db := "mongodb+srv://vikash:vikash@cluster0.1dafl.mongodb.net/blogdb?retryWrites=true&w=majority"
	// clientOptions := options.Client().ApplyURI(db)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal(err)
	}
	// Check the connection
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		fmt.Println("Ping error.")
		log.Fatal(err)
	}

	return client
}
