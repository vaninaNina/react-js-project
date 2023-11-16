import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const authenticateUser = (email, password) => {
    console.log(email, password);
    //add login functionality
    setCurrentUser(true);
  };
  const logoutUser = () => {
    //add logout functionality
    setCurrentUser(false);
  };
  return (
    <AuthContext.Provider value={{ currentUser, authenticateUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
