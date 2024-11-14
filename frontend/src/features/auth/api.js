import api from '../../services/api.js';

export const login = async (credentials) => {
  try {
    const response = await api.post('/auths/login', credentials);
    return response;
  } catch (error) {
    throw error.response;
  }
};
