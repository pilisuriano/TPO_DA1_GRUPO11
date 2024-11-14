import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { verifyOtp } from './api.js';

const initialState = {
  loading: false,
  error: null,
  verified: false,
};

// otp
/*
authsRoutes.post("/verify-otp", verifyOtp)
/*
*/
export const verifyUserOtp = createAsyncThunk('auths/verify-otp', async (data, thunkAPI) => {
  try {
    const response = await verifyOtp(data);
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

const verifyOtpSlice = createSlice({
  name: 'verifyOtp',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
      state.verified = false;
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
    })
    .addCase(verifyUserOtp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  },
});

export const { resetError } = verifyOtpSlice.actions;

export default verifyOtpSlice.reducer;