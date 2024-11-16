import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { verifyEmail } from './api.js';

const initialState = {
  loading: false,
  error: null,
  emailSent: false,
  data: null,
  showInUI: false,
};

export const verifyUserEmail = createAsyncThunk('auths/verify-email', async (data, thunkAPI) => {
  try {
    const response = await verifyEmail(data);
    if (!response.data) {
      throw new Error("Token not received")
    }
    return {
      ...response.data
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const verifyEmailSlice = createSlice({
  name: 'verifyEmail',
  initialState,
  reducers: {
    resetState: (state) => {
      state.emailSent = false;
      state.data = null;
      state.loading = false;
      state.error = null;
    },
    resetError: (state) => {
      state.error = null;
      state.emailSent = false;
      state.data = null;
      state.showInUI = false;
    },
    setError: (state, action) => {
      state.error = action.payload.message;
      state.showInUI = action.payload.showInUI;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(verifyUserEmail.pending, (state) => {
      state.loading = true;
      state.showInUI = false;
    })
    .addCase(verifyUserEmail.fulfilled, (state, action) => {
      state.loading = false;
      state.emailSent = true;
      state.data = action.payload;
      state.error = null;
      state.showInUI = false;
    })
    .addCase(verifyUserEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.data ? action.payload.data.message : null;
      state.showInUI = action.payload.data ? true : false;
    })
  },
});

export const { resetError, setError, resetState } = verifyEmailSlice.actions;

export default verifyEmailSlice.reducer;