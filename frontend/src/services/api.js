import axios from 'axios';
import { getAuthToken } from './secureStore';

const api = axios.create({
  baseURL: 'https://tpo-da1-grupo11.onrender.com',
  //baseURL: 'http://10.0.2.2:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para manejar la respuesta
api.interceptors.response.use(
  (response) => {
    return {
      ...response,
      data: response.data,
    };
  },
  (error) => {
    if (error.message === 'Network Error') {
      error.isNetworkError = true;
    }
    return Promise.reject(error);
  }
);

export default api;