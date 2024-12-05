import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { followers, following, follow, unfollow } from './api';

export const fetchFollowers = createAsyncThunk('followers/fetchFollowers', async (userId, thunkAPI) => {
  try {
    const response = await followers(userId);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const fetchFollowing = createAsyncThunk('followers/fetchFollowing', async (userId, thunkAPI) => {
  try {
    const response = await following(userId);
    console.log("response: ", response)
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const followUser = createAsyncThunk('followers/follow', async (userId, thunkAPI) => {
  try {
    const response = await follow(userId);
    return userId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const unfollowUser = createAsyncThunk('followers/unfollow', async (userId, thunkAPI) => {
  try {
    const response = await unfollow(userId);
    return userId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const followersSlice = createSlice({
  name: 'followers',
  initialState: {
    followers: {
      data: { followers: [] },
      loading: false,
      error: null,
    },
    following: {
      data:  { following: [] },
      loading: false,
      error: null,
    },
    actionState: {
      loadingState: false,
      errorState: null,
    },
  },
  reducers: {},
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
      })
      // Follow
      .addCase(followUser.pending, (state) => {
        state.actionState.loadingState = true;
        state.actionState.errorState = null;
      })
      .addCase(followUser.fulfilled, (state, action) => {
        state.actionState.loadingState = false;

        const followedUser = action.payload;

        if (!state.following.data.following.find(user => user._id === followedUser)) {
          state.following.data.following.push(followedUser);
        }

        // Actualizar el estado del usuario en la lista de followers
        const followerIndex = state.followers.data.followers.findIndex(
          user => user._id === followedUser
        );
        if (followerIndex !== -1) {
          state.followers.data.followers = state.followers.data.followers.map((user, index) =>
            index === followerIndex
              ? { ...user, isFollowed: true }
              : user
          );
        }
      })
      .addCase(followUser.rejected, (state, action) => {
        state.actionState.loadingState = false;
        state.actionState.errorState = action.payload.data ? action.payload.data.message : null;
      })
      // Unfollow
      .addCase(unfollowUser.pending, (state) => {
        state.actionState.loadingState = true;
        state.actionState.errorState = null;
      })
      .addCase(unfollowUser.fulfilled, (state, action) => {
        state.actionState.loadingState = false;

        const unfollowedUserId = action.payload;

        // Eliminar de la lista de following
        state.following.data.following = state.following.data.following.filter(
          user => user._id !== unfollowedUserId
        );

        // Actualizar el estado del usuario en la lista de followers
        const followerIndex = state.followers.data.followers.findIndex(
          user => user._id === unfollowedUserId
        );
        if (followerIndex !== -1) {
          state.followers.data.followers = state.followers.data.followers.map((user, index) =>
            index === followerIndex
              ? { ...user, isFollowed: false }
              : user
          );
        }
      })
      .addCase(unfollowUser.rejected, (state, action) => {
        state.actionState.loadingState = false;
        state.actionState.errorState = action.payload.data ? action.payload.data.message : null;
      });
  },
});

export default followersSlice.reducer;