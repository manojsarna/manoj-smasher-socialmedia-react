import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  posts: [],
  bookmarks: [],
  loading: false,
  sortBy: "Latest",
  userPosts: [],
};

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/posts");
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (post, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("smasherToken");

    try {
      const response = await axios.post(
        "/api/posts/",
        { postData: post },
        { headers: { authorization: encodedToken } }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const likePost = createAsyncThunk(
  "posts/like",
  async (id, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("smasherToken");
      const response = await axios.post(
        `/api/posts/like/${id}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "posts/dislike",
  async (id, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("smasherToken");
      const response = await axios.post(
        `/api/posts/dislike/${id}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const getBookmarks = createAsyncThunk(
  "posts/getBookmarks",
  async (arg, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("smasherToken");
      const response = await axios.get("/api/users/bookmark", {
        headers: { authorization: encodedToken },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const addToBookmarks = createAsyncThunk(
  "posts/addToBookmarks",
  async (postId, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("smasherToken");
      const response = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const removeFromBookmarks = createAsyncThunk(
  "posts/removeFromBookmarks",
  async (postId, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("smasherToken");
      const response = await axios.post(
        `api/users/remove-bookmark/${postId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const editPost = createAsyncThunk(
  "post/edit",
  async ({ postId, postData }, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("smasherToken");
      const response = await axios.post(
        `/api/posts/edit/${postId}`,
        { postData },
        { headers: { authorization: encodedToken } }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/delete",
  async (postId, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("smasherToken");
      const response = await axios.delete(`/api/posts/${postId}`, {
        headers: { authorization: encodedToken },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const postComment = createAsyncThunk(
  "posts/postComment",
  async ({ postId, commentData }, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("smasherToken");
      const response = await axios.post(
        `/api/comments/add/${postId}`,
        { commentData },
        { headers: { authorization: encodedToken } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "posts/deleteComment",
  async ({ postId, commentId }, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("smasherToken");
      const response = await axios.post(
        `/api/comments/delete/${postId}/${commentId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    sortByValue: (state, action) => {
      state.sortBy = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.posts;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        toast.success("Post Created");
        state.posts = action.payload.posts;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(likePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.posts;
        toast.success("Post Liked");
      })
      .addCase(likePost.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(dislikePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(dislikePost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.posts;
        toast.success("Post Disliked");
      })
      .addCase(dislikePost.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(getBookmarks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBookmarks.fulfilled, (state, action) => {
        state.loading = false;
        state.bookmarks = action.payload.bookmarks;
      })
      .addCase(getBookmarks.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(addToBookmarks.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToBookmarks.fulfilled, (state, action) => {
        state.loading = false;
        toast.success("Added to Bookmarks");
        state.bookmarks = action.payload.bookmarks;
      })
      .addCase(addToBookmarks.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(removeFromBookmarks.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeFromBookmarks.fulfilled, (state, action) => {
        state.loading = false;
        toast.success("Removed From Bookmarks");
        state.bookmarks = action.payload.bookmarks;
      })
      .addCase(removeFromBookmarks.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(editPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.loading = false;
        toast.success("Post Edited");
        state.posts = action.payload.posts;
      })
      .addCase(editPost.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        toast.success("Post Deleted");
        state.posts = action.payload.posts;
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(postComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.loading = false;
        toast.success("Comment Added");
        state.posts = action.payload.posts;
      })
      .addCase(postComment.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(deleteComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.loading = false;
        toast.success("Comment Deleted");
        state.posts = action.payload.posts;
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      });
  },
});

export const { sortByValue } = postsSlice.actions;
export default postsSlice.reducer;
