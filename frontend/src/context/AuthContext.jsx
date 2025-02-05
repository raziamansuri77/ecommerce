import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const register = async (userData) => {
    try {
      console.log("Registration attempt with:", userData);

      const response = await axios.post("/api/v1/register", userData);
      console.log("Registration response:", response.data);

      if (response.status === 201) {
        console.log("Registration successful, attempting auto-login");

        const loginResponse = await axios.post("/api/v1/login", {
          email: userData.email,
          password: userData.password,
        });
        console.log("Auto-login response:", loginResponse.data);

        if (loginResponse.status === 200) {
          const { token } = loginResponse.data;
          const newUser = { ...userData, token };
          setUser(newUser);
          sessionStorage.setItem("user", JSON.stringify(newUser));
          console.log(
            "User successfully logged in after registration:",
            newUser
          );
        }
      }
    } catch (error) {
      console.error("Registration error details:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
      throw error;
    }
  };
  const login = async (userData) => {
    try {
      const response = await axios.post("/api/v1/login", userData);
      if (response.status === 200) {
        const { token } = response.data;
        const newUser = { ...userData, token };
        setUser(newUser);
        sessionStorage.setItem("user", JSON.stringify(newUser));
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
