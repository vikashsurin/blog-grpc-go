import { keys } from "../keys/keys.js";
import { LoginRequest, LogoutRequest } from "protos/auth_pb";
import { AuthServicePromiseClient } from "protos/auth_grpc_web_pb";

const host = keys.host;

export const Login = async (email, password) => {
    var client = new AuthServicePromiseClient(host);

    var request = new LoginRequest();
    request.setUserEmail(email);
    request.setPassword(password);

    const res = await client.login(request, {}, (err, response) => {
        console.log("login res", response);
    });
    return res
};

export function logout() {
    var client = new AuthServicePromiseClient(host);

    var request = new LogoutRequest();

    client.logout(request, {}, (err, response) => {
        console.log("login res", response);
    });
}
