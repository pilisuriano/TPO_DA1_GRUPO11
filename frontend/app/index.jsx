import React, { useContext, useEffect, useState } from 'react';
import { Slot, useRouter } from 'expo-router';
import { useSelector } from 'react-redux';

export default function AppEntry() {
  const router = useRouter();
  const authenticated = useSelector((state) => state.auth.authenticated);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (authenticated !== undefined) {
      setIsInitialized(true);
    }
  }, [authenticated]);

  useEffect(() => {
    if (isInitialized) {
      if (authenticated) {
        router.replace('/(tabs)/home');
      } else {
        router.replace('/startScreen');
      }
    }
  }, [isInitialized, authenticated]);

  return null;
}