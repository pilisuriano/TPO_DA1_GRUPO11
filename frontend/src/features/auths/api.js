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

export const signup = async (userData) => {
  try {
    const response = await api.post('/auths/signup', userData);
    return response;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network error");
  }
};

// Otras funciones de autenticación, como logout o verifyToken, también pueden estar aquí
