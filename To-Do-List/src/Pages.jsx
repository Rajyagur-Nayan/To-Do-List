import React from "react";
import AddItem from "./Component/AddItem";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import Register from "./Component/AuthComponent/Register";
import About from "./Component/About";
import Contact from "./Component/Contact";
import { Toaster } from "react-hot-toast";
import { AuthUser } from "./Component/AuthComponent/AuthContext";

export default function Pages() {
  const [authUser] = AuthUser();
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/addItem"
          element={authUser ? <AddItem /> : <Navigate to="/" />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster />
    </div>
  );
}
