/**
 * @fileoverview gRPC-Web generated client stub for test
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as protos_test_pb from '../protos/test_pb';
export class TestServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoTest = new grpcWeb.AbstractClientBase.MethodInfo(protos_test_pb.TestResponse, (request) => {
            return request.serializeBinary();
        }, protos_test_pb.TestResponse.deserializeBinary);
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
    test(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/test.TestService/Test', request, metadata || {}, this.methodInfoTest, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/test.TestService/Test', request, metadata || {}, this.methodInfoTest);
    }
}
