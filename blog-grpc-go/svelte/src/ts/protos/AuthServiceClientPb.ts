/**
 * @fileoverview gRPC-Web generated client stub for auth
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as protos_auth_pb from '../protos/auth_pb';


export class AuthServiceClient {
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

  methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_auth_pb.LoginResponse,
    (request: protos_auth_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    protos_auth_pb.LoginResponse.deserializeBinary
  );

  login(
    request: protos_auth_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_auth_pb.LoginResponse>;

  login(
    request: protos_auth_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_auth_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<protos_auth_pb.LoginResponse>;

  login(
    request: protos_auth_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_auth_pb.LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/Login',
        request,
        metadata || {},
        this.methodInfoLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/Login',
    request,
    metadata || {},
    this.methodInfoLogin);
  }

  methodInfoLogout = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_auth_pb.LogoutResponse,
    (request: protos_auth_pb.LogoutRequest) => {
      return request.serializeBinary();
    },
    protos_auth_pb.LogoutResponse.deserializeBinary
  );

  logout(
    request: protos_auth_pb.LogoutRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_auth_pb.LogoutResponse>;

  logout(
    request: protos_auth_pb.LogoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_auth_pb.LogoutResponse) => void): grpcWeb.ClientReadableStream<protos_auth_pb.LogoutResponse>;

  logout(
    request: protos_auth_pb.LogoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_auth_pb.LogoutResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/Logout',
        request,
        metadata || {},
        this.methodInfoLogout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/Logout',
    request,
    metadata || {},
    this.methodInfoLogout);
  }

}

