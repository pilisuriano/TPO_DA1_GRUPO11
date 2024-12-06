import React, { useContext, useEffect, useState } from 'react';
import { Slot, useRouter } from 'expo-router';
import { getAuthToken } from '@/src/services/secureStore';

export default function AppEntry() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await getAuthToken();
        if (token) {
          // Redirige a Home si hay un token
          router.replace('/(tabs)/home');
        } else {
          // Redirige a Login si no hay token
          router.replace('/startScreen');
        }
      } catch (error) {
        console.error('Error fetching token:', error);
        router.replace('/startScreen');
      }
    };

    checkAuth();
  }, []);

  return null;
}