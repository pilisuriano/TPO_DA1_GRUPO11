import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';

const PasswordRecovered = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.recuperada}>
      <View style={styles.recuperadaChild} />
      <Image style={[styles.logo2Icon, styles.logo2IconPosition]} resizeMode="cover" source={require('../../assets/images/Logo 2.png')} />
      <Text style={[styles.cuentaRecuperada, styles.continuarTypo]}>Cuenta recuperada</Text>
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]} onPress={() => navigation.navigate('(tabs)')}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.continuar, styles.continuarTypo]}>Continuar</Text>
      </Pressable>
    </View>);
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0
  },
  logo2IconPosition: {
    top: 229,
    position: "absolute"
  },
  continuarTypo: {
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
  recuperadaChild: {
    top: 819,
    left: 112,
    backgroundColor: "#000",
    width: 165,
    height: 4,
    borderRadius: 10,
    position: "absolute"
  },
  recuperadaItem: {
    left: 103,
    width: 183,
    height: 183
  },
  logo2Icon: {
    borderRadius: 183,
    width: 202,
    height: 194,
    left: 94
  },
  cuentaRecuperada: {
    top: 449,
    fontSize: 20,
    color: "#000",
    left: 94
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
    top: 524,
    left: 34
  },
  recuperada: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden"
  }
});

export default PasswordRecovered;
