// loginSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";
import { LOGIN_URL } from "./apiConfig";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import axiosHandler from "./axiosHandler"; // Import axiosHandler

interface UserData {
  username: string | null;
  email: string | null;
  token: string; // Assuming userData includes a token
  firstName: string | null;
  lastName: string | null;
  role?: string | null;
}

interface AuthState {
  isAuthenticated: boolean;
  user: UserData | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<UserData>) {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = null;
      localStorage.removeItem("token");
      Cookies.remove("token");
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  loginSlice.actions;

export const login =
  ({ email, password }: { email: string; password: string }) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(loginStart());

      // Make API request using axiosHandler instead of fetch
      const userData: UserData = await axiosHandler("post", "/api/auth/login", {
        email,
        password,
      });

      dispatch(loginSuccess(userData));

      Cookies.set("token", userData.token, {
        path: "/",
        sameSite: "Strict",
        secure: true,
      });

      toast.success("Login successful! Redirecting to your profile...");
      return userData;
    } catch (error: any) {
      dispatch(loginFailure(error.message));
      toast.error(error.message);
      throw error;
    }
  };

export default loginSlice.reducer;
