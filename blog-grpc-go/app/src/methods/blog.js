import { createAsyncThunk } from "@reduxjs/toolkit";
import { keys } from "../keys/key.js";
// var fs = require("fs");

const {
  Blog,
  CreateBlogRequest,
  ReadBlogRequest,
  UpdateBlogRequest,
  DeleteBlogRequest,
  ListBlogRequest,
} = require("protofiles/blog_pb");

const {
  BlogServicePromiseClient,
  BlogServiceClient,
  default: blog,
} = require("protofiles/blog_grpc_web_pb");

export var blogID = "5f8043e7f5edbb1673a50f48";
const host = keys.k8s;

export const CreateBlog = async (author, title, content) => {
  var client = new BlogServicePromiseClient(host, null, null);

  var blog = new Blog();
  blog.setAuthorId(author);
  blog.setTitle(title);
  blog.setContent(content);

  var request = new CreateBlogRequest();
  request.setBlog(blog);

  try {
    const res = await client.createBlog(request, {});
    console.log(res.getBlog().getId());
    return res.getBlog();
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

export const listblog = () => {
  var client = new BlogServiceClient(host);

  var request = new ListBlogRequest();
  var stream = client.listBlog(request, {});

  return stream;
};
