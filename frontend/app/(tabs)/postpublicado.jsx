import * as React from "react";
import {StyleSheet, View, Image, Text, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const POSTPUBLICADO = () => {
    const navigation = useNavigation();
	const { t } = useTranslation();

  	return (
    		<View style={styles.postPublicado}>
      			<View style={[styles.postPublicadoChild, styles.postLayout]} />
      			<View style={[styles.postPublicadoItem, styles.postLayout]} />
      			<View style={[styles.postPublicadoInner, styles.postLayout]} />
      			<Text style={[styles.mikeJohns, styles.mikeJohnsTypo]}>Mike Johns</Text>
      			<Text style={[styles.lucianoReyes, styles.mikeJohnsTypo]}>Luciano Reyes</Text>
      			<Text style={[styles.mariaSurez, styles.mikeJohnsTypo]}>Maria Suárez</Text>
      			<Text style={[styles.hace10Min, styles.hace2HrTypo]}>Hace 10 min</Text>
      			<Text style={[styles.hace2Hr, styles.hace2HrTypo]}>Hace 2 hr</Text>
      			<Text style={[styles.hace3Hr, styles.hace2HrTypo]}>Hace 3 hr</Text>
      			<Text style={[styles.bienvenido, styles.bienvenidoTypo]}>¡Bienvenido!</Text>
      			<Text style={[styles.bienvenidoAmigoAyer, styles.bienvenidoTypo]}>Bienvenido amigo. Ayer justo hablamos de vos con Micalea. ¿Como está todo por Buenos Aires?</Text>
        				<Text style={[styles.preciosoMiHijo, styles.bienvenidoTypo]}>¡Precioso mi hijo!</Text>
        				<Image style={[styles.unsplash2egnqazbamkIcon, styles.iconLayout2]} resizeMode="cover" source={require("../../assets/images/unsplash_2EGNqazbAMk.png")} />
        				<Image style={[styles.unsplashridxdghg7pwIcon, styles.iconPosition]} resizeMode="cover" source={require("../../assets/images/unsplash_RiDxDgHg7pw.png")} />
        				<Image style={[styles.unsplash6rrIp06p4Icon, styles.iconPosition]} resizeMode="cover" source={require("../../assets/images/unsplash__6rR_iP06p4.png")} />
        				<Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('perfil')}>
          					<Image style={[styles.icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/Arrow---Left-2.png")} />
        				</Pressable>
        				<Text style={[styles.comentarios, styles.mikeJohnsTypo]}>{t('comments')}</Text>
        				<Image style={[styles.imageIcon, styles.iconPosition]} resizeMode="cover" source={require("../../assets/images/image.png")} />
        				<Image style={styles.image34Icon} resizeMode="cover" source={require("../../assets/images/image 34.png")} />
        				<Image style={[styles.imageIcon, styles.iconPosition]} resizeMode="cover" source={require("../../assets/images/Rectangle 232.png")} />
        				<View style={styles.unsplashhhcfgcgwqmyParent}>
          					<Image style={[styles.unsplashhhcfgcgwqmyIcon, styles.groupChildPosition]} resizeMode="cover" source={require("../../assets/images/unsplash_hhcFGCGWQMY.png")} />
          					<Pressable style={styles.martinSurez} onPress={()=>{}}>
            						<Text style={styles.martinSurez1}>Martin Suárez</Text>
          					</Pressable>
          					<Text style={[styles.hace1hr, styles.hace1hrTypo]}>Hace 1hr</Text>
        				</View>
        				<Text style={[styles.elMejorMsico, styles.textTypo]}>¡El mejor músico del mundo! Tour 2024 allá voy.</Text>
        				<View style={[styles.groupParent, styles.groupLayout]}>
          					<View style={[styles.rectangleWrapper, styles.groupLayout]}>
            						<View style={[styles.groupChild, styles.groupChildBorder]} />
          					</View>
          					<Image style={[styles.image17Icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/image 17.png")} />
        				</View>
        				<Image style={[styles.iconlyboldchat, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/Chat.png")} />
        				<Text style={[styles.text, styles.textTypo]}>4</Text>
        				<Text style={[styles.text1, styles.text1Position]}>3</Text>
        				<Text style={[styles.estadioMasMonumental, styles.hace1hrTypo]}>Estadio Mas Monumental, Buenos Aires, Argentina</Text>
        				<Image style={styles.image1Icon} resizeMode="cover" source={require("../../assets/images/image 1.png")} />
        				<Image style={[styles.image3Icon, styles.text1Position]} resizeMode="cover" source={require("../../assets/images/image 3.png")} />
        				<View style={[styles.rectangleView, styles.groupChildBorder]} />
        				<Text style={styles.escribeUnComentario}>Escribe un comentario...</Text>
        				<Image style={styles.image42Icon} resizeMode="cover" source={require("../../assets/images/image 42.png")} />
        				<Image style={styles.unsplash4Qfycgpc4cIcon} resizeMode="cover" source={require("../../assets/images/unsplash_4_QFycgpC4c.png")} />
        				</View>);
      			};
      			
      			const styles = StyleSheet.create({
        				postLayout: {
          					height: 74,
          					width: 356,
          					borderColor: "#bebdbd",
          					borderStyle: "solid",
          					borderRadius: 14,
          					left: 17,
          					borderWidth: 1,
          					position: "absolute",
          					backgroundColor: "#fff"
        				},
        				groupIconPosition: {
          					width: 390,
          					left: 0,
          					position: "absolute"
        				},
        				mikeJohnsTypo: {
          					textAlign: "left",
          					color: "#000",
          					fontFamily: "Poppins-SemiBold",
          					fontWeight: "600",
          					position: "absolute"
        				},
        				hace2HrTypo: {
          					fontFamily: "Poppins-Medium",
          					opacity: 0.8,
          					fontWeight: "500",
          					fontSize: 10,
          					textAlign: "left",
          					color: "#000",
          					position: "absolute"
        				},
        				bienvenidoTypo: {
          					width: 228,
          					fontFamily: "Poppins-Regular",
          					fontSize: 9,
          					opacity: 0.8,
          					textAlign: "left",
          					color: "#000",
          					left: 73,
          					position: "absolute"
        				},
        				iconLayout2: {
          					height: 40,
          					width: 40
        				},
        				iconPosition: {
          					left: 27,
          					position: "absolute"
        				},
        				iconLayout1: {
          					maxHeight: "100%",
          					maxWidth: "100%",
          					overflow: "hidden"
        				},
        				groupChildPosition: {
          					left: 0,
          					top: 0
        				},
        				hace1hrTypo: {
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
        				groupLayout: {
          					height: 25,
          					width: 23
        				},
        				groupChildBorder: {
          					borderColor: "#7e5f5b",
          					borderRadius: 10,
          					borderStyle: "solid",
          					position: "absolute"
        				},
        				iconLayout: {
          					height: 15,
          					width: 15
        				},
        				text1Position: {
          					top: 391,
          					position: "absolute"
        				},
        				postPublicadoChild: {
          					top: 519
        				},
        				postPublicadoItem: {
          					top: 611
        				},
        				postPublicadoInner: {
          					top: 703
        				},
        				blackBase21: {
          					height: 41,
          					top: 0
        				},
        				mikeJohns: {
          					top: 535,
          					fontSize: 13,
          					left: 73,
          					color: "#000"
        				},
        				lucianoReyes: {
          					top: 617,
          					fontSize: 13,
          					left: 73,
          					color: "#000"
        				},
        				mariaSurez: {
          					top: 714,
          					fontSize: 13,
          					left: 73,
          					color: "#000"
        				},
        				hace10Min: {
          					top: 542,
          					left: 307,
          					opacity: 0.8
        				},
        				hace2Hr: {
          					top: 622,
          					left: 313,
          					opacity: 0.8
        				},
        				hace3Hr: {
          					top: 716,
          					left: 314,
          					opacity: 0.8
        				},
        				bienvenido: {
          					top: 555
        				},
        				bienvenidoAmigoAyer: {
          					top: 637
        				},
        				preciosoMiHijo: {
          					top: 730
        				},
        				unsplash2egnqazbamkIcon: {
          					top: 536,
          					left: 28,
          					position: "absolute"
        				},
        				unsplashridxdghg7pwIcon: {
          					top: 623,
          					height: 40,
          					width: 40
        				},
        				unsplash6rrIp06p4Icon: {
          					top: 717,
          					height: 40,
          					width: 40
        				},
        				icon: {
          					height: "100%",
          					width: "100%",
          					maxHeight: "100%",
          					maxWidth: "100%"
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
          					left: 142,
          					fontSize: 18,
          					width: 124
        				},
        				imageIcon: {
          					top: 109,
          					borderRadius: 20,
          					width: 335,
          					height: 338
        				},
        				image34Icon: {
          					top: 388,
          					left: 332,
          					width: 13,
          					height: 13,
          					position: "absolute"
        				},
        				unsplashhhcfgcgwqmyIcon: {
          					width: 22,
          					height: 22,
          					position: "absolute"
        				},
        				martinSurez1: {
          					textAlign: "center",
          					fontSize: 10,
          					color: "#000",
          					fontFamily: "Poppins-SemiBold",
          					fontWeight: "600"
        				},
        				martinSurez: {
          					left: 29,
          					top: 0,
          					position: "absolute"
        				},
        				hace1hr: {
          					top: 15,
          					left: 29
        				},
        				unsplashhhcfgcgwqmyParent: {
          					top: 119,
          					left: 46,
          					width: 99,
          					height: 27,
          					position: "absolute"
        				},
        				elMejorMsico: {
          					top: 370,
          					fontFamily: "Roboto-Regular",
          					width: 291,
          					left: 45,
          					position: "absolute"
        				},
        				groupChild: {
          					backgroundColor: "#f2f2f2",
          					borderWidth: 0.5,
          					height: 25,
          					width: 23,
          					opacity: 0.8,
          					left: 0,
          					top: 0
        				},
        				rectangleWrapper: {
          					left: 0,
          					top: 0,
          					position: "absolute"
        				},
        				image17Icon: {
          					top: 5,
          					left: 4,
          					position: "absolute"
        				},
        				groupParent: {
          					top: 322,
          					left: 321,
          					position: "absolute"
        				},
        				iconlyboldchat: {
          					height: "1.6%",
          					width: "3.46%",
          					top: "46.33%",
          					right: "76.03%",
          					bottom: "52.07%",
          					left: "20.51%",
          					position: "absolute"
        				},
        				text: {
          					top: 390,
          					left: 62,
          					width: 18,
          					height: 10,
          					fontFamily: "Poppins-SemiBold",
          					fontWeight: "600",
          					fontSize: 10,
          					position: "absolute"
        				},
        				text1: {
          					left: 96,
          					width: 12,
          					height: 10,
          					fontSize: 10,
          					textAlign: "left",
          					color: "#000",
          					fontFamily: "Poppins-SemiBold",
          					fontWeight: "600"
        				},
        				estadioMasMonumental: {
          					top: 122,
          					left: 242,
          					width: 108
        				},
        				image1Icon: {
          					top: 130,
          					left: 232,
          					width: 10,
          					height: 10,
          					position: "absolute"
        				},
        				image3Icon: {
          					left: 47,
          					height: 15,
          					width: 15
        				},
        				rectangleView: {
          					top: 465,
          					width: 299,
          					height: 34,
          					left: 45,
          					borderWidth: 1,
          					borderColor: "#7e5f5b",
          					backgroundColor: "#fff"
        				},
        				escribeUnComentario: {
          					top: 476,
          					left: 57,
          					fontFamily: "Roboto-Medium",
          					color: "#7e5f5b",
          					opacity: 0.5,
          					fontWeight: "500",
          					fontSize: 10,
          					textAlign: "left",
          					position: "absolute"
        				},
        				image42Icon: {
          					top: 475,
          					left: 318,
          					width: 14,
          					height: 14,
          					position: "absolute"
        				},
        				unsplash4Qfycgpc4cIcon: {
          					top: 152,
          					left: 36,
          					width: 319,
          					height: 202,
          					borderRadius: 10,
          					position: "absolute"
        				},
        				groupIcon: {
          					top: 775,
          					height: 75
        				},
        				postPublicado: {
          					flex: 1,
          					height: 844,
          					overflow: "hidden",
          					backgroundColor: "#fff",
          					width: "100%"
        				}
      			});
      			
      			export default POSTPUBLICADO;
      			