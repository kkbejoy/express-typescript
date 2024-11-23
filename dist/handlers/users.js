"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
exports.createUser = createUser;
exports.createUser1 = createUser1;
function getUsers(req, res) {
    try {
        res.send([]);
    }
    catch (error) {
        console.log(error);
    }
}
function createUser(req, res) {
    // try {
    return res
        .status(201)
        .send({ id: "dfghjk", email: "kk@gmail.com", userName: "bejoy" });
    // } catch (error) {
    //   console.log(error);
    // }
}
function createUser1(req, res) {
    try {
        return res
            .status(201)
            .send({ id: "dfghjk", email: "kk@gmail.com", userName: "bejoy" });
    }
    catch (error) {
        console.log(error);
    }
}
