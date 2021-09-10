/**
 * @fileoverview gRPC-Web generated client stub for user
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
const grpc = {};
grpc.web = require('grpc-web');
const proto = {};
proto.user = require('./user_pb.js');
/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.user.UserServiceClient =
    function (hostname, credentials, options) {
        if (!options)
            options = {};
        options['format'] = 'text';
        /**
         * @private @const {!grpc.web.GrpcWebClientBase} The client
         */
        this.client_ = new grpc.web.GrpcWebClientBase(options);
        /**
         * @private @const {string} The hostname
         */
        this.hostname_ = hostname;
    };
/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.user.UserServicePromiseClient =
    function (hostname, credentials, options) {
        if (!options)
            options = {};
        options['format'] = 'text';
        /**
         * @private @const {!grpc.web.GrpcWebClientBase} The client
         */
        this.client_ = new grpc.web.GrpcWebClientBase(options);
        /**
         * @private @const {string} The hostname
         */
        this.hostname_ = hostname;
    };
/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.CreateUserRequest,
 *   !proto.user.CreateUserResponse>}
 */
const methodDescriptor_UserService_CreateUser = new grpc.web.MethodDescriptor('/user.UserService/CreateUser', grpc.web.MethodType.UNARY, proto.user.CreateUserRequest, proto.user.CreateUserResponse, 
/**
 * @param {!proto.user.CreateUserRequest} request
 * @return {!Uint8Array}
 */
function (request) {
    return request.serializeBinary();
}, proto.user.CreateUserResponse.deserializeBinary);
/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.CreateUserRequest,
 *   !proto.user.CreateUserResponse>}
 */
const methodInfo_UserService_CreateUser = new grpc.web.AbstractClientBase.MethodInfo(proto.user.CreateUserResponse, 
/**
 * @param {!proto.user.CreateUserRequest} request
 * @return {!Uint8Array}
 */
function (request) {
    return request.serializeBinary();
}, proto.user.CreateUserResponse.deserializeBinary);
/**
 * @param {!proto.user.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.CreateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.CreateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.UserServiceClient.prototype.createUser =
    function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/user.UserService/CreateUser', request, metadata || {}, methodDescriptor_UserService_CreateUser, callback);
    };
/**
 * @param {!proto.user.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.CreateUserResponse>}
 *     Promise that resolves to the response
 */
proto.user.UserServicePromiseClient.prototype.createUser =
    function (request, metadata) {
        return this.client_.unaryCall(this.hostname_ +
            '/user.UserService/CreateUser', request, metadata || {}, methodDescriptor_UserService_CreateUser);
    };
/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.ReadUserRequest,
 *   !proto.user.ReadUserResponse>}
 */
const methodDescriptor_UserService_ReadUser = new grpc.web.MethodDescriptor('/user.UserService/ReadUser', grpc.web.MethodType.UNARY, proto.user.ReadUserRequest, proto.user.ReadUserResponse, 
/**
 * @param {!proto.user.ReadUserRequest} request
 * @return {!Uint8Array}
 */
function (request) {
    return request.serializeBinary();
}, proto.user.ReadUserResponse.deserializeBinary);
/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.ReadUserRequest,
 *   !proto.user.ReadUserResponse>}
 */
const methodInfo_UserService_ReadUser = new grpc.web.AbstractClientBase.MethodInfo(proto.user.ReadUserResponse, 
/**
 * @param {!proto.user.ReadUserRequest} request
 * @return {!Uint8Array}
 */
function (request) {
    return request.serializeBinary();
}, proto.user.ReadUserResponse.deserializeBinary);
/**
 * @param {!proto.user.ReadUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.ReadUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.ReadUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.UserServiceClient.prototype.readUser =
    function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/user.UserService/ReadUser', request, metadata || {}, methodDescriptor_UserService_ReadUser, callback);
    };
/**
 * @param {!proto.user.ReadUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.ReadUserResponse>}
 *     Promise that resolves to the response
 */
proto.user.UserServicePromiseClient.prototype.readUser =
    function (request, metadata) {
        return this.client_.unaryCall(this.hostname_ +
            '/user.UserService/ReadUser', request, metadata || {}, methodDescriptor_UserService_ReadUser);
    };
/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.UpdateUserRequest,
 *   !proto.user.UpdateUserResponse>}
 */
const methodDescriptor_UserService_UpdateUser = new grpc.web.MethodDescriptor('/user.UserService/UpdateUser', grpc.web.MethodType.UNARY, proto.user.UpdateUserRequest, proto.user.UpdateUserResponse, 
/**
 * @param {!proto.user.UpdateUserRequest} request
 * @return {!Uint8Array}
 */
function (request) {
    return request.serializeBinary();
}, proto.user.UpdateUserResponse.deserializeBinary);
/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.UpdateUserRequest,
 *   !proto.user.UpdateUserResponse>}
 */
const methodInfo_UserService_UpdateUser = new grpc.web.AbstractClientBase.MethodInfo(proto.user.UpdateUserResponse, 
/**
 * @param {!proto.user.UpdateUserRequest} request
 * @return {!Uint8Array}
 */
function (request) {
    return request.serializeBinary();
}, proto.user.UpdateUserResponse.deserializeBinary);
/**
 * @param {!proto.user.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.UpdateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.UpdateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.UserServiceClient.prototype.updateUser =
    function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/user.UserService/UpdateUser', request, metadata || {}, methodDescriptor_UserService_UpdateUser, callback);
    };
/**
 * @param {!proto.user.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.UpdateUserResponse>}
 *     Promise that resolves to the response
 */
proto.user.UserServicePromiseClient.prototype.updateUser =
    function (request, metadata) {
        return this.client_.unaryCall(this.hostname_ +
            '/user.UserService/UpdateUser', request, metadata || {}, methodDescriptor_UserService_UpdateUser);
    };
/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.DeleteUserRequest,
 *   !proto.user.DeleteUserResponse>}
 */
const methodDescriptor_UserService_DeleteUser = new grpc.web.MethodDescriptor('/user.UserService/DeleteUser', grpc.web.MethodType.UNARY, proto.user.DeleteUserRequest, proto.user.DeleteUserResponse, 
/**
 * @param {!proto.user.DeleteUserRequest} request
 * @return {!Uint8Array}
 */
function (request) {
    return request.serializeBinary();
}, proto.user.DeleteUserResponse.deserializeBinary);
/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.DeleteUserRequest,
 *   !proto.user.DeleteUserResponse>}
 */
const methodInfo_UserService_DeleteUser = new grpc.web.AbstractClientBase.MethodInfo(proto.user.DeleteUserResponse, 
/**
 * @param {!proto.user.DeleteUserRequest} request
 * @return {!Uint8Array}
 */
function (request) {
    return request.serializeBinary();
}, proto.user.DeleteUserResponse.deserializeBinary);
/**
 * @param {!proto.user.DeleteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.DeleteUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.DeleteUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.UserServiceClient.prototype.deleteUser =
    function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/user.UserService/DeleteUser', request, metadata || {}, methodDescriptor_UserService_DeleteUser, callback);
    };
/**
 * @param {!proto.user.DeleteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.DeleteUserResponse>}
 *     Promise that resolves to the response
 */
proto.user.UserServicePromiseClient.prototype.deleteUser =
    function (request, metadata) {
        return this.client_.unaryCall(this.hostname_ +
            '/user.UserService/DeleteUser', request, metadata || {}, methodDescriptor_UserService_DeleteUser);
    };
export default proto.user;
