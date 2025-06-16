import React from "react";
import Login from "./AuthComponent/Login";
import { AuthUser } from "./AuthComponent/AuthContext";
import Logout from "./AuthComponent/Logout";

export default function Navbar() {
  const [authUser] = AuthUser();

  return (
    <div className="bg-gray-900 text-white">
      <div>
        <div className="navbar justify-items-center shadow-sm ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gray-800 text-white text-white-content rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a href="/">Home </a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/addItem">Add item</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-white text-2xl md:ml-[20%]">
              My List
            </a>
          </div>
          <div className="navbar-center text-white  hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="/">Home </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/addItem">Add item</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end mr-2 md:mr-[4%] gap-0.5 md:gap-1.5">
            {/*  login and Logout  */}
            {authUser ? (
              <Logout />
            ) : (
              <div>
                <a
                  className="btn btn-neutral"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </a>
                <Login />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
