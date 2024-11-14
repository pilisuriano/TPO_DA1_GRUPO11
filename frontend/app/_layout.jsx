import { useFonts } from 'expo-font';
import { Slot, Stack, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useCallback, useState } from 'react';
import 'react-native-reanimated';
import store from '../src/store/store'
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const StackLayout = () => {
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

  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.authenticated);
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

  }, [onLayoutRootView]);

  useEffect(() => {
    if (isSplashReady && fontsLoaded) {
      if (!authenticated) {
        router.replace('/startScreen');
      } else {
        router.replace('/(tabs)/home');
      }
    }
  }, [isSplashReady, fontsLoaded, authenticated, router]);

  if (!isSplashReady || !fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
      <Stack.Screen name="signup/index" options={{ headerShown: false }} />
      <Stack.Screen name="signup/otp" options={{ headerShown: false }} />
      <Stack.Screen name="signup/userInformation" options={{ headerShown: false }} />
      <Stack.Screen name="signup/chooseUser" options={{ headerShown: false }} />
      <Stack.Screen name="signup/welcome" options={{ headerShown: false }} />
      <Stack.Screen name="forgotPassword/index" options={{ headerShown: false }} />
      <Stack.Screen name="forgotPassword/otp" options={{ headerShown: false }} />
      <Stack.Screen name="forgotPassword/resetPassword" options={{ headerShown: false }} />
      <Stack.Screen name="forgotPassword/recovered" options={{ headerShown: false }} />
      <Stack.Screen name="error/internetConnection" options={{ headerShown: false }} />
      <Stack.Screen name="error/server" options={{ headerShown: false }} />
      {/* <Stack.Screen name="screens/login/signingoogle" options={{ headerShown: false }} /> */}
      {authenticated ? (
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="startScreen/index" options={{ headerShown: false }} />
      )}
    </Stack>
  );
}

const RootLayoutNav = () => {
  return (
    <Provider store={store}>
      <StackLayout />
    </Provider>

  )
}

export default RootLayoutNav;