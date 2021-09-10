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

  methodInfoTest = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_test_pb.TestResponse,
    (request: protos_test_pb.TestRequest) => {
      return request.serializeBinary();
    },
    protos_test_pb.TestResponse.deserializeBinary
  );

  test(
    request: protos_test_pb.TestRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_test_pb.TestResponse>;

  test(
    request: protos_test_pb.TestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_test_pb.TestResponse) => void): grpcWeb.ClientReadableStream<protos_test_pb.TestResponse>;

  test(
    request: protos_test_pb.TestRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_test_pb.TestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/test.TestService/Test',
        request,
        metadata || {},
        this.methodInfoTest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/test.TestService/Test',
    request,
    metadata || {},
    this.methodInfoTest);
  }

}

