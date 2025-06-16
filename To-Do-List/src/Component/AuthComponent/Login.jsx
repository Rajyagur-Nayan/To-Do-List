import React from "react";
import Register from "./Register";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    if (!data.email || !data.password) {
      toast.error("Enter All the Filed!");
      return;
    }
    const userinfo = {
      email: data.email,
      password: data.password,
    };

    try {
      await axios
        .post("https://to-do-list-2jvx.onrender.com/user/login", userinfo)
        .then((res) => {
          if (res) {
            toast.success("Successfully Login!");
          }
          localStorage.setItem("id", JSON.stringify(res.data.others._id));
          localStorage.setItem("userData", JSON.stringify(userinfo));
          document.getElementById("my_modal_3").close();
          window.location.reload();
        });
    } catch (error) {
      console.log(error);
      toast.error("This is an error!");
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form action="">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form method="dialog" onSubmit={handleSubmit(onsubmit)}>
            {/* if there is a button in form, it will close the modal */}

            <h3 className="font-bold text-2xl mb-[5%] ml-[40%]">Login </h3>
            <div>
              <span> Email</span>
              <label className="input validator w-full mt-4 mb-3.5">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>

                <input
                  type="text"
                  required
                  placeholder="email"
                  {...register("email", { required: true })}
                />
                {errors.email && <p>user name is required.</p>}
              </label>
              <span>Password</span>
              <label className="input validator w-full mt-3">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                    <circle
                      cx="16.5"
                      cy="7.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                  </g>
                </svg>
                <input
                  type="password"
                  required
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && <p>Password is required.</p>}
              </label>
              <div className="flex mt-10">
                <div className="ml-10 mt-2 cursor-pointer flex">
                  <div>
                    <button className="btn btn-neutral">Login</button>
                  </div>
                  <div>
                    <Link to="/register" className="btn ml-[30%] ">
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
