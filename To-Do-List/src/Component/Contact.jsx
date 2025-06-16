import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import toast from "react-hot-toast";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [massage, setMassage] = useState("");

  const toastMassage = (e) => {
    e.preventDefault();

    const trimName = name.trim();
    const trimEmail = email.trim();
    const trimMassage = massage.trim();

    if (trimEmail && trimMassage && trimName) {
      setEmail("");
      setMassage("");
      setName("");
      toast.success("Contact successfully");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Contact Section */}
      <main className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-xl p-8 rounded-2xl shadow-lg border border-gray-700 bg-gray-900">
          <h2 className="text-3xl font-bold mb-4 text-blue-400 text-center">
            Contact Us
          </h2>
          <p className="text-gray-300 mb-6 text-center">
            Have questions, feedback, or feature suggestions? We’d love to hear
            from you!
          </p>

          <form className="space-y-5">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows="4"
              value={massage}
              onChange={(e) => setMassage(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              onClick={toastMassage}
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
