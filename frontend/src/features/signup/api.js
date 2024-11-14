import api from '../../services/api.js';

export const signup = async (userData) => {
  try {
    const response = await api.post('/auths/signup', userData);
    return response;
  } catch (error) {
    console.log(JSON.stringify(error))
    throw error.response ? error.response.data : new Error("Network error");
  }
};