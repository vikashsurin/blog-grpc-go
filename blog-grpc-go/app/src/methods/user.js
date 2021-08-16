const {
  User,
  CreateUserRequest,
  ReadUserRequest,
  UpdateUserRequest,
  DeleteUserRequest,
} = require("../protos/user_pb");
const { UserServiceClient } = require("../protos/user_grpc_web_pb");

const host = "http://localhost:8000";

export function createUser() {
  var client = new UserServiceClient(host);

  var user = new User();
  user.setName("vikash");
  user.setEmail("vikashsurin10@gmail.com");
  user.setPassword("password");

  var request = new CreateUserRequest();
  request.setUser(user);

  client.createUser(request, {}, (err, response) => {
    console.log("response ", response.getUser());
  });
}

export function readUser() {
  var client = new UserServiceClient(host);
  var id = "5f9a79183f01c9db889ce4e4";
  var request = new ReadUserRequest();
  request.setUserId(id);

  client.readUser(request, {}, (err, response) => {
    console.log("read user ", response.getUser());
  });
}
export function updateUser() {
  var client = new UserServiceClient(host);

  var user = new User();
  user.setId("5f9a79183f01c9db889ce4e4");
  user.setName("silky");
  user.setEmail("silkyVIK@gmail.com");

  var request = new UpdateUserRequest();
  request.setUser(user);

  client.updateUser(request, {}, (err, response) => [
    console.log("res ", response.getUser()),
  ]);
}
export function deleteUser() {
  var client = new UserServiceClient(host);

  var request = new DeleteUserRequest();
  request.setUserId("5f9a79183f01c9db889ce4e4");

  client.deleteUser(request, {}, (err, response) => {
    console.log("delete res ", response);
  });
}
