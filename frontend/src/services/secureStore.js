import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

export const saveAuthToken = async (token) => {
    if (token) {
        await SecureStore.setItemAsync('authToken', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
};

export const getAuthToken = async () => {
    await SecureStore.getItemAsync('authToken');
};

export const deleteAuthToken = async (token) => {
    if (token) {
        await SecureStore.deleteItemAsync('authToken');
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const saveItem = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
};

export const getItem = async (key) => {
    return await SecureStore.getItemAsync(key);
};

export const deleteItem = async (key) => {
    await SecureStore.deleteItemAsync(key);
};
