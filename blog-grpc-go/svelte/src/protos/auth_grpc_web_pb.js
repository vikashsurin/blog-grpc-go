/**
 * @fileoverview gRPC-Web generated client stub for auth
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.auth = require('./auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.auth.AuthServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
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
proto.auth.AuthServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
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
 *   !proto.auth.LoginRequest,
 *   !proto.auth.LoginResponse>}
 */
const methodDescriptor_AuthService_Login = new grpc.web.MethodDescriptor(
  '/auth.AuthService/Login',
  grpc.web.MethodType.UNARY,
  proto.auth.LoginRequest,
  proto.auth.LoginResponse,
  /**
   * @param {!proto.auth.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.auth.LoginRequest,
 *   !proto.auth.LoginResponse>}
 */
const methodInfo_AuthService_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.auth.LoginResponse,
  /**
   * @param {!proto.auth.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.auth.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.auth.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthService_Login,
      callback);
};


/**
 * @param {!proto.auth.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.auth.AuthServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.LogoutRequest,
 *   !proto.auth.LogoutResponse>}
 */
const methodDescriptor_AuthService_Logout = new grpc.web.MethodDescriptor(
  '/auth.AuthService/Logout',
  grpc.web.MethodType.UNARY,
  proto.auth.LogoutRequest,
  proto.auth.LogoutResponse,
  /**
   * @param {!proto.auth.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.LogoutResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.auth.LogoutRequest,
 *   !proto.auth.LogoutResponse>}
 */
const methodInfo_AuthService_Logout = new grpc.web.AbstractClientBase.MethodInfo(
  proto.auth.LogoutResponse,
  /**
   * @param {!proto.auth.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.LogoutResponse.deserializeBinary
);


/**
 * @param {!proto.auth.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.auth.LogoutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.LogoutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthService/Logout',
      request,
      metadata || {},
      methodDescriptor_AuthService_Logout,
      callback);
};


/**
 * @param {!proto.auth.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.LogoutResponse>}
 *     Promise that resolves to the response
 */
proto.auth.AuthServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthService/Logout',
      request,
      metadata || {},
      methodDescriptor_AuthService_Logout);
};


module.exports = proto.auth;

