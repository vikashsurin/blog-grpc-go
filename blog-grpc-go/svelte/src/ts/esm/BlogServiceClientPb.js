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
    constructor(hostname, credentials, options) {
        this.methodInfoCreateBlog = new grpcWeb.AbstractClientBase.MethodInfo(protos_blog_pb.CreateBlogResponse, (request) => {
            return request.serializeBinary();
        }, protos_blog_pb.CreateBlogResponse.deserializeBinary);
        this.methodInfoReadBlog = new grpcWeb.AbstractClientBase.MethodInfo(protos_blog_pb.ReadBlogResponse, (request) => {
            return request.serializeBinary();
        }, protos_blog_pb.ReadBlogResponse.deserializeBinary);
        this.methodInfoUpdateBlog = new grpcWeb.AbstractClientBase.MethodInfo(protos_blog_pb.UpdateBlogResponse, (request) => {
            return request.serializeBinary();
        }, protos_blog_pb.UpdateBlogResponse.deserializeBinary);
        this.methodInfoDeleteBlog = new grpcWeb.AbstractClientBase.MethodInfo(protos_blog_pb.DeleteBlogResponse, (request) => {
            return request.serializeBinary();
        }, protos_blog_pb.DeleteBlogResponse.deserializeBinary);
        this.methodInfoListBlog = new grpcWeb.AbstractClientBase.MethodInfo(protos_blog_pb.ListBlogResponse, (request) => {
            return request.serializeBinary();
        }, protos_blog_pb.ListBlogResponse.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    createBlog(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/blog.BlogService/CreateBlog', request, metadata || {}, this.methodInfoCreateBlog, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/blog.BlogService/CreateBlog', request, metadata || {}, this.methodInfoCreateBlog);
    }
    readBlog(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/blog.BlogService/ReadBlog', request, metadata || {}, this.methodInfoReadBlog, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/blog.BlogService/ReadBlog', request, metadata || {}, this.methodInfoReadBlog);
    }
    updateBlog(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/blog.BlogService/UpdateBlog', request, metadata || {}, this.methodInfoUpdateBlog, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/blog.BlogService/UpdateBlog', request, metadata || {}, this.methodInfoUpdateBlog);
    }
    deleteBlog(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/blog.BlogService/DeleteBlog', request, metadata || {}, this.methodInfoDeleteBlog, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/blog.BlogService/DeleteBlog', request, metadata || {}, this.methodInfoDeleteBlog);
    }
    listBlog(request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/blog.BlogService/ListBlog', request, metadata || {}, this.methodInfoListBlog);
    }
}
