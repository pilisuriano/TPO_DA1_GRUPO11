import api from '../../services/api.js';

export const signup = async (userData) => {
  try {
    const response = await api.post('/auths/signup', userData);
    return response;
  } catch (error) {
    throw error.response
  }
};