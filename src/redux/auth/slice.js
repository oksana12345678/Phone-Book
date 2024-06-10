import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: "",
      email: "",
    },
    token: "",
    isLoggedIn: false,
    isRefreshing: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = false;
      })
      .addCase(register.rejected, (state) => {
        state.error = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = false;
      })
      .addCase(logIn.rejected, (state) => {
        state.error = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: "", email: "" };
        state.token = null;
        state.isLoggedIn = false;
        state.error = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.error = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.error = true;
        state.isRefreshing = false;
      });
  },
});
export const authReducer = authSlice.reducer;
