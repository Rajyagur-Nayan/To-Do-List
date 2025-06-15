import React from "react";
import Navbar from "./Component/Navbar";
import DemoTask from "./Component/DemoTask";
import Card from "./Component/Card";
import Footer from "./Component/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Demo List Section */}
      <section className="px-4 sm:px-8 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl sm:text-3xl ml-0 md:ml-[5%] font-semibold text-amber-300">
            Demo List
          </h2>
        </div>
        <DemoTask />
      </section>

      {/* User Task List Section */}
      <section className="px-4 sm:px-8 mt-14">
        <div className="flex flex-col md:flex-row  gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl ml-0 md:ml-[5%]  font-semibold text-amber-300">
            Your List
          </h2>
          <a
            href="/addItem"
            className="btn btn-secondary text-white shadow-md hover:shadow-lg transition"
          >
            Add Task
          </a>
        </div>
        <Card />
      </section>

      {/* Footer */}
      <div className="mt-auto ">
        <Footer />
      </div>
    </div>
  );
}
