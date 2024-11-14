import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { saveAuthToken, deleteAuthToken } from '../../services/secureStore.js';
import { login } from './api.js';

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
    console.log(`STATUS: ${JSON.stringify(response.status)}`)
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
    },
    resetError: (state) => {
      state.error = null;
      state.authenticated = false
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginUser.pending, (state) => {
      state.loading = true;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.authenticated = true;
      state.error = null;
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  },
});

export const { setAuthToken, logoutUser, resetError } = authSlice.actions;

export default authSlice.reducer;
