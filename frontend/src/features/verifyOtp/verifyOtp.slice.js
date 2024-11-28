import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { verifyOtp } from './api.js';

const initialState = {
  loading: false,
  error: null,
  verified: false,
  loadingRegistered: false,
  errorRegistered: null,
  verifiedRegistered: false,
  showInUI: false,
};

export const verifyUserOtp = createAsyncThunk('auths/verify-otp', async (data, thunkAPI) => {
  try {
    const response = await verifyOtp(data);
    return {
      ...response.data
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const verifyRegisteredUserOtp = createAsyncThunk('auths/verify-registered-otp', async (data, thunkAPI) => {
  try {
    const response = await verifyOtp(data);
    return {
      ...response.data
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const verifyOtpSlice = createSlice({
  name: 'verifyOtp',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
      state.verified = false;
      state.verifiedRegistered = false;
      state.showInUI = false
    },
    setError: (state, action) => {
      state.error = action.payload.message;
      state.showInUI = action.payload.showInUI;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(verifyUserOtp.pending, (state) => {
      state.loading = true;
    })
    .addCase(verifyUserOtp.fulfilled, (state, action) => {
      state.loading = false;
      state.verified = true;
      state.error = null;
      state.showInUI = false
    })
    .addCase(verifyUserOtp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.data ? action.payload.data.message : null;
      state.showInUI = action.payload.data ? true : false;
    })
    .addCase(verifyRegisteredUserOtp.pending, (state) => {
      state.loadingRegistered = true;
    })
    .addCase(verifyRegisteredUserOtp.fulfilled, (state, action) => {
      state.loadingRegistered = false;
      state.verifiedRegistered = true;
      state.errorRegistered = null;
      state.showInUI = false
    })
    .addCase(verifyRegisteredUserOtp.rejected, (state, action) => {
      state.loadingRegistered = false;
      state.errorRegistered = action.payload.data ? action.payload.data.message : null;
      state.showInUI = action.payload.data ? true : false;
    })
  },
});

export const { resetError, setError } = verifyOtpSlice.actions;

export default verifyOtpSlice.reducer;