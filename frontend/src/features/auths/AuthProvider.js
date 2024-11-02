import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "./authSlice";
import { getAuthToken } from "../../services/secureStore";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { token, authenticated, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const storedToken = await getAuthToken();
        if (storedToken) {
          dispatch(loginUser({ token: storedToken }));
        }
      } catch (error) {
        console.log("Error verifyng auth status: ", error)
      }
    }
    checkAuthStatus();
  }, [dispatch]);

  const login = async (credentials) => {
    try {
      return dispatch(loginUser(credentials));
    } catch (error) {
      console.error("Login failed", err);
    }
    
  }

  const logout = async () => {
    try {
      return dispatch(logoutUser());
    } catch (error) {
      console.error("Logout failed", err);
    }
  }

  return (
    <AuthContext.Provider value={{ token, authenticated, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext);