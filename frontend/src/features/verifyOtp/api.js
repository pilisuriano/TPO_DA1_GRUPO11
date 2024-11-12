import api from '../../services/api.js';

export const verifyOtp = async (userData) => {
  try {
    const response = await api.post('/auths/verify-otp', userData);
    return response;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network error");
  }
};