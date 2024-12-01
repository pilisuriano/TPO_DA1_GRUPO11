import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserProfile } from './api'; // Asegúrate de importar correctamente

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

export const updateUser = createAsyncThunk('user/updateUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.put('/api/users/me', userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
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
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetError } = userSlice.actions;

export default userSlice.reducer;