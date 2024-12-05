import React, { useEffect, useState } from 'react';
import { Button, Text } from 'react-native';
import { useAuthRequest, makeRedirectUri } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';

const isDevelopment = __DEV__;  // Verifica si estás en modo desarrollo
// Redirección dinámica en Expo para desarrollo
const redirectUri = 'https://tpo-da1-grupo11.onrender.com/auth/google/callback';

console.log('Redirect URI:', redirectUri);  // Verifica la URL generada

const GoogleSignInButton = () => {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '325203365525-m1ombko59o0m3uaqpspl3otiquoddm0v.apps.googleusercontent.com',
      redirectUri: redirectUri,
      scopes: [
        'openid', // Requerido para la autenticación
        'https://www.googleapis.com/auth/userinfo.email', // Permite obtener el correo
        'https://www.googleapis.com/auth/userinfo.profile', // Permite obtener el perfil
      ],
    },
    Google.discovery // Usamos el discovery document de Google
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      console.log('Google ID Token:', id_token);
      // Usa el id_token para autenticar al usuario
    } else if (response?.type === 'error') {
      console.log('Error en la autenticación:', response.error);
    }
  }, [response]);

  return (
    <>
      <Button
        title="Sign in with Google"
        onPress={() => promptAsync()} // Disparar la solicitud de autenticación
      />
      {response?.type === 'error' && (
        <Text>Error: {response?.error?.message || response?.error?.code}</Text>
      )}
    </>
  );
};

export default GoogleSignInButton;