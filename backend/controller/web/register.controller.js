import bcrypt from "bcrypt";
import { authModel } from "../../model/web/auth.model.js";

export const registerController = async (req, res) => {
  try {
    const { userName, password, email } = req.body;
    if (!userName || !password || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await authModel.findOne({ email });
    if (user)
      return res.status(400).json({
        massage: "user Is already exist",
      });
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const createUser = new authModel({
      userName: userName,
      password: hashPassword,
      email: email,
    });

    await createUser
      .save()
      .then(() => res.status(200).json({ list: createUser }));
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ massage: "invalid user " }, error);
  }
};
