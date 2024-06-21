'use client';
import React, { createContext, useContext } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface UserData {
  username: string | null;
  email: string | null;
  token: string; // Assuming userData includes a token
  firstName: string | null;
  lastName: string | null;
  role?: string | null;
}

interface AuthContextType {
  user: UserData | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const user = useSelector((state: RootState) => state.login.user);
  const isAuthenticated = useSelector(
    (state: RootState) => state.login.isAuthenticated
  );
  const loading = useSelector((state: RootState) => state.login.loading);
  const error = useSelector((state: RootState) => state.login.error);

  const authContextValue: AuthContextType = {
    user,
    isAuthenticated,
    loading,
    error
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
