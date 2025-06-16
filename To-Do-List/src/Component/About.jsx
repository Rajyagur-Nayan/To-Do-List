import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import DemoTask from "./DemoTask";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-white">
      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <main className="flex-grow px-4 sm:px-8 py-10">
        <section className="max-w-3xl mx-auto bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-700">
          <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
            About This App
          </h1>
          <p className="text-gray-300 text-lg mb-4">
            <span className="font-semibold text-blue-500 text-2xl">
              To-Do List App
            </span>{" "}
            helps you manage your daily tasks in a simple and efficient way.
          </p>
          <p className="text-gray-400 mb-4">
            Whether you're planning your day, organizing important tasks, or
            keeping track of your goals — this app is designed to keep your life
            on track.
          </p>
          <ul className="list-disc list-inside text-green-400 space-y-2 mb-4">
            <li>✅ Add tasks</li>
            <li>✅ Mark them as complete</li>
            <li>✅ Organize by lists or categories</li>
            <li>✅ Plan your day with ease</li>
          </ul>
          <p className="text-gray-300">
            Built with <span className="font-semibold">React</span> and{" "}
            <span className="font-semibold">Tailwind CSS</span>.
          </p>
        </section>

        {/* Demo Task Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-blue-300 mb-6">
            Demo List
          </h2>
          <div className="max-w-5xl mx-auto">
            <DemoTask />
          </div>
        </section>

        {/* Task List Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-blue-300 mb-6">
            Task List
          </h2>
          <div className="max-w-5xl mx-auto">
            <Card />
          </div>
        </section>
      </main>

      {/* Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
