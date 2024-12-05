import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getInitialTimeline, getNewerPosts, getOlderPosts } from './api.js';
import { addFavorite, removeFavorite } from '../favorites/favorites.slice.js';
import { addLike, removeLike } from '../likes/likes.slice.js';

const initialState = {
  posts: [],
  hasMore: true,
  loading: false,
  error: null,
  showEmptyTimeline: false
};

export const getTimeline = createAsyncThunk('timeline/fetchInitial', async (thunkAPI) => {
  try {
    const response = await getInitialTimeline();
    if (!response.data) {
      throw new Error("Token not received")
    }
    return {
      ...response.data
    };
  } catch (error) {
    if (!error) {
      return thunkAPI.rejectWithValue("No se pudo conectar con el servidor. Verifica tu conexión a Internet.");
    }
    return thunkAPI.rejectWithValue(error.response.data.message || "Error inesperado del servidor");
  }
});

export const getTimelineNewPosts = createAsyncThunk('timeline/fetchNewerPosts', async (data, thunkAPI) => {
  try {
    const response = await getNewerPosts(data);
    if (!response.data) {
      throw new Error("Token not received")
    }
    return {
      ...response.data
    };
  } catch (error) {
    if (!error) {
      return thunkAPI.rejectWithValue("No se pudo conectar con el servidor. Verifica tu conexión a Internet.");
    }
    return thunkAPI.rejectWithValue(error.response.data.message || "Error inesperado del servidor");
  }
});

export const getTimelineOlderPosts = createAsyncThunk('timeline/fetchOlderPosts', async (before_timestamp, thunkAPI) => {
  try {
    const response = await getOlderPosts(before_timestamp);
    if (!response.data) {
      throw new Error("Token not received")
    }
    return {
      ...response.data
    };
  } catch (error) {
    if (!error) {
      return thunkAPI.rejectWithValue("No se pudo conectar con el servidor. Verifica tu conexión a Internet.");
    }
    return thunkAPI.rejectWithValue(error.response.data.message || "Error inesperado del servidor");
  }
});

const timelineSlice = createSlice({
  name: 'timeline',
  initialState: initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
      state.loading = false;
      state.showEmptyTimeline = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTimeline.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(getTimeline.fulfilled, (state, action) => {
        if (action.payload.posts.length === 0) {
          state.showEmptyTimeline = true
          state.posts = action.payload.posts;
          state.hasMore = action.payload.hasMore ?? false;
          state.loading = false;
          return;
        }
        state.posts = action.payload.posts;
        state.hasMore = action.payload.hasMore ?? false;
        state.loading = false;
      })
      .addCase(getTimeline.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })
      .addCase(getTimelineOlderPosts.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(getTimelineOlderPosts.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.length > 0) {
          state.posts = [...state.posts, ...action.payload];
        }
        state.hasMore = action.payload.hasMore;
      })
      .addCase(getTimelineOlderPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })
      .addCase(getTimelineNewPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTimelineNewPosts.fulfilled, (state, action) => {
        const newPosts = action.payload.posts.filter(
          (newPost) => !state.posts.some((post) => post._id === newPost._id)
        );
        if (action.payload.posts.length === 0 && newPosts.length === 0) {
          state.loading = false;
          return;
        }
      
        state.posts = [ ...newPosts, ...state.posts];
        state.hasMore = action.payload.hasMore ?? false;
        state.loading = false;
      })
      .addCase(getTimelineNewPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })
      // Escuchar addFavorite
      .addCase(addFavorite.fulfilled, (state, action) => {
        const postId = action.payload;
        const post = state.posts.find((post) => post._id === postId);
        if (post) {
          post.isFavorite = true;
        }
      })
      // Escuchar removeFavorite
      .addCase(removeFavorite.fulfilled, (state, action) => {
        const postId = action.payload;
        const post = state.posts.find((post) => post._id === postId);
        if (post) {
          post.isFavorite = false;
        }
      })
      .addCase(addLike.fulfilled, (state, action) => {
        const postId = action.payload;
        const post = state.posts.find((post) => post._id === postId);
        if (post) {
          post.isLiked = true;
          post.likes += 1;
        }
      })
      .addCase(removeLike.fulfilled, (state, action) => {
        const postId = action.payload;
        const post = state.posts.find((post) => post._id === postId);
        if (post) {
          post.isLiked = false;
          post.likes -= 1;
        }
      });
  },
});

export default timelineSlice.reducer;