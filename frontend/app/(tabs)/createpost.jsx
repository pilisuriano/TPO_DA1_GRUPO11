import * as React from "react";
import {Image, StyleSheet, Text, Pressable, View} from "react-native";

const POST = () => {
  	
  	return (
    		<View style={[styles.post, styles.postLayout1]}>
      			<Text style={[styles.post1, styles.postTypo]}>Post</Text>
      			<Text style={[styles.agregarPieDe, styles.agregarTypo]}>Agregar pie de foto</Text>
      			<View style={[styles.postChild, styles.postLayout]} />
      			<Text style={[styles.agregarUbicacin, styles.agregarTypo]}>Agregar ubicación</Text>
      			<View style={[styles.postItem, styles.postItemLayout]} />
      			<View style={[styles.rectangleParent, styles.postItemLayout]}>
        				<View style={[styles.groupChild, styles.postItemLayout]} />
        				<Text style={[styles.publicarPost, styles.postTypo]}>Publicar post</Text>
      			</View>
      			<Text style={[styles.seleccionarImgenesYo, styles.agregarTypo]}>Seleccionar imágen(es) y/o video</Text>
      			<View style={[styles.postInner, styles.postLayout]} />
      			<Image style={styles.imageIcon} resizeMode="cover" source={require("../../assets/images/imageubi.png")} />
      			<Pressable style={styles.plus} onPress={()=>{}}>
        				<Image style={[styles.icon, styles.postLayout1]} resizeMode="cover" source={require("../../assets/images/PlusM.png")} />
      			</Pressable>
    		</View>);
};

const styles = StyleSheet.create({
  	postLayout1: {
    		overflow: "hidden",
    		width: "100%"
  	},
  	groupIconPosition: {
    		width: 390,
    		left: 0,
    		position: "absolute"
  	},
  	postTypo: {
    		textAlign: "left",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		fontSize: 18,
    		position: "absolute"
  	},
  	agregarTypo: {
    		opacity: 0.7,
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		fontSize: 14,
    		left: 35,
    		textAlign: "left",
    		color: "#000",
    		position: "absolute"
  	},
  	postLayout: {
    		width: 321,
    		backgroundColor: "#f2f2f2",
    		borderRadius: 10,
    		left: 35,
    		position: "absolute"
  	},
  	postItemLayout: {
    		height: 49,
    		width: 321,
    		position: "absolute"
  	},
  	blackBase21: {
    		height: 41,
    		top: 0,
    		width: 390
  	},
  	post1: {
    		top: 70,
    		left: 175,
    		width: 43,
    		color: "#000",
    		textAlign: "left",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		fontSize: 18
  	},
  	icon: {
    		height: "100%",
    		maxWidth: "100%",
    		maxHeight: "100%"
  	},
  	iconlylightOutlinearrowL: {
    		left: "7.73%",
    		top: "8.87%",
    		right: "89.6%",
    		bottom: "88.88%",
    		width: "2.67%",
    		height: "2.25%",
    		position: "absolute"
  	},
  	agregarPieDe: {
    		top: 341,
    		width: 139,
    		opacity: 0.7,
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		fontSize: 14
  	},
  	postChild: {
    		top: 367,
    		height: 84
  	},
  	agregarUbicacin: {
    		top: 468,
    		width: 139,
    		opacity: 0.7,
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		fontSize: 14
  	},
  	postItem: {
    		top: 494,
    		backgroundColor: "#f2f2f2",
    		height: 49,
    		borderRadius: 10,
    		left: 35
  	},
  	groupChild: {
    		backgroundColor: "#bb4426",
    		borderRadius: 10,
    		height: 49,
    		left: 0,
    		top: 0
  	},
  	publicarPost: {
    		top: 11,
    		left: 101,
    		color: "#fff",
    		textAlign: "left",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		fontSize: 18
  	},
  	rectangleParent: {
    		top: 579,
    		left: 35,
    		height: 49
  	},
  	seleccionarImgenesYo: {
    		top: 155,
    		width: 259,
    		opacity: 0.7,
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		fontSize: 14
  	},
  	postInner: {
    		top: 181,
    		borderStyle: "solid",
    		borderColor: "#7e5f5b",
    		borderWidth: 0.5,
    		height: 133
  	},
  	imageIcon: {
    		top: 509,
    		left: 325,
    		width: 20,
    		height: 20,
    		opacity: 0.5,
    		borderRadius: 10,
    		position: "absolute"
  	},
  	plus: {
    		left: "82.56%",
    		top: "33.53%",
    		right: "10.77%",
    		bottom: "63.39%",
    		width: "6.67%",
    		height: "3.08%",
    		position: "absolute"
  	},
  	groupIcon: {
    		top: 775,
    		height: 75
  	},
  	post: {
    		backgroundColor: "#fff",
    		flex: 1,
    		height: 844
  	}
});

export default POST;
