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
    // if (config.data instanceof FormData) {
    //   config.headers['Content-Type'] = 'multipart/form-data';
    // }
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

// export const createPost = async (formData) => {
//   try {
//     const token = await getAuthToken(); // Use getAuthToken to get the token

//     const config = {
//       headers: {
//         'Authorization': `Bearer ${token}`,
//         //'Content-Type': 'multipart/form-data'
//       }
//     };
    
//     const response = await api.post('/posts', formData, config);
//     return response.data;
//   } catch (error) {
//     console.error("Error during post request:", error);
//   }
// };

export default api;