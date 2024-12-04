import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, Pressable, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const StartScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.inicio}>
      <Text style={[styles.conectaConAmigos, styles.comparteFotosYPosition]}>Conecta con amigos y familia</Text>
      <Text style={[styles.comparteFotosY, styles.comparteFotosYPosition]}>Comparte fotos y videos con las personas que quieras, y mira sus publicaciones.</Text>
      <Pressable style={[styles.inicioChild, styles.inicioLayout]} onPress={() => navigation.navigate('screens/register/register')}>
        <Text style={[styles.registrarme, styles.registrarmeTypo]}>Registrarme</Text>
      </Pressable>
      <Pressable style={[styles.inicioItem, styles.inicioLayout]} onPress={() => navigation.navigate('screens/login/login')}>
        <Text style={[styles.iniciarSesin, styles.registrarmeTypo]}>Iniciar Sesión</Text>
      </Pressable>
      <Image style={styles.logo2Icon} resizeMode="cover" source={require('../../assets/images/Logo 2.png')} />
      <Image style={styles.marca2Icon} resizeMode="cover" source={require('../../assets/images/Marca 2.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  comparteFotosYPosition: {
    textAlign: "left",
    color: "#000",
    left: 35,
    position: "absolute"
  },
  //button style
  inicioLayout: {
    height: 49,
    width: 321,
    borderRadius: 10,
    left: 35,
    position: "absolute"
  },
  registrarmeTypo: {
    fontSize: 18,
    textAlign: "left",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    position: "absolute"
  },
  blackBase21: {
    top: 0,
    left: 0,
    width: 390,
    height: 41,
    position: "absolute"
  },
  conectaConAmigos: {
    top: 431,
    fontSize: 20,
    width: 221,
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    color: "#000",
    left: 35
  },
  comparteFotosY: {
    top: 498,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
    width: 293,
    opacity: 0.7,
    color: "#000",
    left: 35
  },
  //button yellow (secundario)
  inicioChild: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: 617,
    backgroundColor: "#fde6b2"
  },
  registrarme: {
    //top: 627,
    //left: 142,
    color: "#7e5f5b"
  },
  //button orange (primary) -> revisar top
  inicioItem: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: 685,
    backgroundColor: "#bb4426",
    borderStyle: "solid",
    borderColor: "#bb4426",
    borderWidth: 1
  },
  // texto dentro de button
  iniciarSesin: {
    // top: 696,
    // left: 138,
    color: "#fff"
  },
  inicioInner: {
    top: (height - 14),
    left: (width - 165) / 2,
    backgroundColor: "#000",
    width: 165,
    height: 4,
    borderRadius: 10,
    position: "absolute"
  },
  logo2Icon: {
    top: 198,
    left: (width - 202) / 2,
    borderRadius: 183,
    width: 202,
    height: 194,
    position: "absolute"
  },
  marca2Icon: {
    top: 100,
    left: (width - 291) / 2,
    width: 291,
    height: 54,
    position: "absolute"
  },
  inicio: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden"
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 18,
    color: '#000',
  }
});

export default StartScreen;