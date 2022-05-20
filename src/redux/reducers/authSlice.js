import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const initialState = {
  user: null,
  token: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (loginDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        username: loginDetails.username,
        password: loginDetails.password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const signUp = createAsyncThunk("auth/signup", async (signUpDetails) => {
  try {
    const response = await axios.post("/api/auth/signup", {
      firstName: signUpDetails.firstName,
      lastName: signUpDetails.lastName,
      username: signUpDetails.username,
      email: signUpDetails.email,
      password: signUpDetails.password,
    });
    return response.data;
  } catch (error) {
    toast.error(`${error.response.data.errors}`);
  }
});

export const testLogin = createAsyncThunk("auth/testLogin", async () => {
  try {
    const response = await axios.post("/api/auth/login", {
      username: "manojsarna",
      password: "Manoj@123",
    });
    return response.data;
  } catch (error) {
    toast.error(`${error.response.data.errors}`);
  }
});

export const verify = createAsyncThunk("auth/verify", async () => {
  const encodedToken = localStorage.getItem("smasherToken");
  if (encodedToken) {
    try {
      const response = await axios.post("/api/auth/verify", {
        encodedToken: encodedToken,
      });
      return response.data;
    } catch (error) {
      toast.error(`${error.response.data.errors}`);
    }
  }
});

const authSlice = createSlice({
  name: "auth",
  reducers: {
    logout(state) {
      localStorage.removeItem("smasherToken");
      state.user = null;
      state.token = null;
      toast.success("Logged Out");
    },
  },
  initialState,
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload) {
          localStorage.setItem("smasherToken", action.payload.encodedToken);
          state.user = action.payload.foundUser;
          state.token = action.payload.encodedToken;
          toast.success("Login Successful");
        }
      })
      .addCase(login.rejected, (state, action) => {
        if (action.payload) {
          toast.error(action.payload);
        }
      })
      .addCase(signUp.fulfilled, (state, action) => {
        if (action.payload) {
          localStorage.setItem("smasherToken", action.payload.encodedToken);
          state.user = action.payload.createdUser;
          state.token = action.payload.encodedToken;
          toast.success("Signup Successful");
        }
      })
      .addCase(testLogin.fulfilled, (state, action) => {
        if (action.payload) {
          localStorage.setItem("smasherToken", action.payload.encodedToken);
          state.user = action.payload.foundUser;
          state.token = action.payload.encodedToken;
          toast.success("Login Successful");
        }
      })
      .addCase(verify.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload.user;
          state.token = action.payload.encodedToken;
        }
      });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
