import React, { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { User } from "../types/auth";

// Define Types
interface AuthContextType {
  userData: User | null;
  login: (data: User) => void;
  logout: () => void;
}
interface AuthProviderProps {
  children: ReactNode;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  let localUserData: User | null;
  try {
    localUserData = JSON.parse(localStorage.getItem("user") || "") as User;
  } catch (e) {
    localUserData = null;
  }

  const [userData, setUserData] = useState<User | null>(localUserData);
  const navigate = useNavigate();

  const login = (data: User) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUserData(data);
    toast.success("Welcome to Plunes.", {
      icon: () => <span>🚀</span>,
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUserData(null);
    navigate("/login");
    toast.success("You are successfully logged out.", {
      icon: () => <span>✅</span>,
    });
  };

  return (
    <AuthContext.Provider value={{ userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
