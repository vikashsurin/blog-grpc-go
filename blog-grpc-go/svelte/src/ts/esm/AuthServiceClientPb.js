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
    constructor(hostname, credentials, options) {
        this.methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(protos_auth_pb.LoginResponse, (request) => {
            return request.serializeBinary();
        }, protos_auth_pb.LoginResponse.deserializeBinary);
        this.methodInfoLogout = new grpcWeb.AbstractClientBase.MethodInfo(protos_auth_pb.LogoutResponse, (request) => {
            return request.serializeBinary();
        }, protos_auth_pb.LogoutResponse.deserializeBinary);
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
    login(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/auth.AuthService/Login', request, metadata || {}, this.methodInfoLogin, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/auth.AuthService/Login', request, metadata || {}, this.methodInfoLogin);
    }
    logout(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/auth.AuthService/Logout', request, metadata || {}, this.methodInfoLogout, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/auth.AuthService/Logout', request, metadata || {}, this.methodInfoLogout);
    }
}
