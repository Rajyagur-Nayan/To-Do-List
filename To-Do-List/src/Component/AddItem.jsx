import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import UpdateModel from "./UpdateModel";
import { MdClose } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function AddItem() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showExtraInput, setShowExtraInput] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const id = localStorage.getItem("id")?.replace(/"/g, "");

  const handleInputClick = () => {
    setShowExtraInput(true);
  };

  const handleAddTask = async (e) => {
    e.preventDefault();

    // Basic validation
    if (title.trim() === "" || description.trim() === "") {
      toast.error("Title and description is required");
      return;
    }

    try {
      if (id) {
        await axios.post(
          "https://to-do-list-2jvx.onrender.com/list/createList",
          {
            title: title.trim(),
            description: description.trim(),
            id: id,
          }
        );

        // Show success message
        toast.success("List added successfully");
        setRefresh((prev) => !prev);

        // Update the tasks list in UI
        const newTask = {
          title: title.trim(),
          description: description.trim(),
          id: id,
        };
        setTasks((prevTasks) => [newTask, ...prevTasks]);
      }
    } catch (error) {
      toast.error("Failed to add task" + error);
    }

    // Clear input fields and UI state
    setTitle("");
    setDescription("");
    setShowExtraInput(false);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        await axios
          .get(`https://to-do-list-2jvx.onrender.com/list/readList/${id}`)
          .then((res) => {
            setTasks(res.data.List);
          });
      } catch (error) {
        console.log(error);
      }
    };
    if (id) fetch();
  }, [id, refresh]);

  const handleDelete = async (taskId) => {
    try {
      await axios
        .delete(
          `https://to-do-list-2jvx.onrender.com/list/deleteList/${taskId}`
        )
        .then((res) => {
          if (res) {
            toast.success("task deleted Successfully");
            setRefresh((prev) => !prev);
          }
        });
    } catch (error) {
      console.log(error);
      toast.error("Invalid userId");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Add List Item */}
      <div className="mt-7 ml-[3%] md:ml-[10%]">
        <form
          onSubmit={handleAddTask}
          className="flex flex-col gap-4 mb-10 mx-auto w-[90%] md:w-[40%] bg-gray-800 p-6 rounded-xl shadow-md text-white"
        >
          <input
            type="text"
            placeholder="Title"
            className="input w-full bg-gray-900 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onClick={handleInputClick}
          />

          {showExtraInput && (
            <input
              type="text"
              placeholder="Description"
              className="input w-full bg-gray-900 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          )}

          <button
            type="submit"
            className="btn  w-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Add Task
          </button>
        </form>
      </div>

      {/* Task Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-full max-w-sm p-6 rounded-xl shadow-lg "
          >
            <h2 className="text-2xl font-semibold mb-2">{task.title}</h2>
            <p className="text-sm text-white/90">{task.description}</p>
            <div className="card-actions justify-end gap-2">
              <UpdateModel task={task} setRefresh={setRefresh} />
              <MdClose
                className="cursor-pointer text-red-200 text-2xl hover:text-red-700"
                onClick={() => handleDelete(task._id)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto bg-gray-900">
        <Footer />
      </div>
    </div>
  );
}
