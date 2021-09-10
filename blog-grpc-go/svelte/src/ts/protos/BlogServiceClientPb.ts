/**
 * @fileoverview gRPC-Web generated client stub for blog
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as protos_blog_pb from '../protos/blog_pb';


export class BlogServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateBlog = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_blog_pb.CreateBlogResponse,
    (request: protos_blog_pb.CreateBlogRequest) => {
      return request.serializeBinary();
    },
    protos_blog_pb.CreateBlogResponse.deserializeBinary
  );

  createBlog(
    request: protos_blog_pb.CreateBlogRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_blog_pb.CreateBlogResponse>;

  createBlog(
    request: protos_blog_pb.CreateBlogRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_blog_pb.CreateBlogResponse) => void): grpcWeb.ClientReadableStream<protos_blog_pb.CreateBlogResponse>;

  createBlog(
    request: protos_blog_pb.CreateBlogRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_blog_pb.CreateBlogResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/blog.BlogService/CreateBlog',
        request,
        metadata || {},
        this.methodInfoCreateBlog,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/blog.BlogService/CreateBlog',
    request,
    metadata || {},
    this.methodInfoCreateBlog);
  }

  methodInfoReadBlog = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_blog_pb.ReadBlogResponse,
    (request: protos_blog_pb.ReadBlogRequest) => {
      return request.serializeBinary();
    },
    protos_blog_pb.ReadBlogResponse.deserializeBinary
  );

  readBlog(
    request: protos_blog_pb.ReadBlogRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_blog_pb.ReadBlogResponse>;

  readBlog(
    request: protos_blog_pb.ReadBlogRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_blog_pb.ReadBlogResponse) => void): grpcWeb.ClientReadableStream<protos_blog_pb.ReadBlogResponse>;

  readBlog(
    request: protos_blog_pb.ReadBlogRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_blog_pb.ReadBlogResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/blog.BlogService/ReadBlog',
        request,
        metadata || {},
        this.methodInfoReadBlog,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/blog.BlogService/ReadBlog',
    request,
    metadata || {},
    this.methodInfoReadBlog);
  }

  methodInfoUpdateBlog = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_blog_pb.UpdateBlogResponse,
    (request: protos_blog_pb.UpdateBlogRequest) => {
      return request.serializeBinary();
    },
    protos_blog_pb.UpdateBlogResponse.deserializeBinary
  );

  updateBlog(
    request: protos_blog_pb.UpdateBlogRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_blog_pb.UpdateBlogResponse>;

  updateBlog(
    request: protos_blog_pb.UpdateBlogRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_blog_pb.UpdateBlogResponse) => void): grpcWeb.ClientReadableStream<protos_blog_pb.UpdateBlogResponse>;

  updateBlog(
    request: protos_blog_pb.UpdateBlogRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_blog_pb.UpdateBlogResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/blog.BlogService/UpdateBlog',
        request,
        metadata || {},
        this.methodInfoUpdateBlog,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/blog.BlogService/UpdateBlog',
    request,
    metadata || {},
    this.methodInfoUpdateBlog);
  }

  methodInfoDeleteBlog = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_blog_pb.DeleteBlogResponse,
    (request: protos_blog_pb.DeleteBlogRequest) => {
      return request.serializeBinary();
    },
    protos_blog_pb.DeleteBlogResponse.deserializeBinary
  );

  deleteBlog(
    request: protos_blog_pb.DeleteBlogRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_blog_pb.DeleteBlogResponse>;

  deleteBlog(
    request: protos_blog_pb.DeleteBlogRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_blog_pb.DeleteBlogResponse) => void): grpcWeb.ClientReadableStream<protos_blog_pb.DeleteBlogResponse>;

  deleteBlog(
    request: protos_blog_pb.DeleteBlogRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_blog_pb.DeleteBlogResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/blog.BlogService/DeleteBlog',
        request,
        metadata || {},
        this.methodInfoDeleteBlog,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/blog.BlogService/DeleteBlog',
    request,
    metadata || {},
    this.methodInfoDeleteBlog);
  }

  methodInfoListBlog = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_blog_pb.ListBlogResponse,
    (request: protos_blog_pb.ListBlogRequest) => {
      return request.serializeBinary();
    },
    protos_blog_pb.ListBlogResponse.deserializeBinary
  );

  listBlog(
    request: protos_blog_pb.ListBlogRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/blog.BlogService/ListBlog',
      request,
      metadata || {},
      this.methodInfoListBlog);
  }

}

