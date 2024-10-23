import * as React from "react";
import {Image, StyleSheet, View, Text, Pressable} from "react-native";

const SIGNUP = () => {
  	
  	return (
    		<View style={[styles.signUp, styles.iconLayout]}>
      			<View style={styles.signUpChild} />
      			<Text style={[styles.ingreseSuCorreo, styles.listoTypo]}>Ingrese su correo electrónico</Text>
      			<Text style={[styles.correoElectrnico, styles.paraComenzarLaTypo]}>Correo electrónico</Text>
      			<Pressable style={[styles.rectangleParent, styles.groupChildLayout]} onPress={()=>{}}>
        				<View style={[styles.groupChild, styles.groupChildLayout]} />
        				<Text style={[styles.listo, styles.listoTypo]}>Listo</Text>
      			</Pressable>
      			<View style={[styles.signUpItem, styles.groupChildLayout]} />
      			<Text style={styles.martinsuarezhotmailcom}>martinsuarez@hotmail.com</Text>
      			<Text style={[styles.paraComenzarLa, styles.paraComenzarLaTypo]}>Para comenzar la creación de tu cuenta necesitamos tu correo</Text>
      			<Pressable style={styles.iconlylightOutlinearrowL} onPress={()=>{}}>
        				<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source="Iconly/Light-Outline/Arrow---Left-2.png" />
      			</Pressable>
      			<Pressable style={styles.yaTienesUnaContainer} onPress={()=>{}}>
        				<Text style={[styles.text, styles.textTypo]}>
          					<Text style={styles.yaTienesUna}>{`¿Ya tienes una cuenta? `}</Text>
          					<Text style={styles.iniciaSesin}>Inicia Sesión</Text>
        				</Text>
      			</Pressable>
      			<Pressable style={styles.registrateConGoogleContainer} onPress={()=>{}}>
        				<Text style={[styles.registrateConGoogle, styles.textTypo]}>Registrate con Google</Text>
      			</Pressable>
      			<Image style={styles.image41Icon} resizeMode="cover" source="image 41.png" />
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
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		textAlign: "left",
    		position: "absolute"
  	},
  	paraComenzarLaTypo: {
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
  	textTypo: {
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500"
  	},
  	blackBase21: {
    		width: 390,
    		height: 41,
    		position: "absolute"
  	},
  	signUpChild: {
    		top: 826,
    		left: 106,
    		backgroundColor: "#000",
    		width: 165,
    		height: 4,
    		borderRadius: 10,
    		position: "absolute"
  	},
  	ingreseSuCorreo: {
    		top: 146,
    		fontSize: 20,
    		width: 310,
    		textAlign: "left",
    		color: "#000",
    		left: 38
  	},
  	correoElectrnico: {
    		top: 263,
    		width: 137,
    		fontSize: 14
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
    		fontSize: 18,
    		textAlign: "left"
  	},
  	rectangleParent: {
    		top: 653,
    		left: 38
  	},
  	signUpItem: {
    		top: 289,
    		backgroundColor: "#f2f2f2",
    		left: 38,
    		borderRadius: 10
  	},
  	martinsuarezhotmailcom: {
    		top: 305,
    		left: 57,
    		fontFamily: "Roboto-Medium",
    		color: "#1a1a1a",
    		opacity: 0.5,
    		fontWeight: "500",
    		fontSize: 14,
    		textAlign: "left",
    		position: "absolute"
  	},
  	paraComenzarLa: {
    		top: 181,
    		fontSize: 16,
    		width: 348
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
    		fontSize: 14,
    		textAlign: "left"
  	},
  	yaTienesUnaContainer: {
    		left: 66,
    		top: 729,
    		position: "absolute"
  	},
  	registrateConGoogle: {
    		textAlign: "center",
    		width: 224,
    		color: "#006175",
    		fontSize: 18
  	},
  	registrateConGoogleContainer: {
    		left: 71,
    		top: 372,
    		position: "absolute"
  	},
  	image41Icon: {
    		top: 375,
    		left: 295,
    		width: 20,
    		height: 20,
    		position: "absolute"
  	},
  	signUp: {
    		backgroundColor: "#fff",
    		flex: 1,
    		height: 844
  	}
});

export default SIGNUP;
