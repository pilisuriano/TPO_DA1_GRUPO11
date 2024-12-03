import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserProfile, getAnotherUserProfile } from './api'; // Asegúrate de importar correctamente
import axios from 'axios';
import { getAuthToken } from '../../services/secureStore';
import { updateUser } from './api';

/*// Acción asíncrona para obtener el perfil del usuario autenticado
export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUserProfile();
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);*/

// Acción asíncrona para obtener el perfil del usuario autenticado
export const fetchUserProfile = createAsyncThunk(
    'user/fetchUserProfile',
    async (_, { rejectWithValue }) => {
      try {
        const response = await getUserProfile();  // Aquí deberías obtener el perfil del usuario y sus posts
        return response;  // Asegúrate de retornar los datos correctamente, si la respuesta es un objeto
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const fetchAnotherUserProfile = createAsyncThunk(
    'user/fetchAnotherUserProfile',
    async (userId, { rejectWithValue }) => {
      try {
        const response = await getAnotherUserProfile();  // Aquí deberías obtener el perfil del usuario y sus posts
        return response;  // Asegúrate de retornar los datos correctamente, si la respuesta es un objeto
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const updateUserData = createAsyncThunk('user/updateUser', async (userData, thunkAPI) => {
    try {
      console.log("Sending user data:", userData);
      const response = await updateUser(userData);
      return response;
    } catch (error) {
      console.error('Error in updateUser thunk:', error);
      return thunkAPI.rejectWithValue(error);
    }
  });

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    error: null,
    posts: [],
  },
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.posts = action.payload.posts || [];  // Asegúrate de que posts sea un array  // Aquí obtienes los posts del usuario
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = { ...state.user, ...action.payload }; // Actualiza el estado del usuario con los nuevos datos
      })
      .addCase(updateUserData.rejected, (state, action) => {
        console.error('Error updating user:', action.payload); // Log detallado
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAnotherUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnotherUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.posts = action.payload.posts;
      })
      .addCase(fetchAnotherUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetError } = userSlice.actions;

export default userSlice.reducer;