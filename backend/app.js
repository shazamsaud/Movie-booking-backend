import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";

import adminRouter from "./routes/admin-routes.js";

import movieRouter from "./routes/movie-routes.js";

import bookingRouter from "./routes/booking-routes.js";

import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingRouter);

mongoose
  .connect(
    `mongodb+srv://admin:${process.env.M_PASS}@cluster1.fhsho4f.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => app.listen(5000, () => console.log("connected to port 5000 ")))
  .catch((e) => console.log(e));
