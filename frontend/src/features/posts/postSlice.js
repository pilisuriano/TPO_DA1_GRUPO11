import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createPost, getUserPosts} from '../../features/posts/api';

const initialState = {
  postCreated: false,
  loading: false,
  error: null,
};


// Acción para crear un nuevo post
export const createUserPost = createAsyncThunk('posts/createPost', async (data, thunkAPI) => {
  try {
    const response = await createPost(data);
    return {
      ...response.data
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// Acción asíncrona para obtener las publicaciones del usuario autenticado
export const fetchUserPosts = createAsyncThunk(
  'posts/fetchUserPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUserPosts();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
      state.postCreated = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUserPost.fulfilled, (state, action) => {
        state.loading = false;
        state.postCreated = true;
      })
      .addCase(createUserPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchUserPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetError } = postSlice.actions;

export default postSlice.reducer;