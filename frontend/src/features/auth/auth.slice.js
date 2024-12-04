import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { saveAuthToken, deleteAuthToken } from '../../services/secureStore.js';
import { login } from './api.js';

const initialState = {
  token: null,
  loading: false,
  error: null,
  authenticated: false,
  showInUI: false,
};

export const loginUser = createAsyncThunk('auths/login', async (credentials, thunkAPI) => {
  try {
    const response = await login(credentials);
    const token = response.data.token;
    await saveAuthToken(token);
    return {
      token,
      userId: { id: response.data.userId },
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.token = action.payload.token;
      state.authenticated = true;
    },
    logoutUser: (state) => {
      state.token = null;
      state.authenticated = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload.message;
      state.showInUI = action.payload.showInUI;
    },
    resetError: (state) => {
      state.error = null;
      state.authenticated = false;
      state.showInUI = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.showInUI = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.authenticated = true;
        state.error = null;
        state.showInUI = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.data ? action.payload.data.message : null;
        state.showInUI = action.payload.data ? true : false;
      })
  },
});

export const { setAuthToken, logoutUser, setError, resetError } = authSlice.actions;

export default authSlice.reducer;
