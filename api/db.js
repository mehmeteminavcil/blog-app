import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "blog",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }

  console.log("Connected to MySQL!");
  // You can execute queries here or call functions that use the connection
});

// Handle the error event to prevent your application from crashing
db.on("error", (err) => {
  console.error("MySQL error:", err);
});
