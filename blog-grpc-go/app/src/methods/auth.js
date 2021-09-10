import { keys } from "../keys/key.js";
const { LoginRequest, LogoutRequest } = require("../protos/auth_pb");
const { AuthServicePromiseClient } = require("../protos/auth_grpc_web_pb");

const host = keys.k8s;

export const Login = async (email, password) => {
  var client = new AuthServicePromiseClient(host);

  var request = new LoginRequest();
  request.setUserEmail(email);
  request.setPassword(password);

  client.login(request, {}, (err, response) => {
    console.log("login res", response);
  });
};

export function logout() {
  var client = new AuthServicePromiseClient(host);

  var request = new LogoutRequest();

  client.logout(request, {}, (err, response) => {
    console.log("login res", response);
  });
}
