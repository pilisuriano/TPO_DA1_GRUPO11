import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const CustomSplashScreen = () => {
  useEffect(() => {
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync();
    };

    setTimeout(hideSplashScreen, 3000); // Ocultar el splash screen después de 3 segundos
  }, []);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomSplashScreen;