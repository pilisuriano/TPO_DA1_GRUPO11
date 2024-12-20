import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth.slice"
import signupReducer from "../features/signup/signup.slice"
import verifyEmailReducer from "../features/verifyEmail/verifyEmail.slice";
import verifyOtpReducer from "../features/verifyOtp/verifyOtp.slice";
import resetPasswordReducer from "../features/resetPassword/resetPassword.slice"
import postReducer from "../features/posts/postSlice";
import timelineReducer from "../features/timeline/timeline.slice";
import userReducer from "../features/users/userSlice";
import searchReducer from "../features/search/searchSlice";
import followersReducer from '../features/folllowers/followers.slice';
import favoritesReducer from '../features/favorites/favorites.slice';
import likesReducer from '../features/likes/likes.slice';
import errorMiddleware from "../utils/errorMiddleware";

const store = configureStore({
  reducer: {
    auth: authReducer,
    signup: signupReducer,
    verifyEmail: verifyEmailReducer,
    verifyOtp: verifyOtpReducer,
    resetPassword: resetPasswordReducer,
    post: postReducer,
    timeline: timelineReducer,
    user: userReducer,
    search: searchReducer,
    followers: followersReducer,
    favorites: favoritesReducer,
    likes: likesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(errorMiddleware),
});

export default store;