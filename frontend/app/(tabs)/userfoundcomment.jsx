import * as React from "react";
import {StyleSheet, View, Image, Text, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';

const VERCOMENTARIOOTROPERFIL = () => {
    const navigation = useNavigation();
  	
  	return (
    		<View style={styles.verComentarioOtroPerfil}>
      			<View style={[styles.verComentarioOtroPerfilChild, styles.verLayout]} />
      			<View style={[styles.verComentarioOtroPerfilItem, styles.verLayout]} />
      			<Text style={[styles.lukeSmith, styles.lukeSmithTypo]}>Luke Smith</Text>
      			<Text style={[styles.gustavoRivas, styles.lukeSmithTypo]}>Gustavo Rivas</Text>
      			<Text style={[styles.hace8Min, styles.hace4HrTypo]}>Hace 8 min</Text>
      			<Text style={[styles.hace4Hr, styles.hace4HrTypo]}>Hace 4 hr</Text>
      			<Text style={[styles.excelenteDisfrutenFamilia, styles.wowGranFotoTypo]}>¡Excelente! Disfruten, familia.</Text>
      			<Text style={[styles.wowGranFoto, styles.wowGranFotoTypo]}>¡Wow! Gran foto.</Text>
      			<Image style={[styles.unsplash2egnqazbamkIcon, styles.iconLayout4]} resizeMode="cover" source={require("../../assets/images/unsplash_2EGNqazbAMk.png")} />
      			<Image style={[styles.unsplashridxdghg7pwIcon, styles.iconLayout4]} resizeMode="cover" source={require("../../assets/images/unsplash_RiDxDgHg7pw.png")} />
      			<Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('userfound')}>
        				<Image style={[styles.icon, styles.iconLayout2]} resizeMode="cover" source={require("../../assets/images/Arrow---Left-2.png")} />
      			</Pressable>
      			<Text style={[styles.comentarios, styles.lukeSmithTypo]}>Comentarios</Text>
      			<Image style={styles.verComentarioOtroPerfilInner} resizeMode="cover" source={require("../../assets/images/Rectangle 232.png")}/>
      			<Pressable style={[styles.image34, styles.image5Layout]} onPress={()=>{}}>
        				<Image style={styles.iconLayout3} resizeMode="cover" source={require("../../assets/images/image 34.png")}/>
      			</Pressable>
      			<Image style={styles.verComentarioOtroPerfilInner} resizeMode="cover" source={require("../../assets/images/Rectangle 232.png")} />
      			<View style={[styles.unsplashhhcfgcgwqmyParent, styles.unsplashp5bobf0xjuaIconPosition]}>
        				<Image style={[styles.unsplashhhcfgcgwqmyIcon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_ymo_yC_N_2o.png")} />
        				<Text style={styles.martinPerez}>Martin Perez</Text>
        				<Text style={[styles.hace2hr, styles.hace2hrTypo]}>Hace 2hr</Text>
      			</View>
      			<Text style={[styles.parrillaArgentinaEn, styles.textTypo]}>Parrilla Argentina en pleno Manhattan. Recomiendo.</Text>
      			<Image style={[styles.unsplash4Qfycgpc4cIcon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/imageasado.png")} />
      			<View style={[styles.image5Parent, styles.image5Layout]}>
        				<Image style={[styles.image5Icon, styles.image5Layout]} resizeMode="cover" source={require("../../assets/images/image 5.png")} />
        				<Image style={[styles.iconlyboldchat, styles.iconLayout2]} resizeMode="cover" source={require("../../assets/images/Chat.png")} />
        				<Text style={[styles.text, styles.textLayout]}>41</Text>
        				<Text style={[styles.text1, styles.textLayout]}>2</Text>
      			</View>
      			<Text style={[styles.manhattanNuevaYork, styles.hace2hrTypo]}>Manhattan, Nueva York</Text>
      			<Image style={[styles.image1Icon, styles.textLayout]} resizeMode="cover"source={require("../../assets/images/image 1.png")} />
      			<View style={[styles.rectangleParent, styles.groupChildLayout]}>
        				<View style={[styles.groupChild, styles.groupChildLayout]} />
        				<Pressable style={styles.image42} onPress={()=>{}}>
          					<Image style={styles.iconLayout3} resizeMode="cover" source={require("../../assets/images/image 42.png")} />
        				</Pressable>
        				<Text style={styles.quPinta}>¡Qué pinta!</Text>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	verLayout: {
    		height: 74,
    		width: 356,
    		borderColor: "#bebdbd",
    		borderRadius: 14,
    		left: 19,
    		borderWidth: 1,
    		borderStyle: "solid",
    		position: "absolute",
    		backgroundColor: "#fff"
  	},
  	groupIconPosition: {
    		width: 390,
    		left: 0,
    		position: "absolute"
  	},
  	lukeSmithTypo: {
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		position: "absolute"
  	},
  	hace4HrTypo: {
    		opacity: 0.8,
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		fontSize: 10,
    		textAlign: "left",
    		color: "#000",
    		position: "absolute"
  	},
  	wowGranFotoTypo: {
    		width: 228,
    		fontFamily: "Poppins-Regular",
    		fontSize: 9,
    		opacity: 0.8,
    		textAlign: "left",
    		color: "#000",
    		position: "absolute"
  	},
  	iconLayout4: {
    		height: 40,
    		width: 40,
    		left: 29,
    		position: "absolute"
  	},
  	iconLayout2: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		overflow: "hidden"
  	},
  	image5Layout: {
    		height: 15,
    		position: "absolute"
  	},
  	unsplashp5bobf0xjuaIconPosition: {
    		top: 127,
    		left: 48
  	},
  	iconLayout1: {
    		height: 22,
    		width: 22,
    		position: "absolute"
  	},
  	hace2hrTypo: {
    		fontSize: 8,
    		textAlign: "center",
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		color: "#000",
    		position: "absolute"
  	},
  	textTypo: {
    		fontSize: 10,
    		textAlign: "left",
    		color: "#000"
  	},
  	iconLayout: {
    		height: 202,
    		width: 319,
    		top: 159,
    		position: "absolute"
  	},
  	textLayout: {
    		height: 10,
    		position: "absolute"
  	},
  	groupChildLayout: {
    		height: 34,
    		width: 299,
    		position: "absolute"
  	},
  	verComentarioOtroPerfilChild: {
    		top: 528
  	},
  	verComentarioOtroPerfilItem: {
    		top: 619
  	},
  	blackBase21: {
    		height: 41,
    		top: 0,
    		width: 390
  	},
  	lukeSmith: {
    		top: 545,
    		fontSize: 13,
    		color: "#000",
    		left: 74
  	},
  	gustavoRivas: {
    		top: 635,
    		left: 73,
    		fontSize: 13,
    		color: "#000"
  	},
  	hace8Min: {
    		left: 309,
    		top: 547
  	},
  	hace4Hr: {
    		top: 634,
    		left: 314
  	},
  	excelenteDisfrutenFamilia: {
    		top: 566,
    		left: 74
  	},
  	wowGranFoto: {
    		top: 656,
    		left: 73
  	},
  	unsplash2egnqazbamkIcon: {
    		top: 547
  	},
  	unsplashridxdghg7pwIcon: {
    		top: 639
  	},
  	icon: {
    		height: "100%",
    		width: "100%"
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
  	comentarios: {
    		top: 68,
    		left: 137,
    		fontSize: 18,
    		width: 124
  	},
  	verComentarioOtroPerfilInner: {
    		top: 117,
    		borderRadius: 20,
    		width: 335,
    		height: 338,
    		left: 29,
    		position: "absolute"
  	},
  	iconLayout3: {
    		height: "100%",
    		width: "100%"
  	},
  	image34: {
    		left: 333,
    		top: 407,
    		width: 15,
    		height: 15
  	},
  	unsplashhhcfgcgwqmyIcon: {
    		left: 0,
    		top: 0
  	},
  	martinPerez: {
    		left: 26,
    		textAlign: "center",
    		fontSize: 10,
    		color: "#000",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		top: 0,
    		position: "absolute"
  	},
  	hace2hr: {
    		top: 15,
    		left: 28
  	},
  	unsplashhhcfgcgwqmyParent: {
    		width: 89,
    		height: 27,
    		left: 48,
    		position: "absolute"
  	},
  	parrillaArgentinaEn: {
    		top: 379,
    		fontFamily: "Roboto-Regular",
    		width: 291,
    		left: 48,
    		position: "absolute"
  	},
  	unsplash4Qfycgpc4cIcon: {
    		left: 37,
    		borderRadius: 10
  	},
  	image5Icon: {
    		width: 15,
    		height: 15,
    		left: 0,
    		top: 0
  	},
  	iconlyboldchat: {
    		height: "90%",
    		width: "19.29%",
    		top: "0%",
    		right: "20.71%",
    		bottom: "10%",
    		left: "60%",
    		position: "absolute"
  	},
  	text: {
    		left: 17,
    		width: 18,
    		fontSize: 10,
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		height: 10,
    		top: 0
  	},
  	text1: {
    		left: 58,
    		width: 12,
    		fontSize: 10,
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		height: 10,
    		top: 0
  	},
  	image5Parent: {
    		top: 409,
    		left: 46,
    		width: 70
  	},
  	manhattanNuevaYork: {
    		top: 142,
    		left: 252
  	},
  	image1Icon: {
    		top: 143,
    		left: 241,
    		width: 10
  	},
  	groupChild: {
    		borderColor: "#7e5f5b",
    		borderRadius: 10,
    		left: 0,
    		top: 0,
    		borderWidth: 1,
    		borderStyle: "solid",
    		width: 299,
    		backgroundColor: "#fff"
  	},
  	image42: {
    		left: 276,
    		top: 9,
    		width: 14,
    		height: 14,
    		position: "absolute"
  	},
  	quPinta: {
    		top: 11,
    		left: 12,
    		fontFamily: "Roboto-Medium",
    		color: "#7e5f5b",
    		opacity: 0.5,
    		fontWeight: "500",
    		fontSize: 10,
    		textAlign: "left",
    		position: "absolute"
  	},
  	rectangleParent: {
    		top: 472,
    		left: 49
  	},
  	unsplashuc0hzduitwyIcon: {
    		left: 36,
    		borderRadius: 13
  	},
  	unsplashp5bobf0xjuaIcon: {
    		left: 48,
    		top: 127
  	},
  	groupIcon: {
    		top: 775,
    		height: 75
  	},
  	verComentarioOtroPerfil: {
    		flex: 1,
    		height: 844,
    		overflow: "hidden",
    		width: "100%",
    		backgroundColor: "#fff"
  	}
});

export default VERCOMENTARIOOTROPERFIL;
