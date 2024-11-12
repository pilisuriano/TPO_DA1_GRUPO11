import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';

const ResetPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.passwordReset, styles.iconLayout]}>
      <View style={styles.passwordResetChild} />
      <Text style={[styles.eligeUnaNueva, styles.listoTypo]}>Elige una nueva contraseña</Text>
      <Text style={styles.nuevaContrasea}>Nueva contraseña</Text>
      <Text style={[styles.confirmarNuevaContrasea, styles.aseguraTuCuentaTypo]}>Confirmar nueva contraseña</Text>
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]} onPress={() => navigation.navigate('screens/login/recovered')}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.listo, styles.listoTypo]}>Listo</Text>
      </Pressable>
      <View style={[styles.passwordResetItem, styles.passwordLayout]} />
      <Text style={[styles.text, styles.textTypo]}>**********</Text>
      <Pressable style={[styles.passwordResetInner, styles.passwordLayout]} onPress={() => { }} />
      <Text style={[styles.text1, styles.textTypo]}>**********</Text>
      <Text style={[styles.aseguraTuCuenta, styles.aseguraTuCuentaTypo]}>Asegura tu cuenta</Text>
      <Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('screens/login/loginotp')}>
        <Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source={require('../../assets/images/Arrow---Left-2.png')} />
      </Pressable>
    </View>);
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%"
  },
  groupChildPosition: {
    left: 0,
    top: 0
  },
  listoTypo: {
    textAlign: "left",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    position: "absolute"
  },
  aseguraTuCuentaTypo: {
    width: 211,
    opacity: 0.7,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    textAlign: "left",
    color: "#000",
    left: 34,
    position: "absolute"
  },
  groupChildLayout: {
    height: 49,
    width: 321,
    position: "absolute"
  },
  passwordLayout: {
    backgroundColor: "#f2f2f2",
    height: 49,
    width: 321,
    left: 34,
    borderRadius: 10,
    position: "absolute"
  },
  textTypo: {
    fontFamily: "Roboto-Medium",
    left: 54,
    fontWeight: "500",
    fontSize: 14,
    textAlign: "left",
    color: "#000",
    position: "absolute"
  },
  blackBase21: {
    width: 390,
    height: 41,
    position: "absolute"
  },
  passwordResetChild: {
    top: 822,
    left: 112,
    backgroundColor: "#000",
    width: 165,
    height: 4,
    borderRadius: 10,
    position: "absolute"
  },
  eligeUnaNueva: {
    top: 131,
    fontSize: 20,
    width: 296,
    color: "#000",
    left: 34
  },
  nuevaContrasea: {
    top: 211,
    width: 149,
    opacity: 0.7,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    fontSize: 14,
    textAlign: "left",
    color: "#000",
    left: 34,
    position: "absolute"
  },
  confirmarNuevaContrasea: {
    top: 298,
    fontSize: 14,
    width: 211
  },
  groupChild: {
    backgroundColor: "#bb4426",
    borderRadius: 10,
    left: 0,
    top: 0
  },
  listo: {
    top: 11,
    left: 137,
    fontSize: 18,
    color: "#fff"
  },
  rectangleParent: {
    top: 637,
    left: 34
  },
  passwordResetItem: {
    top: 237,
    borderStyle: "solid",
    borderColor: "#7e5f5b",
    borderWidth: 0.5
  },
  text: {
    top: 253,
    opacity: 0.5
  },
  passwordResetInner: {
    top: 324
  },
  text1: {
    top: 340,
    opacity: 0
  },
  aseguraTuCuenta: {
    top: 166,
    fontSize: 16
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  iconlylightOutlinearrowL: {
    left: "7.2%",
    top: "8.99%",
    right: "90.13%",
    bottom: "88.76%",
    width: "2.67%",
    height: "2.25%",
    position: "absolute"
  },
  yaTienesUna: {
    color: "#000"
  },
  iniciaSesin: {
    color: "#006175"
  },
  text2: {
    width: 261,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    fontSize: 14,
    textAlign: "left"
  },
  yaTienesUnaContainer: {
    left: 63,
    top: 711,
    position: "absolute"
  },
  passwordReset: {
    backgroundColor: "#fff",
    flex: 1,
    height: 844
  }
});

export default ResetPassword;
