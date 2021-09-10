/**
 * @fileoverview gRPC-Web generated client stub for test
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
const grpc = {};
grpc.web = require('grpc-web');
const proto = {};
proto.test = require('./test_pb.js');
/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.test.TestServiceClient =
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
proto.test.TestServicePromiseClient =
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
 *   !proto.test.TestRequest,
 *   !proto.test.TestResponse>}
 */
const methodDescriptor_TestService_Test = new grpc.web.MethodDescriptor('/test.TestService/Test', grpc.web.MethodType.UNARY, proto.test.TestRequest, proto.test.TestResponse, 
/**
 * @param {!proto.test.TestRequest} request
 * @return {!Uint8Array}
 */
function (request) {
    return request.serializeBinary();
}, proto.test.TestResponse.deserializeBinary);
/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.test.TestRequest,
 *   !proto.test.TestResponse>}
 */
const methodInfo_TestService_Test = new grpc.web.AbstractClientBase.MethodInfo(proto.test.TestResponse, 
/**
 * @param {!proto.test.TestRequest} request
 * @return {!Uint8Array}
 */
function (request) {
    return request.serializeBinary();
}, proto.test.TestResponse.deserializeBinary);
/**
 * @param {!proto.test.TestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.test.TestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.test.TestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.test.TestServiceClient.prototype.test =
    function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/test.TestService/Test', request, metadata || {}, methodDescriptor_TestService_Test, callback);
    };
/**
 * @param {!proto.test.TestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.test.TestResponse>}
 *     Promise that resolves to the response
 */
proto.test.TestServicePromiseClient.prototype.test =
    function (request, metadata) {
        return this.client_.unaryCall(this.hostname_ +
            '/test.TestService/Test', request, metadata || {}, methodDescriptor_TestService_Test);
    };
export default proto.test;
