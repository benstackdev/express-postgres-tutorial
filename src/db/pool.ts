import { Pool } from "pg";

const db = new Pool({
  host: "localhost",
  user: "ben",
  database: "top_users",
  password: "",
  port: 5432
});

export default db;