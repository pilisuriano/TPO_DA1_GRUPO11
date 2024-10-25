import * as React from "react";
import {Image, StyleSheet, View, Text, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';

const VERIFICATION = () => {
  	const navigation = useNavigation();

  	return (
    		<View style={[styles.verification, styles.iconLayout]}>
      			<View style={styles.verificationChild} />
      			<Text style={[styles.otpEnviado, styles.siguienteTypo]}>OTP enviado</Text>
      			<Text style={styles.ingresaElCdigo}>Ingresa el código OTP que te enviamos</Text>
      			<View style={styles.verificationItem} />
      			<View style={[styles.verificationInner, styles.verificationChildLayout]} />
      			<View style={[styles.rectangleView, styles.siguientePosition]} />
      			<View style={[styles.verificationChild1, styles.verificationChildLayout]} />
      			<View style={[styles.verificationChild2, styles.verificationChildLayout]} />
      			<Text style={[styles.text, styles.textTypo]}>2</Text>
      			<Text style={[styles.text1, styles.textTypo]}>0</Text>
      			<Text style={[styles.text2, styles.textTypo]}>9</Text>
      			<Text style={[styles.text3, styles.textTypo]}>1</Text>
      			<Pressable style={[styles.rectangleParent, styles.groupChildLayout]} onPress={() => navigation.navigate('screens/login/passreset')}>
        				<View style={[styles.groupChild, styles.groupChildLayout]} />
        				<Text style={[styles.siguiente, styles.siguientePosition]}>Siguiente</Text>
      			</Pressable>
      			<Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('screens/login/forgotpass')}>
        				<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source={require('../../../assets/images/Arrow---Left-2.png')} />
      			</Pressable>
      			<Text style={styles.noLoRecibisteContainer}>
        				<Text style={styles.noLoRecibiste}>{`¿No lo recibiste? `}</Text>
        				<Text style={styles.reenviarEn0100}>Reenviar en 01:00</Text>
      			</Text>
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
  	siguienteTypo: {
    		textAlign: "left",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600"
  	},
  	verificationChildLayout: {
    		backgroundColor: "#fde6b2",
    		height: 60,
    		width: 70,
    		top: 206,
    		borderRadius: 10
  	},
  	siguientePosition: {
    		left: 116,
    		position: "absolute"
  	},
  	textTypo: {
    		color: "#7e5f5b",
    		fontFamily: "Poppins-Bold",
    		fontWeight: "700",
    		top: 224,
    		fontSize: 16,
    		textAlign: "left",
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
  	verificationChild: {
    		top: 817,
    		left: 119,
    		backgroundColor: "#000",
    		width: 165,
    		height: 4,
    		borderRadius: 10,
    		position: "absolute"
  	},
  	otpEnviado: {
    		top: 128,
    		fontSize: 20,
    		width: 140,
    		color: "#000",
    		left: 33,
    		position: "absolute"
  	},
  	ingresaElCdigo: {
    		top: 163,
    		opacity: 0.7,
    		width: 321,
    		fontSize: 16,
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		textAlign: "left",
    		color: "#000",
    		left: 33,
    		position: "absolute"
  	},
  	verificationItem: {
    		backgroundColor: "#006175",
    		height: 60,
    		width: 70,
    		top: 206,
    		left: 33,
    		borderRadius: 10,
    		position: "absolute"
  	},
  	verificationInner: {
    		left: 33,
    		position: "absolute"
  	},
  	rectangleView: {
    		backgroundColor: "#fde6b2",
    		height: 60,
    		width: 70,
    		top: 206,
    		borderRadius: 10
  	},
  	verificationChild1: {
    		left: 201,
    		position: "absolute"
  	},
  	verificationChild2: {
    		left: 284,
    		position: "absolute"
  	},
  	text: {
    		left: 58
  	},
  	text1: {
    		left: 146
  	},
  	text2: {
    		left: 231
  	},
  	text3: {
    		left: 316
  	},
  	groupChild: {
    		backgroundColor: "#bb4426",
    		borderRadius: 10,
    		left: 0,
    		top: 0
  	},
  	siguiente: {
    		top: 11,
    		fontSize: 18,
    		color: "#fff",
    		textAlign: "left",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600"
  	},
  	rectangleParent: {
    		top: 634,
    		left: 33
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
  	noLoRecibiste: {
    		color: "#000"
  	},
  	reenviarEn0100: {
    		color: "#ee2323"
  	},
  	noLoRecibisteContainer: {
    		top: 298,
    		left: 34,
    		fontSize: 12,
    		width: 246,
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		textAlign: "left",
    		position: "absolute"
  	},
  	verification: {
    		backgroundColor: "#fff",
    		flex: 1,
    		height: 844
  	}
});

export default VERIFICATION;
