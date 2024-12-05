import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { deleteLike, saveLike } from './api';

export const addLike = createAsyncThunk('likes/addFavorite', async (postId, thunkAPI) => {
  try {
    await saveLike(postId);
    return postId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const removeLike = createAsyncThunk('likes/removeFavorite', async (postId, thunkAPI) => {
  try {
    await deleteLike(postId);
    return postId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const likesSlice = createSlice({
  name: 'likes',
  initialState: {
    likes: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add like
      .addCase(addLike.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addLike.fulfilled, (state, action) => {
        state.loading = false;
        const postId = action.payload;
        if (!state.likes.some((post) => post._id === postId)) {
          // Si solo tienes el postId, lo agregas de forma mínima
          state.likes.push({ _id: postId });
        }
      })
      .addCase(addLike.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.data ? action.payload.data.message : null;
      })
      // Add like
      .addCase(removeLike.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeLike.fulfilled, (state, action) => {
        state.loading = false;

        const postId = action.payload;
        state.likes = state.likes.filter((post) => post._id !== postId);
      })
      .addCase(removeLike.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.data ? action.payload.data.message : null;
      });
  },
});

export default likesSlice.reducer;
