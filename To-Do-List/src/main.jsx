import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./Pages.jsx";
import AuthContextProvider from "./Component/AuthComponent/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <Pages />
    </AuthContextProvider>
  </BrowserRouter>
);
