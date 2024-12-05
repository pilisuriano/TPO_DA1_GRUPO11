import api from '../../services/api.js';

export const favorites = async () => {
  try {
    const response = await api.get("/users/me/favorites");
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const saveFavorite = async (postId) => {
  try {
    const response = await api.post(`/posts/${postId}/favorite`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const deleteFavorite = async (postId) => {
  try {
    const response = await api.delete(`/posts/${postId}/favorite`);
    return response;
  } catch (error) {
    throw error.response;
  }
};