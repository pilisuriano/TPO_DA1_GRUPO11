import axios from 'axios';
import { getAuthToken } from './secureStore';

const api = axios.create({
  baseURL: 'https://tpo-da1-grupo11.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// export const login = (credentials) => authApi.post('/auth/login', credentials);
// export const signup = (userData) => authApi.post('/auth/signup', userData);
// export default authApi;
// Interceptor para agregar el token de autenticación si está disponible
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
    // Extraer solo los datos necesarios
    return {
      ...response,
      data: response.data,
    };
  },
  (error) => {
    // Puedes manejar el error de la forma que necesites
    return Promise.reject(error);
  }
);

// Definir las funciones para manejar las solicitudes HTTP
export const createPost = async (postData) => {
  try {
    const response = await api.post('/posts', postData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getPost = async (postId) => {
  try {
    const response = await api.get(`/posts/${postId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await api.delete(`/posts/${postId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export default api;