import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  posts: [],
  bookmarks: [],
  loading: false,
  sortBy: "Latest",
  sortOrder: null,
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const response = await axios.get("/api/posts");
    return response.data;
  } catch (error) {
    toast.error(`${error.response.data.errors}`);
  }
});

export const createPost = createAsyncThunk("posts/createPost", async (post) => {
  const encodedToken = localStorage.getItem("smasherToken");
  try {
    const response = await axios.post(
      "/api/user/posts/",
      { content: post },
      { headers: { authorization: encodedToken } }
    );
    return response.data;
  } catch (error) {
    toast.error(`${error.response.data.errors}`);
  }
});

export const likePost = createAsyncThunk("posts/like", async (id) => {
  try {
    const encodedToken = localStorage.getItem("smasherToken");
    const response = await axios.post(
      `/api/posts/like/${id}`,
      {},
      { headers: { authorization: encodedToken } }
    );
    return response.data;
  } catch (error) {
    toast.error(`${error.response.data.errors}`);
  }
});

export const dislikePost = createAsyncThunk("posts/dislike", async (id) => {
  try {
    const encodedToken = localStorage.getItem("smasherToken");
    const response = await axios.post(
      `/api/posts/dislike/${id}`,
      {},
      { headers: { authorization: encodedToken } }
    );
    return response.data;
  } catch (error) {
    toast.error(`${error.response.data.errors}`);
  }
});

export const postComment = createAsyncThunk(
  "posts/comment",
  async ({ id, comment }) => {
    try {
      const encodedToken = localStorage.getItem("smasherToken");
      const response = await axios.post(
        `/api/posts/${id}/comment`,
        {
          commentData: { content: comment },
        },
        { headers: { authorization: encodedToken } }
      );
      return response.data;
    } catch (error) {
      toast.error(`${error.response.data.errors}`);
    }
  }
);

export const bookmark = createAsyncThunk("post/bookmark", async (postId) => {
  try {
    const encodedToken = localStorage.getItem("smasherToken");
    const response = await axios.post(
      `/api/users/bookmark/${postId}`,
      {},
      { headers: { authorization: encodedToken } }
    );
    return response.data;
  } catch (error) {
    toast.error(`${error.response.data.errors}`);
  }
});

export const removeBookmark = createAsyncThunk(
  "post/removeBookmark",
  async (postId) => {
    try {
      const encodedToken = localStorage.getItem("smasherToken");
      const response = await axios.post(
        `api/users/remove-bookmark/${postId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return response.data;
    } catch (error) {
      toast.error(`${error.response.data.errors}`);
    }
  }
);

export const editPost = createAsyncThunk(
  "post/edit",
  async ({ id, content }) => {
    try {
      const encodedToken = localStorage.getItem("smasherToken");
      const response = await axios.post(
        `/api/posts/edit/${id}`,
        { postData: { content } },
        { headers: { authorization: encodedToken } }
      );
      return response.data;
    } catch (error) {
      toast.error(`${error.response.data.errors}`);
    }
  }
);

export const deletePost = createAsyncThunk("post/delete", async (id) => {
  try {
    const encodedToken = localStorage.getItem("smasherToken");
    const response = await axios.delete(`/api/posts/${id}`, {
      headers: { authorization: encodedToken },
    });
    return response.data;
  } catch (error) {
    toast.error(`${error.response.data.errors}`);
  }
});

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
        console.log("in posts thunk", action.payload.posts);
        state.loading = false;
        state.posts = action.payload.posts;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        toast.success("Post Created");
        state.posts = action.payload.posts;
        console.log("in createPost thunk", action.payload.posts);
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
        toast.success("Post Liked");
      })
      .addCase(dislikePost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
        toast.success("Post Disliked");
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(bookmark.fulfilled, (state, action) => {
        toast.success("Added to Bookmarks");
        state.bookmarks = action.payload.bookmarks;
      })
      .addCase(removeBookmark.fulfilled, (state, action) => {
        toast.success("Removed From Bookmarks");
        state.bookmarks = action.payload.bookmarks;
      })
      .addCase(editPost.fulfilled, (state, action) => {
        toast.success("Post Edited");
        state.posts = action.payload.posts;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        toast.success("Post Deleted");
        state.posts = action.payload.posts;
      });
  },
});

export const { sortByValue } = postsSlice.actions;
export default postsSlice.reducer;
