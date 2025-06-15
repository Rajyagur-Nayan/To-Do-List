import { authModel } from "../../model/web/auth.model.js";
import { createList } from "../../model/web/list.model.js";

export const createListController = async (req, res) => {
  try {
    const { title, description, id } = req.body;

    const existingUser = await authModel.findById(id);

    if (existingUser) {
      const item = new createList({
        title,
        description,
        user: existingUser._id, // Store reference to user ID
      });

      await item.save();

      // Push item's ID to user's List array
      existingUser.List.push(item._id);
      await existingUser.save();

      return res.status(200).json({ message: "Item added successfully", item });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const readListController = async (req, res) => {
  try {
    const result = await createList.find({ user: req.params.id });
    if (!result) {
      return res.status(404).json({ message: "No data found" });
    }

    res.status(200).json({
      message: "Data read successfully",
      List: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
export const updateListController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await createList.findByIdAndUpdate(
      id,
      { $set: data },
      { returnOriginal: false }
    );

    res.status(200).json({ massage: "data update successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
export const deleteListController = async (req, res) => {
  try {
    const { id } = req.params;
    const existingUser = await createList.findByIdAndUpdate(id);

    if (existingUser) {
      await createList.findByIdAndDelete(id);
      res.status(200).json({ massage: "deleted successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
