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

  methodInfoCreateUser = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_user_pb.CreateUserResponse,
    (request: protos_user_pb.CreateUserRequest) => {
      return request.serializeBinary();
    },
    protos_user_pb.CreateUserResponse.deserializeBinary
  );

  createUser(
    request: protos_user_pb.CreateUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_user_pb.CreateUserResponse>;

  createUser(
    request: protos_user_pb.CreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_user_pb.CreateUserResponse) => void): grpcWeb.ClientReadableStream<protos_user_pb.CreateUserResponse>;

  createUser(
    request: protos_user_pb.CreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_user_pb.CreateUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.UserService/CreateUser',
        request,
        metadata || {},
        this.methodInfoCreateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.UserService/CreateUser',
    request,
    metadata || {},
    this.methodInfoCreateUser);
  }

  methodInfoReadUser = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_user_pb.ReadUserResponse,
    (request: protos_user_pb.ReadUserRequest) => {
      return request.serializeBinary();
    },
    protos_user_pb.ReadUserResponse.deserializeBinary
  );

  readUser(
    request: protos_user_pb.ReadUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_user_pb.ReadUserResponse>;

  readUser(
    request: protos_user_pb.ReadUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_user_pb.ReadUserResponse) => void): grpcWeb.ClientReadableStream<protos_user_pb.ReadUserResponse>;

  readUser(
    request: protos_user_pb.ReadUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_user_pb.ReadUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.UserService/ReadUser',
        request,
        metadata || {},
        this.methodInfoReadUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.UserService/ReadUser',
    request,
    metadata || {},
    this.methodInfoReadUser);
  }

  methodInfoUpdateUser = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_user_pb.UpdateUserResponse,
    (request: protos_user_pb.UpdateUserRequest) => {
      return request.serializeBinary();
    },
    protos_user_pb.UpdateUserResponse.deserializeBinary
  );

  updateUser(
    request: protos_user_pb.UpdateUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_user_pb.UpdateUserResponse>;

  updateUser(
    request: protos_user_pb.UpdateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_user_pb.UpdateUserResponse) => void): grpcWeb.ClientReadableStream<protos_user_pb.UpdateUserResponse>;

  updateUser(
    request: protos_user_pb.UpdateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_user_pb.UpdateUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.UserService/UpdateUser',
        request,
        metadata || {},
        this.methodInfoUpdateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.UserService/UpdateUser',
    request,
    metadata || {},
    this.methodInfoUpdateUser);
  }

  methodInfoDeleteUser = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_user_pb.DeleteUserResponse,
    (request: protos_user_pb.DeleteUserRequest) => {
      return request.serializeBinary();
    },
    protos_user_pb.DeleteUserResponse.deserializeBinary
  );

  deleteUser(
    request: protos_user_pb.DeleteUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_user_pb.DeleteUserResponse>;

  deleteUser(
    request: protos_user_pb.DeleteUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_user_pb.DeleteUserResponse) => void): grpcWeb.ClientReadableStream<protos_user_pb.DeleteUserResponse>;

  deleteUser(
    request: protos_user_pb.DeleteUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_user_pb.DeleteUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/user.UserService/DeleteUser',
        request,
        metadata || {},
        this.methodInfoDeleteUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/user.UserService/DeleteUser',
    request,
    metadata || {},
    this.methodInfoDeleteUser);
  }

}

