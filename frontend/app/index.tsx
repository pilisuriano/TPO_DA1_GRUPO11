import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a mi Aplicación</Text>
      <Text style={styles.subtitle}>Esta es la página de inicio</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
  },
});

export default StartScreen;