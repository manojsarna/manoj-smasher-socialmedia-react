import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  users: [],
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await axios.get("/api/users");
    return response.data;
  } catch (error) {
    toast.error(`${error.response.data.errors}`);
  }
});

export const followUser = createAsyncThunk("users/follow", async (id) => {
  try {
    const encodedToken = localStorage.getItem("smasherToken");
    const response = await axios.post(
      `/api/users/follow/${id}`,
      {},
      {
        headers: { authorization: encodedToken },
      }
    );
    toast.success("Following Now!");
    return response.data;
  } catch (error) {
    toast.error(`${error.response.data.errors}`);
  }
});

export const unfollowUser = createAsyncThunk("users/unfollow", async (id) => {
  try {
    const encodedToken = localStorage.getItem("smasherToken");
    const response = await axios.post(
      `/api/users/unfollow/${id}`,
      {},
      {
        headers: { authorization: encodedToken },
      }
    );
    toast.success("Unfollowed");
    return response.data;
  } catch (error) {
    toast.error(`${error.response.data.errors}`);
  }
});

const followUnfollowUser = (state, action) => {
  if (action.payload !== undefined) {
    state.users = state.users.map((user) => {
      if (user._id === action.payload.followUser._id) {
        return action.payload.followUser;
      } else if (user._id === action.payload.user._id) {
        return action.payload.user;
      } else return user;
    });
  }
};

export const editUser = createAsyncThunk("users/edit", async (userData) => {
  try {
    const encodedToken = localStorage.getItem("smasherToken");
    const response = await axios.post(
      "/api/users/edit",
      { userData },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    return response.data;
  } catch (error) {
    toast.error(`${error.response.data.errors}`);
  }
});

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload.users;
      })

      .addCase(followUser.fulfilled, followUnfollowUser)
      .addCase(unfollowUser.fulfilled, followUnfollowUser)
      .addCase(editUser.fulfilled, (state, action) => {
        state.users = state.users.map((user) => {
          if (user._id === action.payload.user._id) {
            return action.payload.user;
          } else {
            return user;
          }
        });
      });
  },
});

export default userSlice.reducer;
