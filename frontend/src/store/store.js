import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auths/authSlice"

const store = configureStore({
  reducer: {
    auth: authReducer
  },
});

export default store;