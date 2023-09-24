import cors from "cors";
import express from "express";

import foodRouter from "./router/food.router";
import userRouter from "./router/user.router";

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.use("/api/foods", foodRouter);
app.use("/api/user", userRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Website served on http://localhost:" + PORT);
});
