import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { saveAuthToken, deleteAuthToken } from '../../services/secureStore.js';
import { login, signup } from './api';

const initialState = {
  token: null,
  loading: false,
  error: null,
  authenticated: false
};

export const loginUser = createAsyncThunk('auths/login', async (credentials, thunkAPI) => {
  try {
    const response = await login(credentials);
    console.log(`RESPONSE: ${JSON.stringify(response)}`)
    if (!response.data.token) {
      throw new Error("Token not received")
    }
    const token = response.data.token;
    await saveAuthToken('authToken', token);
    return {
      token,
      userId: { id: response.data.userId },
    };
  } catch (error) {
    console.log(error)
    if(!error) {
      return thunkAPI.rejectWithValue("No se pudo conectar con el servidor. Verifica tu conexión a Internet.");
    }
    return thunkAPI.rejectWithValue(error.response.data.message || "Error inesperado del servidor");
  }
});

export const logoutUser = createAsyncThunk('auths/logout', async (_, thunkAPI) => {
  try {
    await deleteAuthToken('authToken');
    return true;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
      state.authenticated = false
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.authenticated = true;
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.authenticated = false;
    })
    .addCase(logoutUser.fulfilled, (state) => {
      state.token = null;
      state.authenticated = false;
    })
    .addCase(logoutUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});
export const { resetError } = authSlice.actions;
export default authSlice.reducer;
