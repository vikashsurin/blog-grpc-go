import * as jspb from 'google-protobuf'



export class Blog extends jspb.Message {
  getId(): string;
  setId(value: string): Blog;

  getAuthorId(): string;
  setAuthorId(value: string): Blog;

  getTitle(): string;
  setTitle(value: string): Blog;

  getContent(): string;
  setContent(value: string): Blog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blog.AsObject;
  static toObject(includeInstance: boolean, msg: Blog): Blog.AsObject;
  static serializeBinaryToWriter(message: Blog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Blog;
  static deserializeBinaryFromReader(message: Blog, reader: jspb.BinaryReader): Blog;
}

export namespace Blog {
  export type AsObject = {
    id: string,
    authorId: string,
    title: string,
    content: string,
  }
}

export class CreateBlogRequest extends jspb.Message {
  getBlog(): Blog | undefined;
  setBlog(value?: Blog): CreateBlogRequest;
  hasBlog(): boolean;
  clearBlog(): CreateBlogRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBlogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBlogRequest): CreateBlogRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBlogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBlogRequest;
  static deserializeBinaryFromReader(message: CreateBlogRequest, reader: jspb.BinaryReader): CreateBlogRequest;
}

export namespace CreateBlogRequest {
  export type AsObject = {
    blog?: Blog.AsObject,
  }
}

export class CreateBlogResponse extends jspb.Message {
  getBlog(): Blog | undefined;
  setBlog(value?: Blog): CreateBlogResponse;
  hasBlog(): boolean;
  clearBlog(): CreateBlogResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBlogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBlogResponse): CreateBlogResponse.AsObject;
  static serializeBinaryToWriter(message: CreateBlogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBlogResponse;
  static deserializeBinaryFromReader(message: CreateBlogResponse, reader: jspb.BinaryReader): CreateBlogResponse;
}

export namespace CreateBlogResponse {
  export type AsObject = {
    blog?: Blog.AsObject,
  }
}

export class ReadBlogRequest extends jspb.Message {
  getBlogId(): string;
  setBlogId(value: string): ReadBlogRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadBlogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadBlogRequest): ReadBlogRequest.AsObject;
  static serializeBinaryToWriter(message: ReadBlogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadBlogRequest;
  static deserializeBinaryFromReader(message: ReadBlogRequest, reader: jspb.BinaryReader): ReadBlogRequest;
}

export namespace ReadBlogRequest {
  export type AsObject = {
    blogId: string,
  }
}

export class ReadBlogResponse extends jspb.Message {
  getBlog(): Blog | undefined;
  setBlog(value?: Blog): ReadBlogResponse;
  hasBlog(): boolean;
  clearBlog(): ReadBlogResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadBlogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadBlogResponse): ReadBlogResponse.AsObject;
  static serializeBinaryToWriter(message: ReadBlogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadBlogResponse;
  static deserializeBinaryFromReader(message: ReadBlogResponse, reader: jspb.BinaryReader): ReadBlogResponse;
}

export namespace ReadBlogResponse {
  export type AsObject = {
    blog?: Blog.AsObject,
  }
}

export class UpdateBlogRequest extends jspb.Message {
  getBlog(): Blog | undefined;
  setBlog(value?: Blog): UpdateBlogRequest;
  hasBlog(): boolean;
  clearBlog(): UpdateBlogRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBlogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBlogRequest): UpdateBlogRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBlogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBlogRequest;
  static deserializeBinaryFromReader(message: UpdateBlogRequest, reader: jspb.BinaryReader): UpdateBlogRequest;
}

export namespace UpdateBlogRequest {
  export type AsObject = {
    blog?: Blog.AsObject,
  }
}

export class UpdateBlogResponse extends jspb.Message {
  getBlog(): Blog | undefined;
  setBlog(value?: Blog): UpdateBlogResponse;
  hasBlog(): boolean;
  clearBlog(): UpdateBlogResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBlogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBlogResponse): UpdateBlogResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateBlogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBlogResponse;
  static deserializeBinaryFromReader(message: UpdateBlogResponse, reader: jspb.BinaryReader): UpdateBlogResponse;
}

export namespace UpdateBlogResponse {
  export type AsObject = {
    blog?: Blog.AsObject,
  }
}

export class DeleteBlogRequest extends jspb.Message {
  getBlogId(): string;
  setBlogId(value: string): DeleteBlogRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBlogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBlogRequest): DeleteBlogRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBlogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBlogRequest;
  static deserializeBinaryFromReader(message: DeleteBlogRequest, reader: jspb.BinaryReader): DeleteBlogRequest;
}

export namespace DeleteBlogRequest {
  export type AsObject = {
    blogId: string,
  }
}

export class DeleteBlogResponse extends jspb.Message {
  getBlogId(): string;
  setBlogId(value: string): DeleteBlogResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBlogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBlogResponse): DeleteBlogResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteBlogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBlogResponse;
  static deserializeBinaryFromReader(message: DeleteBlogResponse, reader: jspb.BinaryReader): DeleteBlogResponse;
}

export namespace DeleteBlogResponse {
  export type AsObject = {
    blogId: string,
  }
}

export class ListBlogRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBlogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBlogRequest): ListBlogRequest.AsObject;
  static serializeBinaryToWriter(message: ListBlogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBlogRequest;
  static deserializeBinaryFromReader(message: ListBlogRequest, reader: jspb.BinaryReader): ListBlogRequest;
}

export namespace ListBlogRequest {
  export type AsObject = {
  }
}

export class ListBlogResponse extends jspb.Message {
  getBlog(): Blog | undefined;
  setBlog(value?: Blog): ListBlogResponse;
  hasBlog(): boolean;
  clearBlog(): ListBlogResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBlogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBlogResponse): ListBlogResponse.AsObject;
  static serializeBinaryToWriter(message: ListBlogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBlogResponse;
  static deserializeBinaryFromReader(message: ListBlogResponse, reader: jspb.BinaryReader): ListBlogResponse;
}

export namespace ListBlogResponse {
  export type AsObject = {
    blog?: Blog.AsObject,
  }
}

