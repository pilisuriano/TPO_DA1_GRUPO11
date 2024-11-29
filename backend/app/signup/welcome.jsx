import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useRouter } from "expo-router";

const WELCOME = () => {
  // revisar navegacion, hacer login o navegar directo?
  const router = useRouter()
  return (
    <View style={styles.welcome}>
      <View style={styles.welcomeChild} />
      <Image style={styles.logo2Icon} resizeMode="cover" source={require('../../assets/images/Logo 2.png')} />
      <Text style={[styles.teDamosLa, styles.teDamosLaTypo]}>¡Te damos la bienvenida!</Text>
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]} onPress={() => router.replace('(tabs)/home')}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.continuar, styles.teDamosLaTypo]}>Continuar</Text>
      </Pressable>
    </View>);
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0
  },
  teDamosLaTypo: {
    textAlign: "left",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    position: "absolute"
  },
  groupChildLayout: {
    height: 49,
    width: 321,
    position: "absolute"
  },
  blackBase21: {
    width: 390,
    height: 41,
    position: "absolute"
  },
  welcomeChild: {
    top: 823,
    left: 113,
    backgroundColor: "#000",
    width: 165,
    height: 4,
    borderRadius: 10,
    position: "absolute"
  },
  welcomeItem: {
    top: 233,
    left: 104,
    width: 183,
    height: 183,
    position: "absolute"
  },
  logo2Icon: {
    top: 232,
    left: 94,
    borderRadius: 183,
    width: 202,
    height: 194,
    position: "absolute"
  },
  teDamosLa: {
    top: 490,
    left: 69,
    fontSize: 20,
    color: "#000"
  },
  groupChild: {
    backgroundColor: "#bb4426",
    borderRadius: 10,
    left: 0,
    top: 0
  },
  continuar: {
    top: 11,
    left: 114,
    fontSize: 18,
    color: "#fff"
  },
  rectangleParent: {
    top: 564,
    left: 34
  },
  welcome: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden"
  }
});

export default WELCOME;
