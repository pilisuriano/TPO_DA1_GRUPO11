import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Button({ text = '', isButtonEnabled = true, type = 'primary', onPress = () => { } }) {

  const getButtonStyle = () => {
    switch (type) {
      case 'primary':
        return styles.primaryButton;
      case 'secondary':
        return styles.secondaryButton;
      case 'third':
        return styles.thirdButton;
      default:
        return styles.defaultButton;
    }
  };

  const getTextStyle = () => {
    switch (type) {
      case 'primary':
        return styles.primaryText;
      case 'secondary':
        return styles.secondaryText;
      case 'third':
        return styles.thirdText;
      default:
        return styles.defaultText;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.buttonStyle, getButtonStyle(), { opacity: isButtonEnabled ? 1 : 0.6 }]}
      disabled={!isButtonEnabled}
      onPress={onPress}>
      <Text style={[styles.buttonText, getTextStyle()]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 16,
    alignItems: 'center',
  },
  // Estilos para los diferentes tipos
  primaryButton: {
    backgroundColor: '#B5432A',
  },
  secondaryButton: {
    backgroundColor: '#FDE6B2',
  },
  thirdButton: {
    backgroundColor: '#006175',
  },
  defaultButton: {
    backgroundColor: '#B5432A',
  },
  // Estilos para el texto
  buttonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#7E5F5B',
  },
  thirdText: {
    color: '#FFFFFF',
  },
  defaultText: {
    color: '#FFFFFF',
  },
});
