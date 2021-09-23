gen:
	protoc protos/test.proto --go-grpc_out=./protos
	protoc protos/auth.proto --go-grpc_out=./protos
	protoc protos/user.proto --go-grpc_out=./protos
	protoc protos/blog.proto --go-grpc_out=./protos


	protoc protos/test.proto --go_out=./protos
	protoc protos/auth.proto --go_out=./protos
	protoc protos/user.proto --go_out=./protos
	protoc protos/blog.proto --go_out=./protos
ser:
	   go run server/*.go
cl:
	 go run client/*.go

sv:
	cd svelte; yarn dev

certgen:
	cd cert; ./gen.sh; cd ..


grpcproxy:
	grpcwebproxy \
		--server_tls_cert_file=data/x509/server_cert.pem \
		--server_tls_key_file=data/x509/server_key.pem \
		--server_tls_client_ca_files=data/x509/ca_cert.pem \
		--backend_client_tls_cert_file=data/x509/server_cert.pem \
		--backend_client_tls_key_file=data/x509/server_key.pem \
		--backend_tls=true \
		--backend_max_call_recv_msg_size=5242880 \
		--backend_addr=localhost:5000 \
		--backend_tls_noverify \
	    # --allow_all_origins=true \
        --allowed_origins=http://localhost.com:3000,x.test.example.com

envoyProxy:
	cd envoy; envoy -c envoy.yaml
