import React, { useEffect, useContext } from 'react';
import { useColorScheme } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import i18n from '../frontend/i18n';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import StartScreen from './app/screens/StartScreen'; // Asegúrate de que la ruta sea correcta
import store from './src/store/store'
import { CustomDefaultTheme, CustomDarkTheme } from './src/themes'; // Importar los temas personalizados
import { ThemeProvider, ThemeContext } from './src/context/ThemeContext'; // Importar el contexto de tema

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const { isDarkMode } = useContext(ThemeContext); // Usa useContext para obtener isDarkMode

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}> {/* Wrap your app with the Provider and pass the store */}
        <ThemeProvider>
        <ThemeContext.Consumer>
          {({ isDarkMode }) => (
            <NavigationContainer theme={isDarkMode ? CustomDarkTheme : CustomDefaultTheme}>
                <Stack.Navigator>
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
                {authenticated ? (
                  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                ) : null}
                </Stack.Navigator>
              </NavigationContainer>
              )}
            </ThemeContext.Consumer>
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  );
}