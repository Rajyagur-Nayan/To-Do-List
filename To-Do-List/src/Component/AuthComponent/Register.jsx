import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    try {
      if (!data.userName || !data.password || !data.email) {
        toast.error("places Enter All the Filed");
        return;
      }

      const userinfo = {
        userName: data.userName,
        password: data.password,
        email: data.email,
      };

      await axios

        .post("http://localhost:3000/user/register", userinfo)
        .then((res) => {
          if (res) {
            toast.success("User created SuccessFully");
          }
        });

      localStorage.setItem("UserData", JSON.stringify(userinfo));
    } catch (err) {
      console.log(err);
      toast.error("User is Already Exist");
    }
  };

  return (
    <div>
      {/* navbar */}
      <div>
        <Navbar />
      </div>
      <div className="flex items-center justify-center min-h-screen bg-gray-800 px-4">
        <form
          className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-sm"
          onSubmit={handleSubmit(onsubmit)}
        >
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">
            Register
          </h2>

          <label className="block text-sm font-medium text-gray-300 mb-1">
            User Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full mb-4 px-4 py-2 border border-gray-600 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("userName", { required: true })}
          />
          {errors.userName && (
            <p className="text-red-400 text-sm mb-2">User name is required.</p>
          )}

          <label className="block text-sm font-medium text-gray-300 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full mb-4 px-4 py-2 border border-gray-600 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-400 text-sm mb-2">Password is required.</p>
          )}

          <label className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="w-full mb-6 px-4 py-2 border border-gray-600 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mb-2">Email is required.</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 rounded-lg"
          >
            Register
          </button>
        </form>
      </div>

      {/* footer  */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Register;
