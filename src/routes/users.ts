import { NextFunction, Request, Response, Router } from "express";
import { getUsers } from "../handlers/users";

const router = Router();
router.get("/", getUsers);
// router.get("/:id", () => {

// });

export default router;
