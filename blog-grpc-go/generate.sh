# go server generate proto
protoc protos/test.proto --go-grpc_out=./protos
	protoc protos/auth.proto --go-grpc_out=./protos
	protoc protos/user.proto --go-grpc_out=./protos
	protoc protos/blog.proto --go-grpc_out=./protos


	protoc protos/test.proto --go_out=./protos
	protoc protos/auth.proto --go_out=./protos
	protoc protos/user.proto --go_out=./protos
	protoc protos/blog.proto --go_out=./protos
    
    
    
# js client generate proto 
# protoc protos/blog.proto --js_out=import_style=commonjs,binary:client/ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:client

# react client generate proto 
protoc protos/blog.proto --js_out=import_style=commonjs,binary:protos --grpc-web_out=import_style=commonjs,mode=grpcwebtext:protos 
protoc protos/auth.proto --js_out=import_style=commonjs,binary:protos --grpc-web_out=import_style=commonjs,mode=grpcwebtext:protos 
protoc protos/profile.proto --js_out=import_style=commonjs,binary:protos --grpc-web_out=import_style=commonjs,mode=grpcwebtext:protos 
protoc protos/test.proto --js_out=import_style=commonjs,binary:protos --grpc-web_out=import_style=commonjs,mode=grpcwebtext:protos 
protoc protos/user.proto --js_out=import_style=commonjs,binary:protos --grpc-web_out=import_style=commonjs,mode=grpcwebtext:protos 