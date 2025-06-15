import React from "react";
import { AuthUser } from "./AuthContext";
import toast from "react-hot-toast";

export default function Logout() {
  const [authUser, setAuthUser] = AuthUser();

  const logoutUser = () => {
    try {
      setAuthUser({ ...authUser, user: null });
      localStorage.removeItem("userData", "id");
      window.location.reload();
      toast.success("Logout SuccessFully");
    } catch (error) {
      console.log(error);
      toast.error("Something Wrong " + error.massage);
    }
  };

  return (
    <div>
      <button className="btn btn-soft btn-secondary" onClick={logoutUser}>
        Logout
      </button>
    </div>
  );
}
