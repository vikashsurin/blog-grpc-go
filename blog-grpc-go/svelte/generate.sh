
protoc protos/blog.proto --js_out=import_style=commonjs,binary:src/ts --grpc-web_out=import_style=typescript,mode=grpcwebtext:src/ts 

protoc protos/auth.proto --js_out=import_style=commonjs,binary:src/ts --grpc-web_out=import_style=typescript,mode=grpcwebtext:src/ts 

protoc protos/profile.proto --js_out=import_style=commonjs,binary:src/ts --grpc-web_out=import_style=typescript,mode=grpcwebtext:src/ts 

protoc protos/test.proto --js_out=import_style=commonjs,binary:src/ts --grpc-web_out=import_style=typescript,mode=grpcwebtext:src/ts 

protoc protos/user.proto --js_out=import_style=commonjs,binary:src/ts --grpc-web_out=import_style=typescript,mode=grpcwebtext:src/ts 

# protoc -I ./protos protos/*.proto --js_out=import_style=commonjs:./protos/ts --grpc-web_out=import_style=typescript,mode=grpcwebtext:./protos/ts


{
  "compilerOptions": {
    "target": "es2015", 
    "module": "es2015",
    "allowJs": true,
    "outDir": "../esm",
    "rootDir": "./",
    "strict": false,
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}
