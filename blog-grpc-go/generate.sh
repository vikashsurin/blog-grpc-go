# go server generate proto
protoc protos/blog.proto --go_out=plugins=grpc:protos/
protoc protos/user.proto --go_out=plugins=grpc:protos/
protoc protos/test.proto --go_out=plugins=grpc:protos/

# go client generate proto
# protoc protos/blog.proto --go_out=plugins=grpc:client/blogpb

# js client generate proto 
# protoc protos/blog.proto --js_out=import_style=commonjs,binary:client/ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:client

# react client generate proto 
protoc protos/blog.proto --js_out=import_style=commonjs,binary:app/src --grpc-web_out=import_style=commonjs,mode=grpcwebtext:app/src 
protoc protos/auth.proto --js_out=import_style=commonjs,binary:app/src --grpc-web_out=import_style=commonjs,mode=grpcwebtext:app/src 
protoc protos/profile.proto --js_out=import_style=commonjs,binary:app/src --grpc-web_out=import_style=commonjs,mode=grpcwebtext:app/src 
protoc protos/test.proto --js_out=import_style=commonjs,binary:app/src --grpc-web_out=import_style=commonjs,mode=grpcwebtext:app/src 
protoc protos/user.proto --js_out=import_style=commonjs,binary:app/src --grpc-web_out=import_style=commonjs,mode=grpcwebtext:app/src 