import axios from 'axios';
import { getAuthToken } from './secureStore';

const api = axios.create({
  baseURL: 'https://tpo-da1-grupo11.onrender.com',
  /*headers: {
    'Content-Type': 'application/json',
  },*/
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

export const createPost = async (formData) => {
  try {
    const token = await getAuthToken(); // Use getAuthToken to get the token

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        //'Content-Type': 'multipart/form-data'
      }
    };
    
    const response = await api.post('/posts', formData, config);
    return response.data;
  } catch (error) {
    console.error("Error during post request:", error);

    if (error.response) {
      // Error de respuesta del servidor (por ejemplo, error 400 o 500)
      console.error("Error Response Status:", error.response.status);
      console.error("Error Response Data:", error.response.data);
      throw new Error(`Server responded with status ${error.response.status}: ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      // La solicitud fue enviada pero no hubo respuesta
      console.error("No response received:", error.request);
      throw new Error("Network error: No response received from server");
    } else {
      // Algo sucedió al preparar la solicitud que desencadenó un error
      console.error("Error setting up request:", error.message);
      throw new Error(`Request error: ${error.message}`);
    }
  }
};

export const getUserPosts = async () => {
  try {
    console.log('Iniciando solicitud para obtener publicaciones del usuario');
    const response = await api.get('/posts/user');
    console.log('Respuesta recibida:', response);

    // Comprobación de respuesta vacía
    if (!response.data || response.data.length === 0) {
      throw new Error("No posts found for the user.");
    }
    return response.data;
  } catch (error) {
    if (error.response) {
      // Error de respuesta del servidor (por ejemplo, error 400 o 500)
      console.error("Error Response Status:", error.response.status);
      console.error("Error Response Data:", error.response.data);
      throw new Error(`Server responded with status ${error.response.status}: ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      // La solicitud fue enviada pero no hubo respuesta
      console.error("No response received:", error.request);
      throw new Error("Network error: No response received from server");
    } else {
      // Algo sucedió al preparar la solicitud que desencadenó un error
      console.error("Error setting up request:", error.message);
      throw new Error(`Request error: ${error.message}`);
    }
  }
};

export default api;