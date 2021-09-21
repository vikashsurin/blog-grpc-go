import { keys } from "../keys/keys.js";

import {
    User,
    CreateUserRequest,
    ReadUserRequest,
    UpdateUserRequest,
    DeleteUserRequest,
} from "protos/user_pb";
import { UserServiceClient } from "protos/user_grpc_web_pb";

const host = keys.host;

export function createUser(userData) {
    try {
        var client = new UserServiceClient(host);
        var user = new User();
        user.setFirstName(userData.firstName);
        user.setLastName(userData.lastName);
        user.setEmail(userData.email);
        user.setPassword(userData.password);

        var request = new CreateUserRequest();
        request.setUser(user);

        client.createUser(request, {}, (err, response) => {
            console.log(err)
            return err
        });
    } catch (error) {
        console.log(error)
        return error
    }
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
    user.setFirstName("silky");
    user.setLastName("Roy");
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
