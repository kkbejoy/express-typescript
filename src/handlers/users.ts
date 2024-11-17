import { Request, Response } from "express";

export function getUsers(req: Request, res: Response) {
  try {
    res.send([]);
  } catch (error) {
    console.log(error);
  }
}
