import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "../backend/routes/web/auth.routes.js";
import listRouts from "../backend/routes/web/list.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.URI;

//  mongodb connection

try {
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log(" Database connected");
    })
    .catch((err) => {
      console.error(" MongoDB connection error:", err);
    });
} catch (error) {
  console.log(error);
}

app.get("/", (req, res) => {
  res.send({ activeStatus: true, error: false });
});

app.use("/user", authRoute);
app.use("/list", listRouts);

app.listen(3000, () => {
  console.log("server connected 3000");
});
