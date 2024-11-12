import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth.slice"
import signupReducer from "../features/signup/signup.slice"
import verifyEmailReducer from "../features/verifyEmail/verifyEmail.slice";
import verifyOtpReducer from "../features/verifyOtp/verifyOtp.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    signup: signupReducer,
    verifyEmail: verifyEmailReducer,
    verifyOtp: verifyOtpReducer,
  },
});

export default store;