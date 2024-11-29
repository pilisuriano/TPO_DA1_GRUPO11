import api from '../../services/api.js';

export const getInitialTimeline = async () => {
  try {
    const response = await api.get('/timeline', { params: { limit: 10, page: 1 } });
    return response;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network error");
  }
};

export const getNewerPosts = async (data) => {
  try {
    const response = await api.get('/timeline', { params: { limit: 10, after_timestamp: data.after_timestamp, after_postId: data.after_postId } });
    return response;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network error");
  }
};

export const getOlderPosts = async (before_timestamp) => {
  try {
    const response = await api.get('/timeline', { params: { limit: 10, before_timestamp } });
    return response;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network error");
  }
};