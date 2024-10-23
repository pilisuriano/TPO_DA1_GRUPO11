import * as React from "react";
import {Image, StyleSheet, View, Text, Pressable} from "react-native";

const VERIFICACION = () => {
  	
  	return (
    		<View style={[styles.verificacion, styles.iconLayout]}>
      			<View style={styles.verificacionChild} />
      			<Text style={[styles.otpEnviado, styles.siguienteTypo]}>OTP enviado</Text>
      			<Text style={styles.ingresaElCdigo}>Ingresa el código OTP que te enviamos</Text>
      			<Text style={[styles.noLoRecibisteContainer, styles.textTypo]}>
        				<Text style={styles.noLoRecibiste}>{`¿No lo recibiste? `}</Text>
        				<Text style={styles.reenviarEn0100}>Reenviar en 01:00</Text>
      			</Text>
      			<View style={[styles.verificacionItem, styles.rectangleParentPosition]} />
      			<Pressable style={[styles.rectangleParent, styles.rectangleParentPosition]} onPress={()=>{}}>
        				<View style={[styles.groupChild, styles.groupLayout1]} />
        				<View style={[styles.groupItem, styles.groupLayout1]} />
        				<View style={[styles.groupInner, styles.groupLayout1]} />
        				<View style={[styles.rectangleView, styles.groupLayout1]} />
      			</Pressable>
      			<Pressable style={[styles.rectangleGroup, styles.groupLayout]} onPress={()=>{}}>
        				<View style={[styles.groupChild1, styles.groupLayout]} />
        				<Text style={[styles.siguiente, styles.siguienteTypo]}>Siguiente</Text>
      			</Pressable>
      			<Pressable style={styles.iconlylightOutlinearrowL} onPress={()=>{}}>
        				<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source="Iconly/Light-Outline/Arrow---Left-2.png" />
      			</Pressable>
      			<Pressable style={styles.yaTienesUnaContainer} onPress={()=>{}}>
        				<Text style={[styles.text, styles.textTypo]}>
          					<Text style={styles.noLoRecibiste}>{`¿Ya tienes una cuenta? `}</Text>
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
  	blackBase21Position: {
    		top: 0,
    		left: 0
  	},
  	siguienteTypo: {
    		textAlign: "left",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		position: "absolute"
  	},
  	textTypo: {
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		textAlign: "left"
  	},
  	rectangleParentPosition: {
    		height: 60,
    		top: 222,
    		left: 38,
    		position: "absolute"
  	},
  	groupLayout1: {
    		backgroundColor: "#fde6b2",
    		height: 60,
    		width: 70,
    		borderRadius: 10,
    		top: 0,
    		position: "absolute"
  	},
  	groupLayout: {
    		height: 49,
    		width: 321,
    		position: "absolute"
  	},
  	blackBase21: {
    		width: 390,
    		height: 41,
    		left: 0,
    		position: "absolute"
  	},
  	verificacionChild: {
    		top: 824,
    		left: 116,
    		backgroundColor: "#000",
    		width: 165,
    		height: 4,
    		borderRadius: 10,
    		position: "absolute"
  	},
  	otpEnviado: {
    		top: 144,
    		fontSize: 20,
    		width: 140,
    		color: "#000",
    		left: 38
  	},
  	ingresaElCdigo: {
    		top: 179,
    		fontSize: 16,
    		opacity: 0.7,
    		width: 321,
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		textAlign: "left",
    		color: "#000",
    		left: 38,
    		position: "absolute"
  	},
  	noLoRecibiste: {
    		color: "#000"
  	},
  	reenviarEn0100: {
    		color: "#ee2323"
  	},
  	noLoRecibisteContainer: {
    		top: 297,
    		fontSize: 12,
    		width: 246,
    		left: 38,
    		position: "absolute"
  	},
  	verificacionItem: {
    		backgroundColor: "#c4c4c4",
    		width: 70,
    		height: 60,
    		top: 222,
    		borderRadius: 10
  	},
  	groupChild: {
    		left: 0
  	},
  	groupItem: {
    		left: 83
  	},
  	groupInner: {
    		left: 168
  	},
  	rectangleView: {
    		left: 251
  	},
  	rectangleParent: {
    		height: 60,
    		top: 222,
    		width: 321
  	},
  	groupChild1: {
    		backgroundColor: "#bb4426",
    		borderRadius: 10,
    		left: 0,
    		top: 0
  	},
  	siguiente: {
    		top: 11,
    		left: 117,
    		fontSize: 18,
    		color: "#fff"
  	},
  	rectangleGroup: {
    		top: 650,
    		left: 38
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
  	iniciaSesin: {
    		color: "#006175"
  	},
  	text: {
    		fontSize: 14,
    		width: 261
  	},
  	yaTienesUnaContainer: {
    		left: 69,
    		top: 732,
    		position: "absolute"
  	},
  	verificacion: {
    		backgroundColor: "#fff",
    		flex: 1,
    		height: 844
  	}
});

export default VERIFICACION;
