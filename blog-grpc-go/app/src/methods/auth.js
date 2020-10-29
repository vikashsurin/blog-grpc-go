const { LoginRequest, LogoutRequest } = require("../protos/auth_pb");
const { AuthServiceClient } = require("../protos/auth_grpc_web_pb");

const host = "http://localhost:8000";

export function login() {
  var client = new AuthServiceClient(host);

  var request = new LoginRequest();
  request.setUserEmail("vikashsurin10@gmail.com");
  request.setPassword("password");

  client.login(request, {}, (err, response) => {
    console.log("login res", response);
  });
}

export function logout() {
  var client = new AuthServiceClient(host);

  var request = new LogoutRequest();

  client.logout(request, {}, (err, response) => {
    console.log("login res", response);
  });
}
