import type { Request, Response } from "express";
import { getAllUsernames, insertUsername } from "../db/queries.js";

const usernamesGet = async (req: Request, res: Response) => {
  const usernameList = await getAllUsernames();
  console.log("Usernames: ", usernameList);
  res.send("Usernames: " + usernameList.map(user => user.username).join(", "));
};

const createUsernamePost = async (req: Request, res: Response) => {
  await insertUsername(req.body.username);
  res.redirect("/");
};

export {
  usernamesGet,
  createUsernamePost
};