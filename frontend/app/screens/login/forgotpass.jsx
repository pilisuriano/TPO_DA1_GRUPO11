import * as React from "react";
import {Image, StyleSheet, View, Text, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';

const FORGOTPASSWORD = () => {
	const navigation = useNavigation();
  	return (
    		<View style={[styles.forgotPassword, styles.iconLayout]}>
      			<View style={styles.forgotPasswordChild} />
      			<Text style={[styles.olvidoDeContrasea, styles.enviarTypo]}>Olvido de contraseña</Text>
      			<Text style={[styles.correoElectrnico, styles.teAyudaremosATypo]}>Correo electrónico</Text>
      			<Pressable style={[styles.rectangleParent, styles.groupChildLayout]} onPress={() => navigation.navigate('screens/login/loginotp')}>
        				<View style={[styles.groupChild, styles.groupChildLayout]} />
        				<Text style={[styles.enviar, styles.enviarTypo]}>Enviar</Text>
      			</Pressable>
      			<View style={[styles.forgotPasswordItem, styles.groupChildLayout]} />
      			<Text style={styles.martinsuarezhotmailcom}>martinsuarez@hotmail.com</Text>
      			<Text style={[styles.teAyudaremosA, styles.teAyudaremosATypo]}>Te ayudaremos a recuperar tu cuenta</Text>
      			<Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('screens/login/login')}>
        				<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source={require('../../../assets/images/Arrow---Left-2.png')} />
      			</Pressable>
      			<Pressable style={styles.yaTienesUnaContainer} onPress={() => navigation.navigate('screens/login/login')}>
        				<Text style={styles.text}>
          					<Text style={styles.yaTienesUna}>{`¿Ya tienes una cuenta? `}</Text>
          					<Text style={styles.iniciaSesin}>Inicia Sesión</Text>
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
  	enviarTypo: {
    		textAlign: "left",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		position: "absolute"
  	},
  	teAyudaremosATypo: {
    		opacity: 0.7,
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		textAlign: "left",
    		color: "#000",
    		left: 38,
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
  	forgotPasswordChild: {
    		top: 819,
    		left: 116,
    		backgroundColor: "#000",
    		width: 165,
    		height: 4,
    		borderRadius: 10,
    		position: "absolute"
  	},
  	olvidoDeContrasea: {
    		top: 128,
    		fontSize: 20,
    		width: 243,
    		color: "#000",
    		left: 38
  	},
  	correoElectrnico: {
    		top: 219,
    		width: 137,
    		fontSize: 14,
    		opacity: 0.7
  	},
  	groupChild: {
    		backgroundColor: "#bb4426",
    		borderRadius: 10,
    		left: 0,
    		top: 0
  	},
  	enviar: {
    		top: 11,
    		left: 132,
    		fontSize: 18,
    		color: "#fff"
  	},
  	rectangleParent: {
    		top: 635,
    		left: 38
  	},
  	forgotPasswordItem: {
    		top: 245,
    		backgroundColor: "#f2f2f2",
    		left: 38,
    		borderRadius: 10
  	},
  	martinsuarezhotmailcom: {
    		top: 261,
    		left: 53,
    		fontFamily: "Roboto-Medium",
    		color: "#1a1a1a",
    		opacity: 0.5,
    		fontWeight: "500",
    		fontSize: 14,
    		textAlign: "left",
    		position: "absolute"
  	},
  	teAyudaremosA: {
    		top: 163,
    		fontSize: 16,
    		width: 310
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
  	text: {
    		width: 261,
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		fontSize: 14,
    		textAlign: "left"
  	},
  	yaTienesUnaContainer: {
    		left: 66,
    		top: 711,
    		position: "absolute"
  	},
  	forgotPassword: {
    		backgroundColor: "#fff",
    		flex: 1,
    		height: 844
  	}
});

export default FORGOTPASSWORD;
