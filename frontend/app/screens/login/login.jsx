import * as React from "react";
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, View, Text, Pressable, TextInput, Alert } from "react-native";
import { useAuth } from '../../../src/features/auths/AuthProvider';
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetError } from "../../../src/features/auths/authSlice";
import { useRouter } from "expo-router"

const Login = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const dispatch = useDispatch()
  const { login, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      dispatch(resetError())
      const res = await login({ email, password });
      if (res.authenticated) {
        // router.replace("/(tabs)/home")
        // navigation.reset({
        //   index: 0,
        //   routes: [{ name: '(tabs)/home'}]
        // })
        navigation.dispatch(CommonActions.reset({
          routes: [{ name: '(tabs)/home' }]
        }))
      }
    } catch (err) {
      console.error("Error during login:", err);
      Alert.alert("Error", "Could not log in. Please try again.");
    }
  };

  // useEffect(() => {
  //   if (error && !loading) {
  //     Alert.alert("Error", error); // Mostrar pantalla generica de error, diferenciar conexion de error 500, 400, etc
  //   }
  // }, [error]);

  return (
    <View style={[styles.signIn, styles.iconLayout]}>
      <Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('index')}>
        <Image style={styles.icon} resizeMode="cover" source={require('../../../assets/images/Arrow---Left-2.png')} />
      </Pressable>
      {/* <View style={styles.signInChild} /> */}
      <Text style={[styles.iniciaSesin, styles.listoTypo1]} >Inicia sesión</Text>
      <Text style={[styles.correoElectrnico, styles.contraseaTypo]}>Correo electrónico</Text>
      <Text style={[styles.contrasea, styles.contraseaTypo]}>Contraseña</Text>
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]} onPress={handleLogin}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.listo, styles.listoTypo]}>Listo</Text>
      </Pressable>
      <View style={[styles.signInItem, styles.signLayout]} />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={[styles.martinsuarezhotmailcom, styles.textTypo]} />
      <View style={[styles.signInInner, styles.signLayout]} />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={[styles.text, styles.textTypo]} />
      <Text style={[styles.ingresaTusCredenciales, styles.contraseaTypo]}>Ingresa tus credenciales</Text>
      <Pressable style={styles.olvidSuContraseaContainer} onPress={() => navigation.navigate('screens/login/forgotpass')}>
        <Text style={[styles.olvidSuContrasea, styles.contraseaTypo]}>¿Olvidó su contraseña?</Text>
      </Pressable>
      
      <Pressable style={styles.iniciaSesinConGoogleParent} onPress={() => { }}>
      {/* {error && <Text style={[styles.iniciaSesinCon, styles.listoTypo]}>{error}</Text>} */}
        {/* <Text style={[styles.iniciaSesinCon, styles.listoTypo]}>Inicia Sesión con Google</Text> */}
        <Image style={styles.image41Icon} resizeMode="cover" source="image 41.png" />
      </Pressable>
      <Pressable style={styles.noTienesUnaContainer} onPress={() => navigation.navigate("screens/register/register")}>
        <Text style={[styles.text1, styles.text1Typo]}>
          <Text style={styles.noTienesUna}>{`¿No tienes una cuenta? `}</Text>
          <Text style={styles.regstrate}>Regístrate</Text>
        </Text>
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
  listoTypo1: {
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    textAlign: "left"
  },
  contraseaTypo: {
    opacity: 0.7,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    textAlign: "left",
    color: "#000"
  },
  groupChildLayout: {
    height: 49,
    width: 321,
    position: "absolute"
  },
  listoTypo: {
    fontSize: 18,
    position: "absolute"
  },
  signLayout: {
    backgroundColor: "#f2f2f2",
    height: 49,
    width: 321,
    left: 34,
    borderRadius: 10,
    position: "absolute"
  },
  textTypo: {
    opacity: 0.5,
    fontFamily: "Roboto-Medium",
    left: 50,
    fontWeight: "500",
    fontSize: 14,
    textAlign: "left",
    position: "absolute"
  },
  text1Typo: {
    width: 261,
    fontFamily: "Poppins-Medium",
    fontWeight: "500"
  },
  blackBase21: {
    width: 390,
    height: 41,
    position: "absolute"
  },
  signInChild: {
    top: 822,
    left: 113,
    backgroundColor: "#000",
    width: 165,
    height: 4,
    borderRadius: 10,
    position: "absolute"
  },
  iniciaSesin: {
    top: 130,
    fontSize: 20,
    width: 215,
    textAlign: "left",
    color: "#000",
    left: 34,
    position: "absolute"
  },
  correoElectrnico: {
    top: 210,
    width: 137,
    fontSize: 14,
    left: 34,
    position: "absolute"
  },
  contrasea: {
    top: 297,
    width: 102,
    fontSize: 14,
    left: 34,
    position: "absolute"
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
    color: "#fff",
    textAlign: "left",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600"
  },
  rectangleParent: {
    top: 636,
    left: 34
  },
  signInItem: {
    top: 236,
    borderStyle: "solid",
    borderColor: "#7e5f5b",
    borderWidth: 0.5
  },
  martinsuarezhotmailcom: {
    top: 245,
    color: "#1a1a1a"
  },
  signInInner: {
    top: 323
  },
  text: {
    top: 339,
    color: "#000"
  },
  ingresaTusCredenciales: {
    top: 165,
    fontSize: 16,
    width: 202,
    left: 34,
    position: "absolute"
  },
  olvidSuContrasea: {
    width: 173,
    fontSize: 14
  },
  olvidSuContraseaContainer: {
    left: 183,
    top: 384,
    position: "absolute"
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
  iniciaSesinCon: {
    textAlign: "center",
    color: "#006175",
    fontSize: 18,
    position: "absolute",
    left: 0,
    top: 0
  },
  image41Icon: {
    top: 3,
    left: 251,
    width: 20,
    height: 20,
    position: "absolute"
  },
  iniciaSesinConGoogleParent: {
    top: 447,
    width: 271,
    height: 27,
    left: 53,
    position: "absolute"
  },
  noTienesUna: {
    color: "#000"
  },
  regstrate: {
    color: "#006175"
  },
  text1: {
    fontSize: 14,
    textAlign: "left"
  },
  noTienesUnaContainer: {
    left: 73,
    top: 706,
    position: "absolute"
  },
  signIn: {
    backgroundColor: "#fff",
    flex: 1,
    height: 844
  }
});

export default Login;
