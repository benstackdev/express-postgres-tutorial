import db from "./pool.js";

const getAllUsernames = async () => {
  const { rows } = await db.query("SELECT * FROM usernames");
  return rows;
};

const insertUsername = async (username: string) => {
  await db.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
};

export {
  getAllUsernames,
  insertUsername
};