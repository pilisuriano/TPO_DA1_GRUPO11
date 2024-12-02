import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchUsers } from './api'; // Asegúrate de importar correctamente

// Acción asíncrona para buscar usuarios
export const fetchSearchUsers = createAsyncThunk(
  'search/searchUsers',
  async (query, { rejectWithValue }) => {
    try {
      console.log('Iniciando búsqueda de usuarios con query:', query);
      const response = await searchUsers(query);
      console.log('Respuesta recibida:', response);
      return response;
    } catch (error) {
      console.error('Error en la búsqueda de usuarios:', error);
      return rejectWithValue(error.response.data.message || "Error inesperado del servidor");
    }
  }
);

const searchSlice = createSlice({
    name: 'search',
    initialState: {
      users: [],
      loading: false,
      error: null,
    },
    reducers: {
      resetError: (state) => {
        state.error = null;
      },
      clearUsers: (state) => {
        state.users = [];
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchSearchUsers.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchSearchUsers.fulfilled, (state, action) => {
          state.loading = false;
          state.users = action.payload.users;
        })
        .addCase(fetchSearchUsers.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export const { resetError, clearUsers } = searchSlice.actions;
  
  export default searchSlice.reducer;