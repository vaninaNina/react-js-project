import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const authenticateUser = (email, password) => {
    console.log(email, password);

    setCurrentUser(true);
  };

  const logoutUser = () => {
    setCurrentUser(false);
  };
  return (
    <AuthContext.Provider value={{ currentUser, authenticateUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
