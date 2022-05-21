import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  users: [],
  profileUserPosts: [],
  profileUser: null,
};

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/users");
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const getUser = createAsyncThunk(
  "users/getUser",
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/users/${username}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const getUserPost = createAsyncThunk(
  "users/getUserPost",
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/posts/user/${username}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (userData, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("smasherToken");
      const response = await axios.post(
        "/api/users/edit",
        { userData },
        { headers: { authorization: encodedToken } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const followUser = createAsyncThunk(
  "users/followUser",
  async (followUserId, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("smasherToken");
      const response = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "users/unfollowUser",
  async (followUserId, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("smasherToken");
      const response = await axios.post(
        `/api/users/unfollow/${followUserId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.profileUser = action.payload.user;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(getUserPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserPost.fulfilled, (state, action) => {
        state.loading = false;
        state.profileUserPosts = action.payload.posts;
      })
      .addCase(getUserPost.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((user) =>
          user.username === action.payload.user.username
            ? action.payload.user
            : user
        );
        state.profileUser = action.payload.user;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(followUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(followUser.fulfilled, (state, action) => {
        state.loading = false;
        const { user, followUser } = action.payload;
        state.users = state.users.map((item) =>
          item.username === user.username ? user : item
        );
        state.users = state.users.map((item) =>
          item.username === followUser.username ? followUser : item
        );
        state.profileUser = action.payload.followUser;
      })
      .addCase(followUser.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(unfollowUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(unfollowUser.fulfilled, (state, action) => {
        state.loading = false;
        const { user, followUser } = action.payload;
        state.users = state.users.map((item) =>
          item.username === user.username ? user : item
        );
        state.users = state.users.map((item) =>
          item.username === followUser.username ? followUser : item
        );
        state.profileUser = action.payload.followUser;
      })
      .addCase(unfollowUser.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      });
  },
});

export default userSlice.reducer;
