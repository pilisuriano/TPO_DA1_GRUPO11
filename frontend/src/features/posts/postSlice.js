import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createPost, getUserPosts, updatePost, getPost, addComment } from '../../features/posts/api';

const initialState = {
  posts: [], // Agregar para almacenar publicaciones del usuario
  postCreated: false,
  loading: false,
  error: null,
  selectedPost: null,
  selectedPostLoading: false,
  selectedPostError: null,
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

export const updatePostData = createAsyncThunk(
  'posts/updatePost',
  async ({ postId, postData }, { rejectWithValue }) => {
    try {
      const response = await updatePost(postId, postData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserPost = createAsyncThunk('posts/getPost', async (postId, thunkAPI) => {
  try {
    const response = await getPost(postId);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
}
);

export const addUserComment = createAsyncThunk('posts/addComment', async ({ postId, comment }, thunkAPI) => {
  try {
    const response = await addComment(postId, comment);
    console.log(response)
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
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

        const { newPost } = action.payload; // Asumiendo que el backend retorna el post creado
        state.posts = [...state.posts, newPost]; // Agregar inmutablemente el nuevo post
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
      })
      .addCase(updatePostData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePostData.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.posts.findIndex(post => post._id === action.payload._id);
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })
      .addCase(updatePostData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUserPost.pending, (state) => {
        state.selectedPostLoading = true;
        state.selectedPostError = null;
        state.selectedPost = null;
      })
      .addCase(getUserPost.fulfilled, (state, action) => {
        state.selectedPostLoading = false;
        state.selectedPost = action.payload;
      })
      .addCase(getUserPost.rejected, (state, action) => {
        state.selectedPostLoading = false;
        state.selectedPostError = action.payload;
        state.selectedPost = null;
      })
      // Add comment to post
      .addCase(addUserComment.pending, (state) => {
        state.selectedPostLoading = true;
        state.selectedPostError = null;
      })
      .addCase(addUserComment.fulfilled, (state, action) => {
        state.selectedPostLoading = false;

        const { comment } = action.payload;
        const post = state.selectedPost;

        if (post && post._id === comment.postId) {
          post.comments = [...post.comments, comment];
        }
      })
      .addCase(addUserComment.rejected, (state, action) => {
        state.selectedPostLoading = false;
        state.selectedPostError = action.payload;
      });
  },
});

export const { resetError } = postSlice.actions;

export default postSlice.reducer;