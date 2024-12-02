import api from '../../services/api.js';

export const searchUsers = async (name) => {
    try {
      const response = await api.get(`/users/?name=${name}`);
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