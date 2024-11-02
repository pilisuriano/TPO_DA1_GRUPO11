import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import StartScreen from "./screens/startScreen";

export default function AppEntry() {
  return (
    <StartScreen></StartScreen>
  );
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
function MainNavigator() {
  const { authenticated } = useAuth();
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    if (authenticated !== null) {
      SplashScreen.hideAsync();
    }
  }, [authenticated]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authenticated ? (
          <>
            {/* Pantallas protegidas */}
            <Stack.Screen name="(tabs)" />
            {/* <Stack.Screen name="(tabs)/Profile" /> */}
          </>
        ) : (
          <>
            {/* Pantallas públicas */}
            {/* <Stack.Screen name="screens/login" />
            <Stack.Screen name="screens/startScreen" /> */}
            <Stack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={SIGNIN} options={{ headerShown: false }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}