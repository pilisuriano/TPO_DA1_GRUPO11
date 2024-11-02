import { useFonts } from 'expo-font';
import { Slot, Stack, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useCallback, useState } from 'react';
import 'react-native-reanimated';
import store from '../src/store/store'
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AuthProvider, useAuth } from '@/src/features/auths/AuthProvider';
import { Provider } from 'react-redux';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const StackLayout = () => {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    'SpaceMono': require('../assets/fonts/SpaceMono-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
  });

  const [isSplashReady, setSplashReady] = useState(false);

  const { authenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter()

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      setSplashReady(true);
    }
  }, [fontsLoaded]);

  useEffect(() => {
    setTimeout(() => {
      onLayoutRootView();
    }, 200); // Mantener la pantalla de carga visible por al menos 1.5 segundos

    const inAuthGroup = segments[0] === '(tabs)';

    if (!authenticated && inAuthGroup) {
      router.replace('/')
    } else if (authenticated === true) {
      router.replace('/(tabs)/home')
    }

  }, [onLayoutRootView, authenticated]);

  if (!isSplashReady) {
    return <Slot />; // Mantener la pantalla de carga visible
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="screens/login/login" options={{ headerShown: false }} />
      <Stack.Screen name="screens/login/forgotpass" options={{ headerShown: false }} />
      <Stack.Screen name="screens/login/passreset" options={{ headerShown: false }} />
      <Stack.Screen name="screens/login/recovered" options={{ headerShown: false }} />
      <Stack.Screen name="screens/login/signingoogle" options={{ headerShown: false }} />
      <Stack.Screen name="screens/register/chooseuser" options={{ headerShown: false }} />
      <Stack.Screen name="screens/register/otp" options={{ headerShown: false }} />
      <Stack.Screen name="screens/register/personalinfo" options={{ headerShown: false }} />
      <Stack.Screen name="screens/register/register" options={{ headerShown: false }} />
      <Stack.Screen name="screens/register/welcome" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

const RootLayoutNav = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <StackLayout />
      </AuthProvider>
    </Provider>

  )
}

export default RootLayoutNav;
//<Stack.Screen name="(tabs)" options={{ headerShown: false }} />

/*return (
  <Stack
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="index" options={{ headerShown: false }} />
    {/* Aquí puedes añadir más pantallas *//*
</Stack>
);*/

/*<Stack.Screen name="Login" component={Login} />*/