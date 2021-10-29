# Blog app

**Go** **Javascript** **reactjs** **mongodb** **envoy**

## required packages on local machine

- mongodb
- go
- nodejs
- protoc, protoc-gen-go, grpc-go, grpc
- envoy

##### Main directories

- **server** Go server and database config
- **protos** proto definitions
- **envoy** envoy config to for proxy requests
- **data** certificates for tls
- **client** Go client
- **app** Reactjs and javascript web client

## features

1. CRUD operations on blogs and users
2. authentication
3. multiplex (more than 1 grpc services)
4. use of metadata
5. interceptors

## how is go server , envoyProxy and client is working

- server listen on port :5000
- envoy takes port :5000 from server and listen on port :8080 from client
- client sends req on port :8080

## start redis server

- for local dev, it should be installed
- command - `redis-server`

## start mongodb server

- for local dev, it should be installed
- command - `mongod`
