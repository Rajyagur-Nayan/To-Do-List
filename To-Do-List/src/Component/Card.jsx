import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Card() {
  const [task, setTask] = useState([]);
  const id = localStorage.getItem("id")?.replace(/"/g, "");

  const showData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/list/readList/${id}`);
      setTask(res.data.List);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="px-4 sm:px-8 py-8">
      {task.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">
          No tasks found. Start by adding a new task!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {task.map((taskItem) => (
            <div
              key={taskItem._id}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-full max-w-sm p-6 rounded-xl shadow-lg transition-transform hover:scale-105 duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2">{taskItem.title}</h2>
              <p className="text-sm text-white/90">{taskItem.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
