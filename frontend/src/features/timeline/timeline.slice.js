import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getInitialTimeline, getNewerPosts, getOlderPosts } from './api.js';

const initialState = {
  posts: [],
  hasMore: true,
  loading: false,
  error: null,
};

export const getTimeline = createAsyncThunk('timeline/fetchInitial', async (thunkAPI) => {
  try {
    const response = await getInitialTimeline();
    console.log(`RESPONSE: ${JSON.stringify(response)}`)
    if (!response.data) {
      throw new Error("Token not received")
    }
    return {
      ...response.data
    };
  } catch (error) {
    console.log(error)
    if (!error) {
      return thunkAPI.rejectWithValue("No se pudo conectar con el servidor. Verifica tu conexión a Internet.");
    }
    return thunkAPI.rejectWithValue(error.response.data.message || "Error inesperado del servidor");
  }
});

export const getTimelineNewPosts = createAsyncThunk('timeline/fetchNewerPosts', async (after_timestamp, thunkAPI) => {
  try {
    const response = await getNewerPosts(after_timestamp);
    console.log(`RESPONSE: ${JSON.stringify(response)}`)
    if (!response.data) {
      throw new Error("Token not received")
    }
    return {
      ...response.data
    };
  } catch (error) {
    console.log(error)
    if (!error) {
      return thunkAPI.rejectWithValue("No se pudo conectar con el servidor. Verifica tu conexión a Internet.");
    }
    return thunkAPI.rejectWithValue(error.response.data.message || "Error inesperado del servidor");
  }
});

export const getTimelineOlderPosts = createAsyncThunk('timeline/fetchOlderPosts', async (before_timestamp, thunkAPI) => {
  try {
    const response = await getOlderPosts(before_timestamp);
    console.log(`RESPONSE: ${JSON.stringify(response)}`)
    if (!response.data) {
      throw new Error("Token not received")
    }
    return {
      ...response.data
    };
  } catch (error) {
    console.log(error)
    if (!error) {
      return thunkAPI.rejectWithValue("No se pudo conectar con el servidor. Verifica tu conexión a Internet.");
    }
    return thunkAPI.rejectWithValue(error.response.data.message || "Error inesperado del servidor");
  }
});

const timelineSlice = createSlice({
  name: 'timeline',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTimeline.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTimeline.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
        state.hasMore = action.payload.hasMore;
        state.loading = false;
      })
      .addCase(getTimeline.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getTimelineOlderPosts.fulfilled, (state, action) => {
        state.posts = [...state.posts, ...action.payload.posts];
        state.hasMore = action.payload.hasMore;
      })
      .addCase(getTimelineNewPosts.fulfilled, (state, action) => {
        state.posts = [...action.payload.posts, ...state.posts];
      });
      // agregar mas estados
  },
});

export default timelineSlice.reducer;