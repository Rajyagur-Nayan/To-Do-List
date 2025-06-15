import React from "react";

const demoTasks = [
  { id: 1, title: "Demo Task", description: "I am going to the gym" },
  { id: 2, title: "Demo Task", description: "I am going to the gym" },
  { id: 3, title: "Demo Task", description: "I am going to the gym" },
  { id: 4, title: "Demo Task", description: "I am going to the gym" },
];

export default function DemoTask() {
  return (
    <section className="px-4 sm:px-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {demoTasks.map((task) => (
          <div
            key={task.id}
            className="bg-gradient-to-br from-purple-500 to-violet-600 text-white w-full max-w-sm p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
            <p className="text-sm">{task.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
