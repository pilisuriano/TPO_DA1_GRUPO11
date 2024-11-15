import api from '../../services/api.js';

export const createPost = async (data) => {
  try {
    const response = await api.post('/posts', data);
    return response;
  } catch (error) {
    console.log("create post error: ", JSON.stringify(error))
    throw error.response;
  }
};

export const getPost = async (data) => {
  try {
    const response = await api.get('/posts', data);
    return response;
  } catch (error) {
    throw error.response;
  }
};
