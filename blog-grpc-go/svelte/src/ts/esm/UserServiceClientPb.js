/**
 * @fileoverview gRPC-Web generated client stub for user
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as protos_user_pb from '../protos/user_pb';
export class UserServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoCreateUser = new grpcWeb.AbstractClientBase.MethodInfo(protos_user_pb.CreateUserResponse, (request) => {
            return request.serializeBinary();
        }, protos_user_pb.CreateUserResponse.deserializeBinary);
        this.methodInfoReadUser = new grpcWeb.AbstractClientBase.MethodInfo(protos_user_pb.ReadUserResponse, (request) => {
            return request.serializeBinary();
        }, protos_user_pb.ReadUserResponse.deserializeBinary);
        this.methodInfoUpdateUser = new grpcWeb.AbstractClientBase.MethodInfo(protos_user_pb.UpdateUserResponse, (request) => {
            return request.serializeBinary();
        }, protos_user_pb.UpdateUserResponse.deserializeBinary);
        this.methodInfoDeleteUser = new grpcWeb.AbstractClientBase.MethodInfo(protos_user_pb.DeleteUserResponse, (request) => {
            return request.serializeBinary();
        }, protos_user_pb.DeleteUserResponse.deserializeBinary);
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
    createUser(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/user.UserService/CreateUser', request, metadata || {}, this.methodInfoCreateUser, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/user.UserService/CreateUser', request, metadata || {}, this.methodInfoCreateUser);
    }
    readUser(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/user.UserService/ReadUser', request, metadata || {}, this.methodInfoReadUser, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/user.UserService/ReadUser', request, metadata || {}, this.methodInfoReadUser);
    }
    updateUser(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/user.UserService/UpdateUser', request, metadata || {}, this.methodInfoUpdateUser, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/user.UserService/UpdateUser', request, metadata || {}, this.methodInfoUpdateUser);
    }
    deleteUser(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/user.UserService/DeleteUser', request, metadata || {}, this.methodInfoDeleteUser, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/user.UserService/DeleteUser', request, metadata || {}, this.methodInfoDeleteUser);
    }
}
