import api from '../../services/api.js';

export const changePassword = async (data) => {
  try {
    const response = await api.post('/auths/reset-password', userData);
    return response;
  } catch (error) {
    throw error.response;
  }
};