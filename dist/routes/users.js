"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../handlers/users");
const router = (0, express_1.Router)();
router.get("/", users_1.getUsers);
router.post("/", users_1.createUser1);
exports.default = router;
