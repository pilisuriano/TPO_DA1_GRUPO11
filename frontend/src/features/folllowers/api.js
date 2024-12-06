import api from '../../services/api.js';

export const followers = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}/followers`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const following = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}/following`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const follow = async (userId) => {
  try {
    const response = await api.post(`/users/${userId}/follow`);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const unfollow = async (userId) => {
  try {
    const response = await api.delete(`/users/${userId}/unfollow`);
    return response;
  } catch (error) {
    throw error.response;
  }
};
