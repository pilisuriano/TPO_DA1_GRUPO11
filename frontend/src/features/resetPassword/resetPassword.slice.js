import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { changePassword } from './api.js';

const initialState = {
  loading: false,
  error: null,
  passwordRecovery: false,
  data: null,
  showInUI: false,
};

export const resetUserPassword = createAsyncThunk('auths/reset-password', async (data, thunkAPI) => {
  try {
    const response = await changePassword(data);
    console.log(`RESPONSE: ${JSON.stringify(response.data)}`)
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

const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {
    resetState: (state) => {
      state.passwordRecovery = false;
      state.data = null;
      state.loading = false;
      state.error = null;
    },
    resetError: (state) => {
      state.error = null;
      state.passwordRecovery = false;
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
    .addCase(resetUserPassword.pending, (state) => {
      state.loading = true;
      state.showInUI = false;
    })
    .addCase(resetUserPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.passwordRecovery = true;
      state.data = action.payload;
      state.error = null;
      state.showInUI = false;
    })
    .addCase(resetUserPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.data ? action.payload.data.message : null;
      state.showInUI = action.payload.data ? true : false;
    })
  },
});

export const { resetError, setError, resetState } = resetPasswordSlice.actions;

export default resetPasswordSlice.reducer;