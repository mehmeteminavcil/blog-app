import express from "express";
import postRoutes from "./routes/posts.js";
import usersRoutes from "./routes/posts.js";
import authRoutes from "./routes/posts.js";

const app = express();

app.use(express.json());
app.use("/api/posts", postRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("server listening...");
});
