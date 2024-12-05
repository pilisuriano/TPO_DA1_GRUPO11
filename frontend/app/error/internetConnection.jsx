import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useTranslation } from 'react-i18next';

export default function InternetConnectionError() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <LottieView 
        source={require('../../assets/noConnection.json')} 
        autoPlay 
        loop 
        style={styles.animation} 
      />
      <Text style={styles.text}>{t('noInternet')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Cambia según tu tema
  },
  animation: {
    width: 200,
    height: 200,
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});
