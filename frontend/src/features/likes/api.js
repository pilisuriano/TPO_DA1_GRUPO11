import api from '../../services/api.js';

export const saveLike = async (postId) => {
  try {
    const response = await api.post(`/posts/${postId}/like`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const deleteLike = async (postId) => {
  try {
    const response = await api.delete(`/posts/${postId}/like`);
    return response;
  } catch (error) {
    throw error.response;
  }
};