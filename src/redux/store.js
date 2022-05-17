import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import postReducer from "./reducers/postsSlice";
import userReducer from "./reducers/usersSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    users: userReducer,
  },
});
