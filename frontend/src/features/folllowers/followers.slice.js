import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { followers, following } from './api';

// Thunk para obtener la lista de seguidores
export const fetchFollowers = createAsyncThunk('followers/fetchFollowers', async (userId, thunkAPI) => {
  try {
    const response = await followers(userId);
    console.log("RESPONSE:  ",  response)
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// Thunk para obtener la lista de usuarios seguidos
export const fetchFollowing = createAsyncThunk('followers/fetchFollowing', async (userId, thunkAPI) => {
  try {
    const response = await following(userId);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const followersSlice = createSlice({
  name: 'followers',
  initialState: {
    followers: {
        data: [],
        loading: false,
        error: null,
      },
      following: {
        data: [],
        loading: false,
        error: null,
      },
  },
  reducers: {
    // Puedes agregar reducers personalizados aquí
  },
  extraReducers: (builder) => {
    builder
      // Followers
      .addCase(fetchFollowers.pending, (state) => {
        state.followers.loading = true;
        state.followers.error = null;
      })
      .addCase(fetchFollowers.fulfilled, (state, action) => {
        state.followers.loading = false;
        state.followers.data = action.payload;
      })
      .addCase(fetchFollowers.rejected, (state, action) => {
        state.followers.loading = false;
        state.followers.error = action.payload.data ? action.payload.data.message : null;
      })
      // Following
      .addCase(fetchFollowing.pending, (state) => {
        state.following.loading = true;
        state.following.error = null;
      })
      .addCase(fetchFollowing.fulfilled, (state, action) => {
        state.following.loading = false;
        state.following.data = action.payload;
      })
      .addCase(fetchFollowing.rejected, (state, action) => {
        state.following.loading = false;
        state.following.error = action.payload.data ? action.payload.data.message : null;
      });
  },
});

export default followersSlice.reducer;