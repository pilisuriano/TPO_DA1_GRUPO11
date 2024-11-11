import api from '../../services/api.js';

export const createPost = async (postData) => {
  try {
    const response = await api.post('/posts', postData);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    if (error.response) {
      console.error("Error Response Data:", error.response.data);
    } else {
      console.error("Network error or other issue");
    }
    throw error.response ? error.response.data : new Error("Network error");
  }
};

export const getPost = async (postId) => {
  try {
    const response = await api.get(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    if (error.response) {
      console.error("Error Response Data:", error.response.data);
    } else {
      console.error("Network error or other issue");
    }
    throw error.response ? error.response.data : new Error("Network error");
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await api.delete(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    if (error.response) {
      console.error("Error Response Data:", error.response.data);
    } else {
      console.error("Network error or other issue");
    }
    throw error.response ? error.response.data : new Error("Network error");
  }
};