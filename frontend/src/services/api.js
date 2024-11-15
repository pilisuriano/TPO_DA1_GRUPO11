import axios from 'axios';
import { getAuthToken } from './secureStore';

const api = axios.create({
  baseURL: 'https://tpo-da1-grupo11.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await getAuthToken();
    console.log('Token obtenido:', token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('Starting Request', config);
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para manejar la respuesta
api.interceptors.response.use(
  (response) => {
    console.log('Response:', response);
    return {
      ...response,
      data: response.data,
    };
  },
  (error) => {
    console.log('Error Response:', error);
    if (error.message === 'Network Error') {
      error.isNetworkError = true;
    }
    return Promise.reject(error);
  }
);

export default api;