import { Pool } from "pg";
import { loadEnvFile } from "node:process";

loadEnvFile(".env");

const db = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: Number(process.env.DB_PORT)
});

export default db;