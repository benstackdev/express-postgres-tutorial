import db from "./pool.js";

const getAllUsernames = async () => {
  const { rows } = await db.query("SELECT * FROM usernames");
  return rows;
};

const insertUsername = async (username: string) => {
  await db.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
};

const searchUsername = async (searchTerm: string) => {
  const { rows } = await db.query("SELECT * FROM usernames WHERE username LIKE $1", [`%${searchTerm}%`]);
  return rows;
};

const deleteAllUsernames = async () => {
  await db.query("DELETE FROM usernames");
};

export {
  getAllUsernames,
  insertUsername,
  searchUsername,
  deleteAllUsernames
};