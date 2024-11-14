import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createPost, getPost } from '../../services/api';

const initialState = {
  posts: [], // Estado inicial de posts como un array vacío
  loading: false,
  error: null,
};

const parseErrorResponse = (error) => {
  if (error.response) {
    const contentType = error.response.headers['content-type'];
    if (contentType && contentType.includes('application/json')) {
      return JSON.stringify(error.response.data);
    } else if (contentType && contentType.includes('text/html')) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(error.response.data, 'text/html');
      const message = doc.querySelector('pre') ? doc.querySelector('pre').textContent : 'An error occurred: Bad Request';
      return message;
    } else {
      return `An error occurred: ${JSON.stringify(error.response.data)}`;
    }
  } else {
    return `An error occurred: ${error.message || 'Unknown error'}`;
  }
};

// Acción para crear un nuevo post
export const createUserPost = createAsyncThunk('posts/createPost', async (formData, thunkAPI) => {
  try {
    console.log("POST DATA:", JSON.stringify(formData));
    const response = await createPost(formData);
    console.log(`RESPONSE: ${JSON.stringify(response)}`)
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error); //(error.response.data)
  }
});

// Acción para obtener un post
export const getUserPost = createAsyncThunk('posts/getPost', async (postId, thunkAPI) => {
  try {
    const response = await getPost(postId);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const postSlice = createSlice({
  name: 'post',
  /*initialState: {
    posts: [], // Estado inicial de posts como un array vacío
    token: token,
    loading: false,
    error: null,
    authenticated: !!token,
  },*/
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
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
        state.posts.push(action.payload);
      })
      .addCase(createUserPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUserPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        );
      })
      .addCase(getUserPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetError } = postSlice.actions;

export default postSlice.reducer;