gen:
	protoc protos/test.proto --go_out=plugins=grpc:protos/
	protoc protos/auth.proto --go_out=plugins=grpc:protos/
	protoc protos/user.proto --go_out=plugins=grpc:protos/
	protoc protos/blog.proto --go_out=plugins=grpc:protos/
ser:
	   go run server/*.go
cl:
	 go run client/*.go

certgen:
	cd cert; ./gen.sh; cd ..
