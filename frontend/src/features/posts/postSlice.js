import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createPost, getPost } from './api.js';

// Acción para crear un nuevo post
export const createUserPost = createAsyncThunk('posts/createPost', async (postData, thunkAPI) => {
  try {
    const response = await createPost(postData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Acción para obtener un post
export const getUserPost = createAsyncThunk('posts/getPost', async (postId, thunkAPI) => {
  try {
    const response = await getPost(postId);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [], // Estado inicial de posts como un array vacío
    loading: false,
    error: null,
  },
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUserPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
      })
      .addCase(createUserPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUserPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        );
      })
      .addCase(getUserPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetError } = postSlice.actions;

export default postSlice.reducer;