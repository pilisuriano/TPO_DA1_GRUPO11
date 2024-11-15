import axios from 'axios';
import api from '../../services/api.js';
import { getAuthToken } from '../../services/secureStore.js';

export const createPost = async (data) => {
  try {
    const response = await api.post('/posts', data);
    return response;
  } catch (error) {
    throw error.response;
  }
};

export const getPost = async (data) => {
  try {
    const response = await api.get(``, data);
    return response;
  } catch (error) {
    throw error.response;
  }
};

// export const createPost = async (formData) => {
//   try {
//     const response = await api.post('/posts', formData {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     });
//   });
//   return response.data;
// } catch (error) {
//   console.error("Error:", error);
//   if (error.response) {
//     console.error("Error Response Data:", error.response.data);
//   } else {
//     console.error("Network error or other issue");
//   }
//   throw error.response ? error.response.data : new Error("Network error");
// }
// };
/*try {
  const response = await api.post('/posts', formData, {
    /*headers: {
      'Content-Type': 'multipart/form-data'
    }*/
/*});
return response.data;
} catch (error) {
console.error("Error during post request:", error);

if (error.response) {
  // Error de respuesta del servidor (por ejemplo, error 400 o 500)
  console.error("Error Response Status:", error.response.status);
  console.error("Error Response Data:", error.response.data);
  throw new Error(`Server responded with status ${error.response.status}: ${error.response.data}`);
} else if (error.request) {
  // La solicitud fue enviada pero no hubo respuesta
  console.error("No response received:", error.request);
  throw new Error("Network error: No response received from server");
} else {
  // Algo sucedió al preparar la solicitud que desencadenó un error
  console.error("Error setting up request:", error.message);
  throw new Error(`Request error: ${error.message}`);
}
}}*/

/*export const createPost = async (formData) => {
  try {
    const token = await getAuthToken(); // Use getAuthToken to get the token

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
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
};*/


/*export const createPost = async (formData) => {
  const token = await getAuthToken(); // Use getAuthToken to get the token

  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  };

  return await axios.post('/posts', formData, config);
};*/

/*export const getPost = async (postId) => {
  try {
    const response = await api.get(`/posts/${postId}`);
    return response.data;
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

export const deletePost = async (postId) => {
  try {
    const response = await api.delete(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    if (error.response) {
      console.error("Error Response Data:", error.response.data);
    } else {
      console.error("Network error or other issue");
    }
    throw error.response ? error.response.data : new Error("Network error");
  }
};*/