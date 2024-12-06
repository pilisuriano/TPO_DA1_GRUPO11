import api from '../../services/api.js';

export const getUserProfile = async () => {
    try {
      console.log('Iniciando solicitud para obtener el perfil del usuario');
      const response = await api.get('/users/me');
      console.log('Respuesta recibida:', response);
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

  export const getAnotherUserProfile = async (userId) => {
    try {
      console.log('Iniciando solicitud para obtener el perfil del usuario');
      const response = await api.get(`/users/${userId}`);
      console.log('Respuesta recibida:', response.data);
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

  export const updateUser = async (userData) => {
    try {
      const response = await api.put(`/users/me`, userData);
      return response.data;
    } catch (error) {
      console.error('Error in updateUser:', error);
      throw error;
    }
  };
  
  export default api;