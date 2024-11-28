import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable, Platform, StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Toolbar from "@/components/Toolbar";
import Icon from 'react-native-vector-icons/MaterialIcons';
import InfoMessage from "@/components/InfoMessage";

const MYPROFILE = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myProfile}>
      <Toolbar title="Post" />
      <InfoMessage message="Próximamente podrás ver tu perfil y personalizar tu cuenta." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    margin: 20,
    backgroundColor: '#e0f7fa', // Color de fondo tipo "información"
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#26c6da', // Color de borde
  },
  icon: {
    marginRight: 10
  },
  message: {
    fontSize: 16,
    color: '#004d40', // Color del texto
    flexShrink: 1, // Ajusta el texto en caso de desbordar
  },
  myProfile: {
    // backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 35,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 30 : 30,
    backgroundColor: "#F9F9F9",
  }
});

export default MYPROFILE;
