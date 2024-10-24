import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useCallback, useState } from 'react';
import 'react-native-reanimated';
import {Tabs} from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function TabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Perfil"
        component={Perfil}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    'SpaceMono': require('../assets/fonts/SpaceMono-Regular.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
  });

  const [isSplashReady, setSplashReady] = useState(false);

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

  if (!isSplashReady) {
    return null; // Mantener la pantalla de carga visible
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
        <Stack.Screen name="screens/search" options={{ headerShown: false }} />
    </Stack>
  );
}
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