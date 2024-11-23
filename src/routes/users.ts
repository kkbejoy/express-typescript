import { Router } from "express";
import { createUser, getUsers } from "../handlers/users";

const router = Router();

router.get("/", getUsers);

router.post("/", createUser);
export default router;
