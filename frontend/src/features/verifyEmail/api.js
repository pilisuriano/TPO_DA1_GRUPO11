import api from '../../services/api.js';

export const verifyEmail = async (userData) => {
  try {
    const response = await api.post('/auths/verify-email', userData);
    return response;
  } catch (error) {
    throw error.response;
  }
};