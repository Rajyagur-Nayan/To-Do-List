import express from "express";
import { registerController } from "../../controller/web/register.controller.js";
import { loginController } from "../../controller/web/login.controller.js";

const authRoute = express.Router();

authRoute.post("/register", registerController);
authRoute.post("/login", loginController);

export default authRoute;
