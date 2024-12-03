import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { verifyEmail } from './api.js';

const initialState = {
  loading: false,
  error: null,
  emailSent: false,
  data: null
};

export const verifyUserEmail = createAsyncThunk('auths/verify-email', async (data, thunkAPI) => {
  try {
    const response = await verifyEmail(data);
    console.log(`RESPONSE: ${JSON.stringify(response.data)}`)
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

const verifyEmailSlice = createSlice({
  name: 'verifyEmail',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
      state.emailSent = false;
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(verifyUserEmail.pending, (state) => {
      state.loading = true;
    })
    .addCase(verifyUserEmail.fulfilled, (state, action) => {
      state.loading = false;
      state.emailSent = true;
      state.data = action.payload;
      state.error = null;
    })
    .addCase(verifyUserEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  },
});

export const { resetError } = verifyEmailSlice.actions;

export default verifyEmailSlice.reducer;