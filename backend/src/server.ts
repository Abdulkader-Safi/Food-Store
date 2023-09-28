import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import { dbConnect } from "./configs/database.config";
import foodRouter from "./routers/food.router";
import orderRouter from "./routers/order.router";
import userRouter from "./routers/user.router";

const app = express();
dotenv.config();
dbConnect();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.use("/api/foods", foodRouter);
app.use("/api/orders", orderRouter);
app.use("/api/users", userRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Website served on http://localhost:" + PORT);
});
