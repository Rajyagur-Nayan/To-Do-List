import { authModel } from "../../model/web/auth.model.js";
import bcrypt from "bcrypt";

export const loginController = async (req, res) => {
  try {
    const user = await authModel.findOne({ email: req.body.email });
    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!user || !isMatch)
      return res.status(400).json({ massage: "invalid userName and Password" });
    const { password, ...others } = user._doc;
    res.status(200).json({
      others,
    });
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ massage: "invalid user" });
  }
};
