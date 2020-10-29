const {
  Blog,
  CreateBlogRequest,
  ReadBlogRequest,
  UpdateBlogRequest,
  DeleteBlogRequest,
  ListBlogRequest,
} = require("../protos/blog_pb");
const {
  BlogServiceClient,
  default: blog,
} = require("../protos/blog_grpc_web_pb");

export var blogID = "5f8043e7f5edbb1673a50f48";
const host = "http://localhost:8000";

export function CreateBlog() {
  var client = new BlogServiceClient(host);

  var blog = new Blog();
  blog.setAuthorId("vikash surin");
  blog.setTitle("new blog from react");
  blog.setContent("This is a new content.");

  var request = new CreateBlogRequest();
  request.setBlog(blog);

  console.log("create blog");
  client.createBlog(request, {}, (err, response) => {
    var blogObj = {
      authorId: response.getBlog().getAuthorId(),
      title: response.getBlog().getTitle(),
      content: response.getBlog().getContent(),
    };
    console.log("response ", blogObj);
  });

  // var call = client.createBlog(request, {}, (err, response) => {
  //   console.log("CREATE BLOG :: ", response);
  //   if (err){
  //     console.log(err.code)
  //     console.log(err.message)
  //   }else{
  //     console.log(response.getBlog())
  //   }
  // });
  // call.on("status",function(status){
  //   console.log(status.code);
  //   console.log(status.details);
  //   console.log(status.metadata);
  // })

  console.log("create blog exited");
}

export function ReadBlog() {
  var client = new BlogServiceClient(host);
  var request = new ReadBlogRequest();
  request.setBlogId(blogID);
  client.readBlog(request, {}, (err, response) => {
    console.log("READ BLOG ::  ", response);
  });
}

export function UpdateBlog() {
  var client = new BlogServiceClient(host);

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
  var client = new BlogServiceClient(host);

  var request = new DeleteBlogRequest();
  request.setBlogId(blogID);

  client.deleteBlog(request, {}, (err, response) => {
    console.log("DELETED BLOG :: ", response);
  });
}
export function listblog() {
  console.log("list blog called");
  var client = new BlogServiceClient(host);

  var request = new ListBlogRequest();
  var stream = client.listBlog(request, {});

  // create empty array of blogs object
  var blogs = new Array();

  stream.on("data", (response) => {
    var blogObj = {
      id: response.getBlog().getId(),
      authorId: response.getBlog().getAuthorId(),
      title: response.getBlog().getTitle(),
      content: response.getBlog().getContent(),
    };

    // push each blog object to blogs array.
    blogs.push(blogObj);
  });

  console.log("array ", blogs);

  stream.on("status", function (status) {
    console.log(status.code);
    console.log(status.details);
    console.log(status.metadata);
  });
  stream.on("end", function (end) {
    // stream end signal
    console.log("steam end");
  });
}
