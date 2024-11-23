import { Request, Response } from "express-serve-static-core";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { UserRes } from "../types/responseUsers";

export function getUsers(req: Request, res: Response) {
  try {
    // req.user;
    res.send([]);
  } catch (error) {
    console.log(error);
  }
}

export function createUser(
  req: Request<{}, {}, CreateUserDto>,
  res: Response<UserRes>
) {
  try {
    res
      .status(201)
      .send({ id: "dfghjk", email: "kk@gmail.com", userName: "bejoy" });
  } catch (error) {
    console.log(error);
  }
}
