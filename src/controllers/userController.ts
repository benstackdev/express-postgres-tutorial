import type { Request, Response } from "express";
import { deleteAllUsernames, getAllUsernames, insertUsername, searchUsername } from "../db/queries.js";

const usernamesGet = async (req: Request, res: Response) => {
  const usernameList = await getAllUsernames();
  console.log("Usernames: ", usernameList);
  res.send("Usernames: " + usernameList.map(user => user.username).join(", "));
};

const createUsernamePost = async (req: Request, res: Response) => {
  await insertUsername(req.body.username);
  res.redirect("/");
};

const searchUsernamesGet = async (req: Request, res: Response) => {
  try {
    if (typeof req.query.term === "string") {
      const results = await searchUsername(req.query.term);
      console.log("Search results: ", results);
    } else console.log(`${req.query.term} not a string`);

    res.redirect("/");
  } catch (error) {
    throw error;
  }
};

const usernamesDelete = async (req: Request, res: Response) => {
  await deleteAllUsernames();
  res.redirect("/");
};

export {
  usernamesGet,
  createUsernamePost,
  searchUsernamesGet,
  usernamesDelete
};