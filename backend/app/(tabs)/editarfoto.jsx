import * as React from "react";
import {Image, StyleSheet, Text, View, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';

const EDITARPOST = () => {
    const navigation = useNavigation();
  	
  	return (
    		<View style={styles.editarPost}>
                <Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('perfil')}>
                    <Image style={[styles.icon]} resizeMode="cover" source={require("../../assets/images/Arrow---Left-2.png")} />
                </Pressable>
      			<Image style={styles.editarPostChild} resizeMode="cover" source={require("../../assets/images/Line 10.png")}/>
      			<Text style={[styles.editarPieDe, styles.editarPieDeTypo]}>Editar pie de foto</Text>
      			<View style={styles.editarPostItem} />
      			<Text style={styles.elMejorMsico}>¡El mejor músico del mundo! Tour 2024 allá voy.</Text>
      			<Pressable style={[styles.rectangleParent, styles.groupLayout]} onPress={()=>{}}>
        				<View style={[styles.groupChild, styles.groupLayout]} />
        				<Text style={[styles.actualizarPost, styles.postTypo]}>Actualizar Post</Text>
      			</Pressable>
      			<View style={[styles.rectangleGroup, styles.groupLayout]}>
        				<View style={[styles.groupChild, styles.groupLayout]} />
        				<Text style={[styles.eliminarPost, styles.postTypo]}>Eliminar Post</Text>
      			</View>
      			<Text style={[styles.seleccionarImgenesYo, styles.editarPieDeTypo]}>Seleccionar imágen(es) y/o video</Text>
      			<View style={styles.editarPostInner} />
      			<Image style={[styles.iconlylightOutlinearrowL1, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/Arrow---Right-2.png")} />
      			<View style={[styles.rectangleView, styles.groupInnerBorder]} />
      			<View style={[styles.editarPostChild1, styles.groupInnerBorder]} />
      			<Image style={[styles.unsplashig7vn6okgneIcon, styles.rectangleViewLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_ig7vN6OkGNE.png")} />
      			<Image style={[styles.plusIcon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/Plus.png")} />
      			<View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
        				<View style={[styles.groupInner, styles.groupInnerLayout]} />
        				<Image style={[styles.deleteIcon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/Group 81.png")} />
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	groupIconPosition: {
    		width: 390,
    		left: 0,
    		position: "absolute"
  	},
  	iconLayout: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	editarPieDeTypo: {
    		opacity: 0.7,
    		fontSize: 14,
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		left: 35,
    		position: "absolute"
  	},
  	groupLayout: {
    		height: 49,
    		width: 321,
    		position: "absolute"
  	},
  	postTypo: {
    		color: "#fff",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		fontSize: 18,
    		top: 11,
    		textAlign: "left",
    		position: "absolute"
  	},
  	groupInnerBorder: {
    		opacity: 0.8,
    		borderWidth: 0.5,
    		borderColor: "#7e5f5b",
    		borderStyle: "solid",
    		backgroundColor: "#f2f2f2",
    		borderRadius: 10
  	},
  	rectangleViewLayout: {
    		height: 80,
    		width: 80,
    		top: 164,
    		position: "absolute"
  	},
  	groupInnerLayout: {
    		height: 25,
    		width: 23,
    		position: "absolute"
  	},
  	blackBase21: {
    		height: 41,
    		top: 0,
    		width: 390
  	},
  	iconlylightOutlinearrowL: {
    		top: "8.87%",
    		right: "89.6%",
    		bottom: "88.88%",
    		left: "7.73%",
    		width: "2.67%",
    		height: "2.25%",
    		maxWidth: "100%"
  	},
  	editarPostChild: {
    		top: 742,
    		left: 24,
    		width: 318,
    		height: 1,
    		position: "absolute"
  	},
  	editarPieDe: {
    		top: 308,
    		width: 137
  	},
  	editarPostItem: {
    		top: 334,
    		height: 84,
    		width: 321,
    		backgroundColor: "#f2f2f2",
    		borderRadius: 10,
    		left: 35,
    		position: "absolute"
  	},
  	elMejorMsico: {
    		top: 358,
    		left: 41,
    		fontSize: 12,
    		width: 317,
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		position: "absolute"
  	},
  	groupChild: {
    		backgroundColor: "#bb4426",
    		borderRadius: 10,
    		left: 0,
    		top: 0
  	},
  	actualizarPost: {
    		left: 93
  	},
  	rectangleParent: {
    		top: 603,
    		left: 35,
    		height: 49
  	},
  	eliminarPost: {
    		left: 102
  	},
  	rectangleGroup: {
    		top: 665,
    		left: 35,
    		height: 49
  	},
  	seleccionarImgenesYo: {
    		top: 121,
    		width: 268
  	},
  	editarPostInner: {
    		top: 147,
    		height: 133,
    		borderWidth: 0.5,
    		borderColor: "#7e5f5b",
    		borderStyle: "solid",
    		width: 321,
    		backgroundColor: "#f2f2f2",
    		borderRadius: 10,
    		left: 35,
    		position: "absolute"
  	},
  	iconlylightOutlinearrowL1: {
    		top: "24.12%",
    		right: "10.75%",
    		bottom: "73.62%",
    		left: "86.58%",
    		width: "2.67%",
    		height: "2.25%",
    		maxWidth: "100%"
  	},
  	rectangleView: {
    		left: 133,
    		height: 80,
    		width: 80,
    		top: 164,
    		position: "absolute"
  	},
  	editarPostChild1: {
    		left: 223,
    		height: 80,
    		width: 80,
    		top: 164,
    		position: "absolute"
  	},
  	unsplashig7vn6okgneIcon: {
    		left: 43,
    		borderRadius: 10
  	},
  	plusIcon: {
    		height: "3.08%",
    		width: "6.67%",
    		top: "29.62%",
    		right: "10%",
    		bottom: "67.3%",
    		left: "83.33%"
  	},
  	groupInner: {
    		opacity: 0.8,
    		borderWidth: 0.5,
    		borderColor: "#7e5f5b",
    		borderStyle: "solid",
    		backgroundColor: "#f2f2f2",
    		borderRadius: 10,
    		left: 0,
    		top: 0
  	},
  	deleteIcon: {
    		height: "50%",
    		width: "58.7%",
    		top: "24%",
    		right: "19.57%",
    		bottom: "26%",
    		left: "21.74%"
  	},
  	rectangleContainer: {
    		top: 167,
    		left: 97
  	},
  	groupIcon: {
    		top: 775,
    		height: 75
  	},
  	editarPost: {
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		height: 844,
    		overflow: "hidden"
  	}
});

export default EDITARPOST;
