import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "M.eminavcl07",
  database: "blog",
});
