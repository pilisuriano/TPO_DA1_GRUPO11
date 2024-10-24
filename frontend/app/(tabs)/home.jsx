import * as React from "react";
import {ScrollView, Image, StyleSheet, Pressable, View, Text} from "react-native";
import { useNavigation } from '@react-navigation/native';

const Home = () => {
	const navigation = useNavigation();

  	return (
		<View style={styles.timelinePublicidad}>
      			<Pressable style={styles.wrapper} onPress={()=>{}}>
        				<Image style={[styles.icon, styles.iconLayout4]} resizeMode="cover" source={require("../../assets/images/Group 12.png")} />
      			</Pressable>
      			<Pressable style={[styles.timelinePublicidadChild, styles.unsplash4Qfycgpc4cBorder]} onPress={() => navigation.navigate('screens/search')} />
      			<Image style={[styles.iconlybrokensearch, styles.iconLayout4]} resizeMode="cover" source={require("../../assets/images/Search.png")} />
      			<Text style={styles.buscar}>Buscar...</Text>
      			<Image style={styles.marca2Icon} resizeMode="cover" source={require("../../assets/images/Marca 2.png")}/>
      			<Image style={[styles.timelinePublicidadItem, styles.imageIconLayout]} resizeMode="cover" source={require("../../assets/images/Rectangle 235.png")} />
      			<Image style={[styles.image36Icon, styles.iconLayout3]} resizeMode="cover" source={require("../../assets/images/image 34.png")} />
      			<Text style={[styles.verLos3, styles.verTypo]}>Ver los 3 comentarios</Text>
      			<Image style={[styles.iconlyboldchat, styles.iconlyboldchatLayout1]} resizeMode="cover" source={require("../../assets/images/Chat.png")} />
      			<Image style={[styles.image35Icon, styles.iconLayout2]} resizeMode="cover" source={require("../../assets/images/image 3.png")} />
      			<Text style={[styles.cancnMexico, styles.chrisUilFlexBox]}>Cancún, Mexico</Text>
      			<Image style={styles.image2Icon} resizeMode="cover" source={require("../../assets/images/image 2.png")} />
      			<Image style={[styles.timelinePublicidadItem, styles.imageIconLayout]} resizeMode="cover" source={require("../../assets/images/Rectangle 234.png")} />
      			<View style={[styles.unsplash4uojmedcwi8Parent, styles.unsplash4uojmedcwi8Layout]}>
        				<Image style={[styles.unsplash4uojmedcwi8Icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_4uojMEdcwI8.png")} />
        				<Text style={[styles.chrisUil, styles.textTypo3]}>Chris Uil</Text>
        				<Text style={[styles.hace2hr, styles.hace2hrTypo]}>Hace 2hr</Text>
      			</View>
      			<Text style={[styles.unaTardeEsplndida, styles.unViajeSoadoTypo]}>Una tarde espléndida en Cancún.</Text>
      			<Image style={[styles.unsplash4Qfycgpc4cIcon, styles.unsplash4IconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_4_QFycgpC4c.png")} />
      			<Pressable style={[styles.groupParent, styles.groupLayout2]} onPress={()=>{}}>
        				<View style={[styles.rectangleWrapper, styles.groupLayout2]}>
          					<View style={[styles.groupChild, styles.groupBorder]} />
        				</View>
        				<Image style={[styles.image17Icon, styles.iconLayout2]} resizeMode="cover" source={require("../../assets/images/image 17.png")} />
      			</Pressable>
      			<Text style={[styles.text, styles.textLayout1]}>247</Text>
      			<Text style={[styles.text1, styles.textLayout]}>3</Text>
      			<View style={[styles.image18, styles.iconLayout2]} />
      			<View style={[styles.groupView, styles.groupLayout]}>
        				<View style={[styles.groupItem, styles.groupLayout]} />
      			</View>
      			<Image style={styles.image19Icon} resizeMode="cover" source={require("../../assets/images/image 19.png")} />
      			<Image style={[styles.imageIcon, styles.imageIconLayout]} resizeMode="cover" source={require("../../assets/images/image.png")} />
      			<ScrollView style={[styles.unsplash4Qfycgpc4cParent, styles.unsplash4IconLayout]}>
        				<Image style={[styles.unsplash4Qfycgpc4cIcon1, styles.unsplash4IconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_4_QFycgpC4c.png")} />
        				<Image style={[styles.unsplashmxfjwuffdi4Icon, styles.unsplash4IconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_MxFjwuFFDi4.png")} />
        				<Image style={[styles.unsplash76dgucmupv4Icon, styles.unsplash4IconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_76dgUcMupv4.png" )}/>
        				<Pressable style={[styles.groupContainer, styles.groupLayout2]} onPress={()=>{}}>
          					<View style={[styles.rectangleWrapper, styles.groupLayout2]}>
            						<View style={[styles.groupChild, styles.groupBorder]} />
          					</View>
          					<Image style={[styles.image17Icon, styles.iconLayout2]} resizeMode="cover" source={require("../../assets/images/image 17.png")} />
        				</Pressable>
      			</ScrollView>
      			<Image style={[styles.image3Icon, styles.iconPosition3]} resizeMode="cover" source={require("../../assets/images/image 3.png")} />
      			<Text style={[styles.buenosAiresArgentina, styles.chrisUilFlexBox]}>Buenos Aires, Argentina</Text>
      			<View style={styles.unsplashhhcfgcgwqmyParent}>
        				<Image style={[styles.unsplash4uojmedcwi8Icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_hhcFGCGWQMY.png")} />
        				<Text style={[styles.chrisUil, styles.textTypo3]}>Gian Moreno</Text>
        				<Text style={[styles.hace2hr, styles.hace2hrTypo]}>Hace 1hr</Text>
      			</View>
      			<Text style={[styles.holaAmigosRecien, styles.unViajeSoadoTypo]}>¡Hola amigos! Recien creé mi cuenta. Feliz de estar aquí.</Text>
      			<Text style={[styles.verLos57, styles.verTypo]}>Ver los 57 comentarios</Text>
      			<View style={[styles.image14Parent, styles.groupLayout]}>
        				<Image style={[styles.image14Icon, styles.iconLayout]} resizeMode="cover"source={require("../../assets/images/image 14.png")} />
        				<Image style={[styles.image16Icon, styles.groupLayout]} resizeMode="cover" source={require("../../assets/images/image 15.png")} />
        				<Image style={[styles.image15Icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/image 15.png")} />
      			</View>
      			<Image style={[styles.iconlyboldchat1, styles.iconlyboldchatLayout1]} resizeMode="cover" source={require("../../assets/images/Chat.png")} />
      			<Text style={[styles.text2, styles.iconPosition3]}>247</Text>
      			<Text style={[styles.text3, styles.textLayout]}>57</Text>
      			<Image style={[styles.image1Icon, styles.iconPosition2]} resizeMode="cover" source={require("../../assets/images/image 1.png")} />
      			<Image style={[styles.image34Icon, styles.iconPosition3]} resizeMode="cover" source={require("../../assets/images/image 34.png")} />
      			<Image style={[styles.imageIcon1, styles.imageIconLayout]} resizeMode="cover" source={require("../../assets/images/image.png")} />
      			<Image style={[styles.image38Icon, styles.iconLayout2]} resizeMode="cover" source={require("../../assets/images/image 38.png")} />
      			<Image style={[styles.imageIcon1, styles.imageIconLayout]} resizeMode="cover" source={require("../../assets/images/Rectangle 232.png")} />
      			<View style={[styles.unsplashhhcfgcgwqmyGroup, styles.verPosition]}>
        				<Image style={[styles.unsplashhhcfgcgwqmyIcon1, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_hhcFGCGWQMY.png")} />
        				<Text style={[styles.chrisUil, styles.textTypo3]}>Mercado Libre</Text>
        				<Text style={[styles.hace3hr, styles.hace2hrTypo]}>Hace 3hr</Text>
      			</View>
      			<Text style={[styles.visitarSitioHttpsmercado, styles.unViajeSoadoTypo]}>Visitar sitio: https://mercadolibre.com.ar/</Text>
        				<Image style={styles.unsplash4Layout} resizeMode="cover" source={require("../../assets/images/unsplash_4_QFycgpC4c.png")} />
        				<View style={[styles.unsplash4Qfycgpc4c, styles.unsplash4Layout]} />
        				<Image style={[styles.mercadoLibre1Icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/mercado-libre 1.png")} />
        				<Text style={[styles.publicidad, styles.chrisUilFlexBox]}>Publicidad</Text>
        				<Image style={[styles.timelinePublicidadChild1, styles.imageIconLayout]} resizeMode="cover" source={require("../../assets/images/Rectangle 235.png")} />
        				<Image style={[styles.image34Icon1, styles.image34IconLayout]} resizeMode="cover" source={require("../../assets/images/image 34.png")} />
        				<Image style={[styles.image5Icon, styles.image5IconLayout]} resizeMode="cover" source={require("../../assets/images/image 5.png")} />
        				<Image style={[styles.iconlyboldchat2, styles.iconlyboldchatLayout]} resizeMode="cover" source={require("../../assets/images/Chat.png")} />
        				<Text style={[styles.manhattanNuevaYork, styles.manhattanTypo]}>Manhattan, Nueva York</Text>
        				<Image style={[styles.image2Icon1, styles.iconPosition2]} resizeMode="cover" source={require("../../assets/images/image 2.png")} />
        				<Image style={[styles.timelinePublicidadChild1, styles.imageIconLayout]} resizeMode="cover" source={require("../../assets/images/Rectangle 234.png")} />
        				<View style={[styles.unsplash4uojmedcwi8Group, styles.unsplash4uojmedcwi8Layout]}>
          					<Image style={[styles.unsplash4uojmedcwi8Icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_4uojMEdcwI8.png")} />
          					<Text style={[styles.chrisUil, styles.textTypo3]}>Chris Uil</Text>
          					<Text style={[styles.hace2hr, styles.hace2hrTypo]}>Hace 2hr</Text>
        				</View>
        				<Text style={[styles.fotnQueSacamos, styles.unViajeSoadoTypo]}>Fotón que sacamos desde el Top of the Rock.</Text>
        				<Image style={[styles.unsplash4Qfycgpc4cIcon3, styles.unsplash4IconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_4_QFycgpC4c.png")} />
        				<Image style={[styles.unsplash4Qfycgpc4cIcon3, styles.unsplash4IconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_4_QFycgpC4c.png")} />
        				<Text style={[styles.verLos5, styles.verPosition]}>Ver los 5 comentarios</Text>
        				<Image style={[styles.unsplash4Qfycgpc4cIcon3, styles.unsplash4IconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_4_QFycgpC4c.png")} />
        				<Image style={[styles.unsplash4Qfycgpc4cIcon3, styles.unsplash4IconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_4_QFycgpC4c.png")} />
        				<Pressable style={[styles.groupPressable, styles.groupPosition]} onPress={()=>{}}>
          					<View style={[styles.rectangleWrapper, styles.groupLayout2]}>
            						<View style={[styles.groupChild, styles.groupBorder]} />
          					</View>
          					<Image style={[styles.image17Icon, styles.iconLayout2]} resizeMode="cover" source={require("../../assets/images/image 17.png")} />
        				</Pressable>
        				<Text style={[styles.text4, styles.textPosition1]}>247</Text>
        				<Text style={[styles.text5, styles.textPosition]}>5</Text>
        				<Image style={[styles.timelinePublicidadChild3, styles.imageIconLayout]} resizeMode="cover" source={require("../../assets/images/Rectangle 235.png")} />
        				<Image style={[styles.image34Icon2, styles.iconPosition]} resizeMode="cover" source={require("../../assets/images/image 34.png")}/>
        				<Image style={[styles.image5Icon1, styles.iconPosition]} resizeMode="cover" source={require("../../assets/images/image 5.png" )}/>
        				<Image style={[styles.iconlyboldchat3, styles.iconlyboldchatLayout]} resizeMode="cover" source={require("../../assets/images/Chat.png")} />
        				<Text style={[styles.manhattanNuevaYork1, styles.manhattanTypo]}>Manhattan, Nueva York</Text>
        				<Image style={[styles.image2Icon2, styles.iconPosition2]} resizeMode="cover" source={require("../../assets/images/image 2.png")} />
        				<Image style={[styles.timelinePublicidadChild3, styles.imageIconLayout]} resizeMode="cover" source={require("../../assets/images/Rectangle 234.png")} />
        				<View style={[styles.unsplash4uojmedcwi8Container, styles.unsplash4uojmedcwi8Layout]}>
          					<Image style={[styles.unsplash4uojmedcwi8Icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_4uojMEdcwI8.png")} />
          					<Text style={[styles.chrisUil, styles.textTypo3]}>Chris Uil</Text>
          					<Text style={[styles.hace2hr, styles.hace2hrTypo]}>Hace 2hr</Text>
        				</View>
        				<Text style={[styles.unViajeSoado, styles.unViajeSoadoTypo]}>Un viaje soñado.</Text>
        				<Image style={[styles.unsplash4Qfycgpc4cIcon7, styles.unsplash4IconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_4_QFycgpC4c.png")} />
        				<Image style={[styles.unsplash4Qfycgpc4cIcon7, styles.unsplash4IconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_4_QFycgpC4c.png")}/>
        				<Text style={[styles.verLos51, styles.verPosition]}>Ver los 5 comentarios</Text>
        				<Image style={[styles.unsplash4Qfycgpc4cIcon7, styles.unsplash4IconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_4_QFycgpC4c.png")} />
        				<Image style={[styles.unsplash4Qfycgpc4cIcon7, styles.unsplash4IconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_4_QFycgpC4c.png")} />
        				<Pressable style={[styles.groupParent1, styles.groupPosition]} onPress={()=>{}}>
          					<View style={[styles.rectangleWrapper, styles.groupLayout2]}>
            						<View style={[styles.groupChild, styles.groupBorder]} />
          					</View>
          					<Image style={[styles.image17Icon, styles.iconLayout2]} resizeMode="cover" source={require("../../assets/images/image 17.png")} />
        				</Pressable>
        				<Text style={[styles.text6, styles.textTypo]}>247</Text>
        				<Text style={[styles.text7, styles.textTypo]}>5</Text>
        				</View>);
};
        				
const styles = StyleSheet.create({
	groupIconPosition: {
			width: 390,
			left: 0,
			position: "absolute"
	},
	iconLayout4: {
			maxHeight: "100%",
			overflow: "hidden",
			maxWidth: "100%"
	},
	unsplash4Qfycgpc4cBorder: {
			borderWidth: 1,
			borderStyle: "solid"
	},
	imageIconLayout: {
			height: 338,
			width: 335,
			borderRadius: 20,
			left: 28,
			position: "absolute"
	},
	iconLayout3: {
			height: 13,
			width: 13
	},
	verTypo: {
			width: 106,
			color: "#000",
			fontFamily: "Roboto-Bold",
			fontWeight: "600",
			left: 47,
			opacity: 0.5,
			textAlign: "left",
			fontSize: 10,
			position: "absolute"
	},
	iconlyboldchatLayout1: {
			width: "3.46%",
			height: "1.6%",
			maxHeight: "100%",
			overflow: "hidden",
			position: "absolute",
			maxWidth: "100%"
	},
	iconLayout2: {
			height: 15,
			width: 15
	},
	chrisUilFlexBox: {
			textAlign: "center",
			color: "#000",
			position: "absolute"
	},
	unsplash4uojmedcwi8Layout: {
			width: 71,
			height: 27,
			left: 47,
			position: "absolute"
	},
	iconLayout1: {
			height: 22,
			width: 22,
			position: "absolute"
	},
	textTypo3: {
			fontFamily: "Poppins-SemiBold",
			fontWeight: "600"
	},
	hace2hrTypo: {
			top: 15,
			textAlign: "center",
			fontFamily: "Poppins-Medium",
			fontSize: 8,
			color: "#000",
			fontWeight: "500",
			position: "absolute"
	},
	unViajeSoadoTypo: {
			width: 291,
			fontFamily: "Roboto-Regular",
			color: "#000",
			textAlign: "left",
			fontSize: 10,
			position: "absolute"
	},
	unsplash4IconLayout: {
			height: 202,
			position: "absolute"
	},
	groupLayout2: {
			height: 25,
			width: 23,
			position: "absolute"
	},
	groupBorder: {
			opacity: 0.8,
			borderWidth: 0.5,
			backgroundColor: "#f2f2f2",
			borderColor: "#7e5f5b",
			borderStyle: "solid",
			borderRadius: 10,
			left: 0,
			top: 0
	},
	textLayout1: {
			width: 18,
			left: 62,
			height: 10,
			color: "#000",
			textAlign: "left",
			fontSize: 10
	},
	textLayout: {
			width: 12,
			height: 10,
			color: "#000",
			textAlign: "left",
			fontSize: 10,
			position: "absolute"
	},
	groupLayout: {
			height: 50,
			position: "absolute"
	},
	iconPosition3: {
			top: 409,
			position: "absolute"
	},
	iconLayout: {
			height: 30,
			width: 30,
			top: 10,
			position: "absolute"
	},
	iconPosition2: {
			left: 244,
			height: 10,
			width: 10,
			position: "absolute"
	},
	verPosition: {
			width: 101,
			left: 47,
			position: "absolute"
	},
	unsplash4Layout: {
			height: 245,
			top: 1241,
			width: 319,
			left: 36,
			borderRadius: 10,
			position: "absolute"
	},
	image34IconLayout: {
			left: 336,
			height: 13,
			width: 13
	},
	image5IconLayout: {
			left: 51,
			height: 15,
			width: 15
	},
	iconlyboldchatLayout: {
			left: "24.87%",
			right: "71.67%",
			width: "3.46%",
			height: "1.6%",
			maxHeight: "100%",
			overflow: "hidden",
			position: "absolute",
			maxWidth: "100%"
	},
	manhattanTypo: {
			left: 256,
			textAlign: "center",
			fontFamily: "Poppins-Medium",
			fontSize: 8,
			color: "#000",
			fontWeight: "500",
			position: "absolute"
	},
	groupPosition: {
			left: 325,
			height: 25,
			width: 23,
			position: "absolute"
	},
	textPosition1: {
			left: 67,
			width: 18
	},
	textPosition: {
			left: 112,
			width: 12
	},
	iconPosition: {
			top: 1833,
			position: "absolute"
	},
	textTypo: {
			top: 1835,
			fontWeight: "700",
			height: 10,
			color: "#000",
			fontFamily: "Roboto-Bold",
			textAlign: "left",
			fontSize: 10,
			position: "absolute"
	},
	blackBase21: {
			height: 41,
			top: 0
	},
	icon: {
			height: "100%",
			width: "100%"
	},
	wrapper: {
			left: "87.18%",
			top: "9.12%",
			right: "7.38%",
			bottom: "87.54%",
			width: "5.44%",
			height: "3.34%",
			position: "absolute"
	},
	timelinePublicidadChild: {
			top: 80,
			width: 299,
			height: 34,
			borderColor: "#7e5f5b",
			borderRadius: 10,
			borderWidth: 1,
			borderStyle: "solid",
			left: 28,
			position: "absolute",
			backgroundColor: "#ffffff"
	},
	iconlybrokensearch: {
			height: "1.23%",
			width: "2.67%",
			top: "11.02%",
			right: "19.64%",
			bottom: "87.75%",
			left: "77.69%",
			position: "absolute"
	},
	buscar: {
			top: 91,
			left: 44,
			fontFamily: "Roboto-Medium",
			color: "#7e5f5b",
			opacity: 0.5,
			textAlign: "left",
			fontWeight: "500",
			fontSize: 10,
			position: "absolute"
	},
	marca2Icon: {
			top: 41,
			left: 128,
			width: 150,
			height: 28,
			position: "absolute"
	},
	timelinePublicidadItem: {
			top: 488
	},
	image36Icon: {
			left: 332,
			top: 766,
			position: "absolute"
	},
	verLos3: {
			top: 792
	},
	iconlyboldchat: {
			top: "90.52%",
			right: "74.23%",
			bottom: "7.88%",
			left: "22.31%"
	},
	image35Icon: {
			top: 765,
			left: 47,
			position: "absolute"
	},
	cancnMexico: {
			top: 514,
			left: 277,
			fontFamily: "Poppins-Medium",
			fontSize: 8,
			textAlign: "center",
			fontWeight: "500"
	},
	image2Icon: {
			top: 515,
			left: 265,
			height: 10,
			width: 10,
			position: "absolute"
	},
	unsplash4uojmedcwi8Icon: {
			left: 0,
			top: 0
	},
	chrisUil: {
			left: 29,
			textAlign: "center",
			color: "#000",
			position: "absolute",
			fontSize: 10,
			fontFamily: "Poppins-SemiBold",
			top: 0
	},
	hace2hr: {
			left: 29
	},
	unsplash4uojmedcwi8Parent: {
			top: 498,
			height: 27
	},
	unaTardeEsplndida: {
			top: 743,
			left: 52,
			fontFamily: "Roboto-Regular"
	},
	unsplash4Qfycgpc4cIcon: {
			top: 530,
			width: 319,
			height: 202,
			borderRadius: 10,
			left: 36
	},
	groupChild: {
			height: 25,
			width: 23,
			position: "absolute"
	},
	rectangleWrapper: {
			left: 0,
			top: 0
	},
	image17Icon: {
			top: 5,
			left: 4,
			position: "absolute"
	},
	groupParent: {
			top: 698,
			left: 322
	},
	text: {
			top: 767,
			fontWeight: "700",
			fontFamily: "Roboto-Bold",
			position: "absolute"
	},
	text1: {
			left: 101,
			fontWeight: "700",
			fontFamily: "Roboto-Bold",
			top: 766
	},
	image18: {
			top: 520,
			left: 188,
			position: "absolute"
	},
	groupItem: {
			width: 50,
			height: 50,
			opacity: 0.8,
			borderWidth: 0.5,
			backgroundColor: "#f2f2f2",
			borderColor: "#7e5f5b",
			borderStyle: "solid",
			borderRadius: 10,
			left: 0,
			top: 0
	},
	groupView: {
			top: 606,
			left: 170,
			width: 50,
			height: 50
	},
	image19Icon: {
			top: 611,
			left: 175,
			width: 40,
			height: 40,
			position: "absolute"
	},
	imageIcon: {
			top: 130
	},
	unsplash4Qfycgpc4cIcon1: {
			width: 319,
			height: 202,
			borderRadius: 10,
			left: 0,
			top: 0
	},
	unsplashmxfjwuffdi4Icon: {
			left: 718,
			width: 319,
			height: 202,
			borderRadius: 10,
			top: 0
	},
	unsplash76dgucmupv4Icon: {
			left: 366,
			width: 319,
			height: 202,
			borderRadius: 10,
			top: 0
	},
	groupContainer: {
			top: 171,
			left: 287
	},
	unsplash4Qfycgpc4cParent: {
			top: 173,
			maxHeight: 202,
			left: 35,
			width: "100%"
	},
	image3Icon: {
			height: 15,
			width: 15,
			left: 47
	},
	buenosAiresArgentina: {
			top: 155,
			left: 255,
			fontFamily: "Poppins-Medium",
			fontSize: 8,
			textAlign: "center",
			fontWeight: "500"
	},
	unsplashhhcfgcgwqmyParent: {
			top: 140,
			width: 94,
			height: 27,
			left: 47,
			position: "absolute"
	},
	holaAmigosRecien: {
			top: 391,
			left: 47
	},
	verLos57: {
			top: 430
	},
	image14Icon: {
			left: 22
	},
	image16Icon: {
			width: 50,
			height: 50,
			left: 0,
			top: 0
	},
	image15Icon: {
			left: 35
	},
	image14Parent: {
			top: 355,
			left: 153,
			width: 65
	},
	iconlyboldchat1: {
			top: "48.34%",
			right: "74.49%",
			bottom: "50.06%",
			left: "22.05%"
	},
	text2: {
			width: 18,
			left: 62,
			height: 10,
			color: "#000",
			textAlign: "left",
			fontSize: 10,
			fontFamily: "Poppins-SemiBold",
			fontWeight: "600"
	},
	text3: {
			top: 408,
			left: 102,
			fontFamily: "Poppins-SemiBold",
			fontWeight: "600"
	},
	image1Icon: {
			top: 156
	},
	image34Icon: {
			left: 328,
			height: 13,
			width: 13
	},
	imageIcon1: {
			top: 1199
	},
	image38Icon: {
			top: 1500,
			left: 318,
			position: "absolute"
	},
	unsplashhhcfgcgwqmyIcon1: {
			top: 4,
			left: 0
	},
	hace3hr: {
			left: 28,
			top: 15
	},
	unsplashhhcfgcgwqmyGroup: {
			top: 1205,
			height: 27
	},
	visitarSitioHttpsmercado: {
			top: 1503,
			left: 58
	},
	unsplash4Qfycgpc4c: {
			borderColor: "#000",
			borderWidth: 1,
			borderStyle: "solid",
			top: 1241
	},
	mercadoLibre1Icon: {
			top: 1209,
			borderRadius: 50,
			left: 47
	},
	publicidad: {
			top: 1226,
			left: 292,
			fontFamily: "Poppins-Medium",
			fontSize: 8,
			textAlign: "center",
			fontWeight: "500"
	},
	timelinePublicidadChild1: {
			top: 841
	},
	image34Icon1: {
			top: 1117,
			position: "absolute"
	},
	image5Icon: {
			top: 1117,
			position: "absolute"
	},
	iconlyboldchat2: {
			top: "132.35%",
			bottom: "-33.95%"
	},
	manhattanNuevaYork: {
			top: 867
	},
	image2Icon1: {
			top: 868
	},
	unsplash4uojmedcwi8Group: {
			top: 851,
			height: 27
	},
	fotnQueSacamos: {
			top: 1092,
			left: 52,
			fontFamily: "Roboto-Regular"
	},
	unsplash4Qfycgpc4cIcon3: {
			top: 883,
			width: 319,
			height: 202,
			borderRadius: 10,
			left: 36
	},
	verLos5: {
			top: 1136,
			color: "#000",
			fontFamily: "Roboto-Bold",
			fontWeight: "600",
			width: 101,
			opacity: 0.5,
			textAlign: "left",
			fontSize: 10
	},
	groupPressable: {
			top: 1054
	},
	text4: {
			top: 1119,
			fontWeight: "700",
			height: 10,
			color: "#000",
			fontFamily: "Roboto-Bold",
			textAlign: "left",
			fontSize: 10,
			position: "absolute"
	},
	text5: {
			top: 1119,
			fontWeight: "700",
			height: 10,
			color: "#000",
			fontFamily: "Roboto-Bold",
			textAlign: "left",
			fontSize: 10,
			position: "absolute"
	},
	timelinePublicidadChild3: {
			top: 1557
	},
	image34Icon2: {
			left: 336,
			height: 13,
			width: 13
	},
	image5Icon1: {
			left: 51,
			height: 15,
			width: 15
	},
	iconlyboldchat3: {
			top: "217.18%",
			bottom: "-118.78%"
	},
	manhattanNuevaYork1: {
			top: 1583
	},
	image2Icon2: {
			top: 1584
	},
	unsplash4uojmedcwi8Container: {
			top: 1567,
			height: 27
	},
	unViajeSoado: {
			top: 1808,
			left: 52,
			fontFamily: "Roboto-Regular"
	},
	unsplash4Qfycgpc4cIcon7: {
			top: 1599,
			width: 319,
			height: 202,
			borderRadius: 10,
			left: 36
	},
	verLos51: {
			top: 1852,
			color: "#000",
			fontFamily: "Roboto-Bold",
			fontWeight: "600",
			width: 101,
			opacity: 0.5,
			textAlign: "left",
			fontSize: 10
	},
	groupParent1: {
			top: 1770
	},
	text6: {
			left: 67,
			width: 18
	},
	text7: {
			left: 112,
			width: 12
	},
	groupIcon: {
			top: 774,
			height: 75
	},
	timelinePublicidad: {
			flex: 1,
			maxWidth: "100%",
			backgroundColor: "#ffffff",
			width: "100%"
	}
});
        				
export default Home;
        				