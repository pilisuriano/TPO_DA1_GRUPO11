import * as React from "react";
import { useNavigation } from '@react-navigation/native';
import {Image, StyleSheet, View, Text, Pressable} from "react-native";

const SIGNIN = () => {
    const navigation = useNavigation();
  	
  	return (
    		<View style={[styles.signIn, styles.iconLayout]}>
                <Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('index')}>
                    <Image style={styles.icon} resizeMode="cover" source={require('../../assets/images/Arrow---Left-2.png')} />
                </Pressable>
      			<View style={styles.signInChild} />
      			<Text style={[styles.iniciaSesin, styles.listoTypo1]}>Inicia sesión</Text>
      			<Text style={[styles.correoElectrnico, styles.contraseaTypo]}>Correo electrónico</Text>
      			<Text style={[styles.contrasea, styles.contraseaTypo]}>Contraseña</Text>
      			<Pressable style={[styles.rectangleParent, styles.groupChildLayout]} onPress={()=>{}}>
        				<View style={[styles.groupChild, styles.groupChildLayout]} />
        				<Text style={[styles.listo, styles.listoTypo]}>Listo</Text>
      			</Pressable>
      			<View style={[styles.signInItem, styles.signLayout]} />
      			<Text style={[styles.martinsuarezhotmailcom, styles.textTypo]}>martinsuarez@hotmail.com</Text>
      			<View style={[styles.signInInner, styles.signLayout]} />
      			<Text style={[styles.text, styles.textTypo]}>**********</Text>
      			<Text style={[styles.ingresaTusCredenciales, styles.contraseaTypo]}>Ingresa tus credenciales</Text>
      			<Pressable style={styles.olvidSuContraseaContainer} onPress={()=>{}}>
        				<Text style={[styles.olvidSuContrasea, styles.contraseaTypo]}>¿Olvidó su contraseña?</Text>
          					</Pressable>
          					<Pressable style={styles.iconlylightOutlinearrowLF} onPress={()=>{}}>
            						<Image style={[styles.iconFlecha, styles.iconLayout]} resizeMode="cover" source="Iconly/Light-Outline/Arrow---Left-2.png" />
          					</Pressable>
          					<Pressable style={styles.iniciaSesinConGoogleParent} onPress={()=>{}}>
            						<Text style={[styles.iniciaSesinCon, styles.listoTypo]}>Inicia Sesión con Google</Text>
            						<Image style={styles.image41Icon} resizeMode="cover" source="image 41.png" />
          					</Pressable>
          					</View>);
        				};
        				
        				const styles = StyleSheet.create({
                            iconFlecha: {
                                flex: 1,
                                height: "100%",
                                width: "100%"
                                },
                            iconlylightOutlinearrowLF: {
                                height: 19,
                                width: "100%"
                            },
          					iconLayout: {
            						overflow: "hidden",
            						width: "100%"
          					},
          					groupChildPosition: {
            						left: 0,
            						top: 0
          					},
          					listoTypo1: {
            						textAlign: "left",
            						fontFamily: "Poppins-SemiBold",
            						fontWeight: "600"
          					},
          					contraseaTypo: {
            						opacity: 0.7,
            						fontFamily: "Poppins-Medium",
            						fontWeight: "500",
            						textAlign: "left",
            						color: "#000"
          					},
          					groupChildLayout: {
            						height: 49,
            						width: 321,
            						position: "absolute"
          					},
          					listoTypo: {
            						fontSize: 18,
            						position: "absolute"
          					},
          					signLayout: {
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
            						left: 53,
            						fontWeight: "500",
            						fontSize: 14,
            						textAlign: "left",
            						position: "absolute"
          					},
          					blackBase21: {
            						width: 390,
            						height: 41,
            						position: "absolute"
          					},
          					signInChild: {
            						top: 822,
            						left: 113,
            						backgroundColor: "#000",
            						width: 165,
            						height: 4,
            						borderRadius: 10,
            						position: "absolute"
          					},
          					iniciaSesin: {
            						top: 130,
            						fontSize: 20,
            						width: 215,
            						color: "#000",
            						left: 34,
            						position: "absolute"
          					},
          					correoElectrnico: {
            						top: 210,
            						width: 137,
            						fontSize: 14,
            						opacity: 0.7,
            						left: 34,
            						position: "absolute"
          					},
          					contrasea: {
            						top: 297,
            						width: 102,
            						fontSize: 14,
            						opacity: 0.7,
            						left: 34,
            						position: "absolute"
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
            						textAlign: "left",
            						fontFamily: "Poppins-SemiBold",
            						fontWeight: "600"
          					},
          					rectangleParent: {
            						top: 636,
            						left: 34
          					},
          					signInItem: {
            						top: 236,
            						borderStyle: "solid",
            						borderColor: "#7e5f5b",
            						borderWidth: 0.5
          					},
          					martinsuarezhotmailcom: {
            						top: 252,
            						color: "#1a1a1a"
          					},
          					signInInner: {
            						top: 323
          					},
          					text: {
            						top: 339,
            						color: "#000"
          					},
          					ingresaTusCredenciales: {
            						top: 165,
            						fontSize: 16,
            						width: 202,
            						left: 34,
            						position: "absolute"
          					},
          					olvidSuContrasea: {
            						width: 173,
            						fontSize: 14,
            						opacity: 0.7
          					},
          					olvidSuContraseaContainer: {
            						left: 183,
            						top: 384,
            						position: "absolute"
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
          					iniciaSesinCon: {
            						color: "#006175",
            						textAlign: "center",
            						width: 261,
            						fontFamily: "Poppins-Medium",
            						fontWeight: "500",
            						fontSize: 18,
            						left: 0,
            						top: 0
          					},
          					image41Icon: {
            						top: 3,
            						left: 251,
            						width: 20,
            						height: 20,
            						position: "absolute"
          					},
          					iniciaSesinConGoogleParent: {
            						top: 447,
            						width: 271,
            						height: 27,
            						left: 53,
            						position: "absolute"
          					},
          					signIn: {
            						backgroundColor: "#fff",
            						flex: 1,
            						height: 844
          					}
        				});
        				
        				export default SIGNIN;
        				