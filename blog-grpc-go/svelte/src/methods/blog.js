import {
  Blog,
  CreateBlogRequest,
  ReadBlogRequest,
  UpdateBlogRequest,
  DeleteBlogRequest,
  ListBlogRequest,
  ListBlogRequestByUserId,
} from "protos/blog_pb";
import {
  BlogServiceClient,
  BlogServicePromiseClient,
  // default:blog,
} from "protos/blog_grpc_web_pb";

import { keys } from "../keys/keys";

const host = keys.host;

export var blogID = "5f8043e7f5edbb1673a50f48";

export const CreateBlog = async (author, title, content) => {
  var client = new BlogServicePromiseClient(host, {"authorization":"09622b69-5e7c-44ca-8af2-46e95e800712"}, null);

  var blog = new Blog();
  blog.setAuthorId(author);
  blog.setTitle(title);
  blog.setContent(content);

  var request = new CreateBlogRequest();
  request.setBlog(blog);

  try {
    const res = await client.createBlog(request, {});
    console.log(res.getBlog().getId());
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const ReadBlog = async (id) => {
  var client = new BlogServicePromiseClient(host);
  var request = new ReadBlogRequest();
  request.setBlogId(id);
  try {
    const res = await client.readBlog(request, {}, (err, response) => {
      console.log("READ BLOG ::  ", response);
    });
    return res;
  } catch (error) {
    return error;
  }
};
export const UpdateBlog = async (id, title, content) => {
  var client = new BlogServicePromiseClient(host);

  var blog = new Blog();
  blog.setId(id);
  blog.setAuthorId("vikash");
  blog.setTitle(title);
  blog.setContent(content);

  var request = new UpdateBlogRequest();
  request.setBlog(blog);

  const res = await client.updateBlog(request, {}, (err, response) => {
    console.log("UPDATE BLOG :: ", response);
  });
  return res;
};

export const DeleteBlog = async () => {
  var client = new BlogServicePromiseClient(host);

  var request = new DeleteBlogRequest();
  request.setBlogId(blogID);

  client.deleteBlog(request, {}, (err, response) => {
    console.log("DELETED BLOG :: ", response);
  });
};

export const ListBlog = async () => {
  var client = new BlogServicePromiseClient(host);

  var request = new ListBlogRequest();
  var stream = await client.listBlog(request, {});

  return stream;
};

export const ListBlogForUser = async (userId) => {
  var client = new BlogServicePromiseClient(host);

  var request = new ListBlogRequestByUserId();
  request.setUserId(userId);

  var stream = await client.listBlogByUserId(request, {}, (err, response) => {
    console.log(err)
  });

  return stream;
};
