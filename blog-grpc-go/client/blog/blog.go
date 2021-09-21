package blog

import (
	"context"
	"fmt"
	"io"
	"log"

	blogpb "blog.com/protos/blogpb"
)

var blogID = "613e462711dd563aeb05e21d"
var userID = "xzx"

// CreateBlog ...
func CreateBlog(c blogpb.BlogServiceClient) {

	fmt.Println("Creating the blog")
	blog := &blogpb.Blog{
		AuthorId: "Stephane",
		Title:    "My First Blog",
		Content:  "Content of the first blog",
	}
	createBlogRes, err := c.CreateBlog(context.Background(), &blogpb.CreateBlogRequest{Blog: blog})
	if err != nil {
		log.Fatalf("Unexpected error: %v", err)
	}
	fmt.Printf("Created Blog ::  %v \n", createBlogRes)
	blogID = createBlogRes.GetBlog().GetId()
}

// ReadBlog ...
func ReadBlog(c blogpb.BlogServiceClient) {
	fmt.Println("Reading the blog")

	// _, err := c.ReadBlog(context.Background(), &blogpb.ReadBlogRequest{BlogId: "dfdf"})
	// if err != nil {
	// 	fmt.Println("there was an error reading", err)
	// }
	readBlogReq := &blogpb.ReadBlogRequest{BlogId: blogID}
	readBlogRes, err := c.ReadBlog(context.Background(), readBlogReq)
	if err != nil {
		fmt.Println("there was an error reading", err)
	}
	fmt.Println("Read Blog :: ", readBlogRes)
}

// UpdateBlog ...
func UpdateBlog(c blogpb.BlogServiceClient) {
	fmt.Println("Updating Blog")
	newBlog := &blogpb.Blog{
		Id:       blogID,
		AuthorId: "Vikash surin ",
		Title:    "Updated blog from go",
		Content:  "Content of the  blog",
	}
	updateRes, err := c.UpdateBlog(context.Background(), &blogpb.UpdateBlogRequest{Blog: newBlog})
	if err != nil {
		fmt.Println("error udpating the doc. ", err)
	}
	fmt.Println("Updated Blog :: ", updateRes)
}

// DeleteBlog ...
func DeleteBlog(c blogpb.BlogServiceClient) {
	fmt.Println("Deleting the Blog.")
	deleteRes, err := c.DeleteBlog(context.Background(), &blogpb.DeleteBlogRequest{BlogId: blogID})
	if err != nil {
		fmt.Println("error deleting the blog")
	}
	fmt.Println("Deleted Blog :: ", deleteRes)
}

// ListBlog ...
func ListBlog(c blogpb.BlogServiceClient) {
	fmt.Println("Listing Blogs.")

	stream, err := c.ListBlog(context.Background(), &blogpb.ListBlogRequest{})
	if err != nil {
		log.Fatalln("error while calling ListBlog rpc ", err)
	}
	for {
		res, err := stream.Recv()
		if err == io.EOF {
			break
		}
		if err != nil {
			log.Fatalln("Something happened ", err)
		}
		fmt.Println(res.GetBlog())
	}
}

//ListBlogByUserId ...
func ListBlogByUser(c blogpb.BlogServiceClient) {
	fmt.Println("Listing Blogs.")

	stream, err := c.ListBlogByUserId(context.Background(), &blogpb.ListBlogRequestByUserId{UserId: userID})
	if err != nil {
		log.Fatalln("error while calling ListBlog rpc ", err)
	}
	for {
		res, err := stream.Recv()
		if err == io.EOF {
			break
		}
		if err != nil {
			log.Fatalln("Something happened ", err)
		}
		fmt.Println(res.GetBlog())
	}
}
