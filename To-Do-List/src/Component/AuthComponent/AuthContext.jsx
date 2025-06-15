import { useContext } from "react";
import { createContext, useState } from "react";
import React from "react";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(() => {
    const userData = localStorage.getItem("userData", "id");
    return userData ? JSON.stringify(userData) : null;
  });

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const AuthUser = () => useContext(AuthContext);
