import api from '../../services/api.js';

export const login = async (credentials) => {
  try {
    const response = await api.post('/auths/login', credentials);
    return response;
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
