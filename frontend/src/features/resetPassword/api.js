import api from '../../services/api.js';

export const changePassword = async (userData) => {
  try {
    const response = await api.post('/auths/reset-password', userData);
    return response;
  } catch (error) {
    console.log(error)
    throw error.response;
  }
};