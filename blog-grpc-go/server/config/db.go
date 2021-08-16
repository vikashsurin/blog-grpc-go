package config

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

//ConnectDB ...
func ConnectDB() *mongo.Client {
	fmt.Println("mongodb connecting...")
	clientOptions := options.Client().ApplyURI("mongodb://mymongo:27017")
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
