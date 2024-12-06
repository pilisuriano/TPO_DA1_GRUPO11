import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { deleteFavorite, favorites, saveFavorite } from './api';

export const fetchFavorites = createAsyncThunk('favorites/fetchFavorites', async (_, thunkAPI) => {
  try {
    const response = await favorites();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addFavorite = createAsyncThunk('favorites/addFavorite', async (postId, thunkAPI) => {
  try {
    const response = await saveFavorite(postId);
    return postId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const removeFavorite = createAsyncThunk('favorites/removeFavorite', async (postId, thunkAPI) => {
  try {
    const response = await deleteFavorite(postId);
    return postId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// Slice
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: { favorites: [] },
    loading: false,
    error: null,
    addFavoriteState: {
      loading: false,
      error: null,
    },
    removeFavoriteState: {
      loading: false,
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch favorites
      .addCase(fetchFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.favorites = action.payload;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.data ? action.payload.data.message : null;
      })
      // Add favorite
      .addCase(addFavorite.pending, (state) => {
        state.addFavoriteState.loading = true;
        state.addFavoriteState.error = null;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.addFavoriteState.loading = false;

        const postId = action.payload;
        if (!state.favorites.favorites.some((post) => post._id === postId)) {
          // Si solo tienes el postId, lo agregas de forma mínima
          state.favorites.favorites.push({ _id: postId });
        }
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.addFavoriteState.loading = false;
        state.addFavoriteState.error = action.payload.data ? action.payload.data.message : null;
      })

      // Remove favorite
      .addCase(removeFavorite.pending, (state) => {
        state.removeFavoriteState.loading = true;
        state.removeFavoriteState.error = null;
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.removeFavoriteState.loading = false;

        const postId = action.payload;
        state.favorites.favorites = state.favorites.favorites.filter((post) => post._id !== postId);
      })
      .addCase(removeFavorite.rejected, (state, action) => {
        state.removeFavoriteState.loading = false;
        state.removeFavoriteState.error = action.payload.data ? action.payload.data.message : null;
      });
  },
});

export default favoritesSlice.reducer;
