import api from '../../services/api.js';

export const getInitialTimeline = async () => {
  try {
    const response = await api.get('/timeline', { params: { limit: 10, page: 1 } });
    return response;
  } catch (error) {
    console.log(JSON.stringify(error))
    throw error.response ? error.response.data : new Error("Network error");
  }
};

export const getNewerPosts = async (after_timestamp) => {
  try {
    const response = await api.get('/timeline', { params: { limit: 10, after_timestamp } });
    return response;
  } catch (error) {
    console.log(JSON.stringify(error))
    throw error.response ? error.response.data : new Error("Network error");
  }
};

export const getOlderPosts = async (before_timestamp) => {
  try {
    const response = await api.get('/timeline', { params: { limit: 10, before_timestamp } });
    return response;
  } catch (error) {
    console.log(JSON.stringify(error))
    throw error.response ? error.response.data : new Error("Network error");
  }
};