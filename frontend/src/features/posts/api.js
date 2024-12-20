import api from '../../services/api.js';

export const createPost = async (data) => {
  try {
    const response = await api.post('/posts', data);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const getUserPosts = async () => {
  try {
    const response = await api.get('/users/me');

    // Verificar si hay publicaciones en la respuesta
    if (!response.data || !response.data.posts || response.data.posts.length === 0) {
      throw new Error("No posts found for the user.");
    }
    return response.data.posts;  // Asumiendo que 'posts' es el campo que contiene las publicaciones
  } catch (error) {
    if (error.response) {
      throw new Error(`Server responded with status ${error.response.status}: ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      // La solicitud fue enviada pero no hubo respuesta
      console.error("No response received:", error.request);
      throw new Error("Network error: No response received from server");
    } else {
      // Algo sucedió al preparar la solicitud que desencadenó un error
      console.error("Error setting up request:", error.message);
      throw new Error(`Request error: ${error.message}`);
    }
  }
};

export const updatePost = async (postId, postData) => {
  try {
    const response = await api.put(`/posts/${postId}`, postData);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`Server responded with status ${error.response.status}: ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      console.error("No response received:", error.request);
      throw new Error("Network error: No response received from server");
    } else {
      console.error("Error setting up request:", error.message);
      throw new Error(`Request error: ${error.message}`);
    }
  }
};

export const getPost = async (postId) => {
  try {
    const response = await api.get(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    throw error.response;
  }
};

export const addComment = async (postId, comment) => {
  try {
    console.log(comment)
    const response = await api.post(`/posts/${postId}/comment`, {text: comment});
    return response.data;
  } catch (error) {
    throw error.response;
  }
};
