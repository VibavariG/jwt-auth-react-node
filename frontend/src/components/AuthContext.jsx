import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    setLoading(false); 
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

//Uncaught SyntaxError: The requested module '/node_modules/.vite/deps/jwt-decode.js?v=7eb77cd2' does not provide an export named 'default' (at AuthContext.jsx:2:8)
//children = Router, Route, Routes, Login, Dashboard, Registration