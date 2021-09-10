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
	// uri := os.Getenv("URI")
	// uri := "mongodb+srv://vikash:OAbMOP0FpJlJH14y@cluster0.1dafl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
	uri := "mongodb://localhost:27017"
	clientOptions := options.Client().ApplyURI(uri)

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
