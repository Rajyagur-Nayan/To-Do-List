import express from "express";
import {
  createListController,
  deleteListController,
  readListController,
  updateListController,
} from "../../controller/web/list.controller.js";

const listRouts = express.Router();

listRouts.post("/createList", createListController);
listRouts.get("/readList/:id", readListController);
listRouts.patch("/updateList/:id", updateListController);
listRouts.delete("/deleteList/:id", deleteListController);
export default listRouts;
