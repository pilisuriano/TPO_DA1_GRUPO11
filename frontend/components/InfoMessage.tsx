import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable, Platform, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const InfoMessage = ({message=''}) => {

  return (
    <View style={styles.container}>
      <Icon name="info" size={24} color="#00796b" style={styles.icon} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    margin: 20,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#26c6da',
  },
  icon: {
    marginRight: 10
  },
  message: {
    fontSize: 16,
    color: '#004d40', // Color del texto
    flexShrink: 1, // Ajusta el texto en caso de desbordar
  }
});

export default InfoMessage;