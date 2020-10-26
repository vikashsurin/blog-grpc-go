const {
  Blog,
  CreateBlogRequest,
  ReadBlogRequest,
  UpdateBlogRequest,
  DeleteBlogRequest,
} = require("../protos/blog_pb");
const { BlogServiceClient } = require("../protos/blog_grpc_web_pb");

export var blogID = "5f8043e7f5edbb1673a50f48";

export function CreateBlog() {
  var client = new BlogServiceClient("http://localhost:8080");

  var blog = new Blog();
  blog.setAuthorId("vikash");
  blog.setTitle("new blog");
  blog.setContent("This is a new content.");

  var request = new CreateBlogRequest();
  request.setBlog(blog);
  client.createBlog(request, {}, (err, response) => {
    console.log("CREATE BLOG :: ", response);
    blogID = response.getBlog().getId();
  });

  console.log(" this is blog id", blogID);
}

export function ReadBlog() {
  var client = new BlogServiceClient("http://localhost:8080");
  var request = new ReadBlogRequest();
  request.setBlogId(blogID);
  client.readBlog(request, {}, (err, response) => {
    console.log("READ BLOG ::  ", response);
  });
}

export function UpdateBlog() {
  var client = new BlogServiceClient("http://localhost:8080");

  var blog = new Blog();
  blog.setId(blogID);
  blog.setAuthorId("vikash");
  blog.setTitle("updated blog from react");
  blog.setContent("This is a new Updated content.");

  var request = new UpdateBlogRequest();
  request.setBlog(blog);

  client.updateBlog(request, {}, (err, response) => {
    console.log("UPDATE BLOG :: ", response);
  });
}

export function DeleteBlog() {
  var client = new BlogServiceClient("http://localhost:8080");

  var request = new DeleteBlogRequest();
  request.setBlogId(blogID);

  client.deleteBlog(request, {}, (err, response) => {
    console.log("DELETED BLOG :: ", response);
  });
}
