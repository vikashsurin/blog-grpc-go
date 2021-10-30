import { keys } from "../keys/keys.js";
import { LoginRequest, LogoutRequest, isLoggedInRequest } from "protos/auth_pb";
import { authInterceptor } from "./interceptor.js";
import { AuthServicePromiseClient } from "protos/auth_grpc_web_pb";

const host = keys.host;

// * Interceptor 
const opts = { 'unaryInterceptors': [new authInterceptor()] }

export const IsLoggedIn = async () => {
    var client = new AuthServicePromiseClient(host, null, opts);
    var request = new isLoggedInRequest()
    const res = await client.isLoggedIn(request, {})
    return res
}
export const Login = async (email, password) => {
    var client = new AuthServicePromiseClient(host);

    var request = new LoginRequest();
    request.setUserEmail(email);
    request.setPassword(password);

    const res = await client.login(request, {}, (err, response) => {
        console.log("login res", response);
    });

    // set cookie
    const token = res.getToken()
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000 * 60 * 60;
    now.setTime(expireTime);
    document.cookie = `token=${token}; expires=${now.toUTCString()}`

    return res
};

export function logout() {
    var client = new AuthServicePromiseClient(host);

    var request = new LogoutRequest();

    client.logout(request, {}, (err, response) => {
        console.log("login res", response);
    });
}
