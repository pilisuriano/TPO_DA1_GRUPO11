import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signup } from './api.js';

const initialState = {
  loading: false,
  error: null,
  created: false,
  showInUI: false,
};

export const signupUser = createAsyncThunk('auths/signup', async (userData, thunkAPI) => {
  try {
    const response = await signup(userData);
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

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
      state.created = false;
      state.showInUI = false;
    },
    setError: (state, action) => {
      state.error = action.payload.message;
      state.showInUI = action.payload.showInUI;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(signupUser.pending, (state) => {
      state.loading = true;
      state.showInUI = false;
    })
    .addCase(signupUser.fulfilled, (state, action) => {
      state.loading = false;
      state.showInUI = false;
      state.created = true;
      state.error = null;
    })
    .addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.data ? action.payload.data.message : null;
      state.showInUI = action.payload.data ? true : false;
    })
  },
});

export const { resetError } = signupSlice.actions;

export default signupSlice.reducer;