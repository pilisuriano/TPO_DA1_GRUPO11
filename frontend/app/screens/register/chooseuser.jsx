import * as React from "react";
import {Image, StyleSheet, View, Text, Pressable} from "react-native";

const PERSONALINFORMATION2 = () => {
  	
  	return (
    		<View style={[styles.personalInformation, styles.iconLayout]}>
      			<View style={styles.personalInformationChild} />
      			<Text style={[styles.eligeUnUsuario, styles.listoTypo]}>Elige un usuario</Text>
      			<Text style={[styles.usuario, styles.contraseaTypo]}>Usuario</Text>
      			<Text style={[styles.contrasea, styles.contraseaTypo]}>Contraseña</Text>
      			<Text style={[styles.confirmarContrasea, styles.contraseaTypo]}>Confirmar contraseña</Text>
      			<Pressable style={[styles.rectangleParent, styles.groupChildLayout]} onPress={()=>{}}>
        				<View style={[styles.groupChild, styles.groupChildLayout]} />
        				<Text style={[styles.listo, styles.listoTypo]}>Listo</Text>
      			</Pressable>
      			<View style={[styles.personalInformationItem, styles.personalLayout]} />
      			<Text style={[styles.msuarez, styles.textTypo]}>msuarez</Text>
      			<View style={[styles.personalInformationInner, styles.personalLayout]} />
      			<Text style={[styles.text, styles.textTypo]}>**********</Text>
      			<View style={[styles.rectangleView, styles.personalLayout]} />
      			<Text style={[styles.tusAmigosPodrn, styles.contraseaTypo]}>Tus amigos podrán buscarte con el</Text>
      			<Pressable style={styles.iconlylightOutlinearrowL} onPress={()=>{}}>
        				<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source="Iconly/Light-Outline/Arrow---Left-2.png" />
      			</Pressable>
      			<Pressable style={styles.yaTienesUnaContainer} onPress={()=>{}}>
        				<Text style={styles.text1}>
          					<Text style={styles.yaTienesUna}>{`¿Ya tienes una cuenta? `}</Text>
          					<Text style={styles.iniciaSesin}>Inicia Sesión</Text>
        				</Text>
      			</Pressable>
      			<Text style={[styles.text2, styles.textTypo]}>**********</Text>
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
  	contraseaTypo: {
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
  	personalLayout: {
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
    		left: 48,
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
  	personalInformationChild: {
    		top: 825,
    		left: 112,
    		backgroundColor: "#000",
    		width: 165,
    		height: 4,
    		borderRadius: 10,
    		position: "absolute"
  	},
  	eligeUnUsuario: {
    		top: 144,
    		fontSize: 20,
    		width: 243,
    		color: "#000",
    		left: 34
  	},
  	usuario: {
    		top: 224,
    		width: 75,
    		fontSize: 14,
    		opacity: 0.7
  	},
  	contrasea: {
    		top: 311,
    		width: 102,
    		fontSize: 14,
    		opacity: 0.7
  	},
  	confirmarContrasea: {
    		top: 398,
    		width: 256,
    		fontSize: 14,
    		opacity: 0.7
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
    		top: 650,
    		left: 34
  	},
  	personalInformationItem: {
    		top: 250,
    		borderStyle: "solid",
    		borderColor: "#7e5f5b",
    		borderWidth: 0.5
  	},
  	msuarez: {
    		top: 265
  	},
  	personalInformationInner: {
    		top: 337
  	},
  	text: {
    		top: 352
  	},
  	rectangleView: {
    		top: 424
  	},
  	tusAmigosPodrn: {
    		top: 179,
    		fontSize: 16,
    		width: 293
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
  	text1: {
    		width: 261,
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		fontSize: 14,
    		textAlign: "left"
  	},
  	yaTienesUnaContainer: {
    		left: 62,
    		top: 728,
    		position: "absolute"
  	},
  	text2: {
    		top: 440
  	},
  	personalInformation: {
    		backgroundColor: "#fff",
    		flex: 1,
    		height: 844
  	}
});

export default PERSONALINFORMATION2;
