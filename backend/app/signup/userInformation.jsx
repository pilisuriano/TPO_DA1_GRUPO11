import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useRouter } from "expo-router";

const UserInformation = () => {
  const router = useRouter()

  return (
    <View style={styles.personalInformation}>
      <View style={[styles.personalInformationChild, styles.childLayout]} />
      <Text style={[styles.informacinPersonal, styles.siguienteTypo]}>Información Personal</Text>
      <Text style={[styles.porFavorComplete, styles.gneroPosition]}>Por favor, complete lo siguiente</Text>
      <Text style={[styles.nombreCompleto, styles.textTypo]}>Nombre completo</Text>
      <Text style={[styles.gnero, styles.textTypo]}>Género</Text>
      <Text style={[styles.sobreMi, styles.textTypo]}>Sobre mi</Text>
      <Pressable style={styles.rectangleParent} onPress={() => router.push('chooseUser')}>
        <View style={[styles.groupChild, styles.childLayout]} />
        <Text style={[styles.siguiente, styles.siguienteTypo]}>Siguiente</Text>
      </Pressable>
      <View style={[styles.personalInformationItem, styles.personalPosition]} />
      <Text style={[styles.martinSuarez, styles.masculinoTypo]}>Martin Suarez</Text>
      <View style={[styles.personalInformationInner, styles.personalPosition]} />
      <View style={[styles.rectangleView, styles.personalPosition]} />
      <Text style={[styles.soyUnaPersona, styles.soyUnaPersonaTypo]}>Soy una persona positiva. Me encanta viajar y probar nuevas comidas.</Text>
      <Image style={[styles.iconlyboldarrowDown2, styles.iconLayout]} resizeMode="cover" source="Iconly/Bold/Arrow---Down-2.png" />
      <Text style={[styles.masculino, styles.masculinoTypo]}>Masculino</Text>
    </View>);
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0
  },
  childLayout: {
    borderRadius: 10,
    position: "absolute"
  },
  siguienteTypo: {
    textAlign: "left",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    position: "absolute"
  },
  gneroPosition: {
    opacity: 0.7,
    color: "#000",
    left: 33,
    position: "absolute"
  },
  textTypo: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    textAlign: "left"
  },
  personalPosition: {
    backgroundColor: "#f2f2f2",
    left: 33,
    borderRadius: 10,
    position: "absolute"
  },
  masculinoTypo: {
    opacity: 0.5,
    fontFamily: "Roboto-Medium",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    color: "#000",
    position: "absolute"
  },
  soyUnaPersonaTypo: {
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    textAlign: "left"
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
  },
  blackBase21: {
    width: 390,
    height: 41,
    position: "absolute"
  },
  personalInformationChild: {
    top: 824,
    backgroundColor: "#000",
    width: 165,
    height: 4,
    left: 118
  },
  informacinPersonal: {
    top: 143,
    fontSize: 20,
    width: 247,
    color: "#000",
    left: 33
  },
  porFavorComplete: {
    top: 178,
    fontSize: 16,
    width: 263,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    textAlign: "left"
  },
  nombreCompleto: {
    top: 223,
    width: 140,
    opacity: 0.7,
    color: "#000",
    left: 33,
    position: "absolute"
  },
  gnero: {
    top: 315,
    width: 57,
    opacity: 0.7,
    color: "#000",
    left: 33,
    position: "absolute"
  },
  sobreMi: {
    top: 406,
    width: 78,
    opacity: 0.7,
    color: "#000",
    left: 33,
    position: "absolute"
  },
  groupChild: {
    backgroundColor: "#bb4426",
    height: 49,
    width: 321,
    left: 0,
    top: 0
  },
  siguiente: {
    top: 11,
    fontSize: 18,
    color: "#fff",
    left: 118
  },
  rectangleParent: {
    top: 649,
    height: 49,
    width: 321,
    left: 33,
    position: "absolute"
  },
  personalInformationItem: {
    top: 249,
    borderStyle: "solid",
    borderColor: "#7e5f5b",
    borderWidth: 0.5,
    height: 49,
    width: 321
  },
  martinSuarez: {
    top: 265,
    left: 48
  },
  personalInformationInner: {
    top: 341,
    width: 131,
    height: 49
  },
  rectangleView: {
    top: 432,
    height: 114,
    width: 321
  },
  soyUnaPersona: {
    top: 448,
    left: 42,
    fontSize: 12,
    width: 317,
    color: "#000",
    position: "absolute"
  },
  iconlyboldarrowDown2: {
    height: "0.98%",
    width: "2.13%",
    top: "44.55%",
    right: "60.33%",
    bottom: "54.47%",
    left: "37.54%",
    position: "absolute"
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%"
  },
  iconlylightOutlinearrowL: {
    left: "7.2%",
    top: "7.64%",
    right: "90.13%",
    bottom: "90.11%",
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
  text: {
    width: 261
  },
  yaTienesUnaContainer: {
    left: 70,
    top: 730,
    position: "absolute"
  },
  masculino: {
    top: 357,
    left: 46
  },
  personalInformation: {
    backgroundColor: "#fff",
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%"
  }
});

export default UserInformation;
