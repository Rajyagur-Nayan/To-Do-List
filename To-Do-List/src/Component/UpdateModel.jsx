import axios from "axios";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEdit } from "react-icons/ai";

export default function UpdateModel({ task, setRefresh }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const updateData = async () => {
    try {
      await axios

        .patch(
          `https://to-do-list-2jvx.onrender.com/list/updateList/${task._id}`,
          {
            title,
            description,
          }
        )
        .then((res) => {
          if (res) {
            toast.success("Update Successfully");
            setRefresh((prev) => !prev);
          }
        });
    } catch (error) {
      console.log(error);
      toast.error("Can't Update Data ");
    }
  };

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my_modal_6" className="text-2xl ">
        <AiOutlineEdit className="cursor-pointer text-red-200 hover:text-red-700" />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box ">
          <h3 className="font-bold text-2xl mb-[5%] ml-[40%]">Update List </h3>
          <div>
            <span>Title</span>
            <label className="input validator ml-3 md:ml-[13%] mb-3.5 mt-2 md:mt-0">
              <input
                type="text"
                required
                placeholder="Update Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <div>
              <span> Description</span>
              <label className="input validator ml-2.5 mb-5 mt-2 md:mt-0">
                <input
                  type="text"
                  required
                  placeholder="Update Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
            </div>
          </div>
          <label
            htmlFor="my_modal_6"
            className="btn ml-[80%]"
            onClick={updateData}
          >
            Edit
          </label>
        </div>
      </div>
    </div>
  );
}
