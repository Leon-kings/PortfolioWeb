/* eslint-disable no-unused-vars */
import React from "react";
export const AuthProvider = ({ children }) => {
  const login = async (email, password) => {
    // login logic
    return { success: true };
  };

  return (
    <AuthContext.Provider value={{ login }}>
      {children}
    </AuthContext.Provider>
  );
};
