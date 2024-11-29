import * as React from "react";
import {Image, StyleSheet, Text, Pressable, View} from "react-native";
import { useNavigation } from '@react-navigation/native';

const CONFIGURACIONES = () => {
    const navigation = useNavigation();
  	
  	return (
    		<View style={styles.configuraciones}>
      			<Text style={styles.configuracin}>Configuración</Text>
      			<Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('perfil')}>
        				<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/Arrow---Left-2.png")} />
      			</Pressable>
      			<Pressable style={[styles.rectangleParent, styles.rectangleLayout]} onPress={() => navigation.navigate('index')}>
        				<View style={[styles.groupChild, styles.groupLayout]} />
        				<Text style={[styles.cerrarSesin, styles.cerrarSesinTypo]}>Cerrar Sesión</Text>
      			</Pressable>
      			<Pressable style={[styles.rectangleGroup, styles.rectangleLayout]} onPress={() => navigation.navigate('index')}>
        				<View style={[styles.groupItem, styles.groupLayout]} />
        				<Text style={[styles.eliminarCuenta, styles.cerrarSesinTypo]}>Eliminar Cuenta</Text>
      			</Pressable>
      			<Text style={[styles.activarModoOscuro, styles.cambiarIdiomaTypo]}>Activar Modo Oscuro</Text>
        				<Text style={[styles.misPostsFavoritos, styles.cambiarIdiomaTypo]}>Mis Posts Favoritos</Text>
      			<Text style={[styles.cambiarIdioma, styles.cambiarIdiomaTypo]}>Cambiar idioma</Text>
      			<Image style={styles.image31Icon} resizeMode="cover" source={require("../../assets/images/image 31.png")} />
      			<Pressable style={[styles.iconlylightOutlinearrowL1, styles.iconlylightPosition]} onPress={() => navigation.navigate('favoritos')}>
        				<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/Arrow---Right-2.png")} />
      			</Pressable>
      			<Image style={[styles.iconlylightOutlinearrowL2, styles.iconlylightPosition]} resizeMode="cover" source={require("../../assets/images/Arrow---Right-2.png")} />
      			</View>);
      			};
      			
      			const styles = StyleSheet.create({
        				blackBase21Position: {
          					width: 390,
          					left: 0,
          					position: "absolute"
        				},
        				iconLayout: {
          					maxHeight: "100%",
          					maxWidth: "100%",
          					overflow: "hidden"
        				},
        				rectangleLayout: {
          					height: 49,
          					width: 321
        				},
        				groupLayout: {
          					borderRadius: 10,
          					height: 49,
          					width: 321,
          					left: 0,
          					top: 0,
          					position: "absolute"
        				},
        				cerrarSesinTypo: {
          					color: "#fff",
          					fontFamily: "Poppins-SemiBold",
          					fontWeight: "600",
          					fontSize: 18,
          					position: "absolute"
        				},
        				cambiarIdiomaTypo: {
          					opacity: 0.7,
          					width: 272,
          					fontFamily: "Poppins-Medium",
          					fontWeight: "500",
          					fontSize: 14,
          					left: 40,
          					textAlign: "left",
          					color: "#000",
          					position: "absolute"
        				},
        				iconlylightPosition: {
          					right: "9.71%",
          					left: "87.62%",
          					height: "2.25%",
          					width: "2.67%",
          					position: "absolute"
        				},
        				blackBase21: {
          					height: 41,
          					top: 0,
          					width: 390
        				},
        				configuracin: {
          					top: 67,
          					left: 134,
          					width: 149,
          					textAlign: "left",
          					color: "#000",
          					fontFamily: "Poppins-SemiBold",
          					fontWeight: "600",
          					fontSize: 18,
          					position: "absolute"
        				},
        				icon: {
          					height: "100%",
          					width: "100%",
          					maxHeight: "100%",
          					maxWidth: "100%"
        				},
        				iconlylightOutlinearrowL: {
          					left: "7.73%",
          					top: "8.87%",
          					right: "89.6%",
          					bottom: "88.88%",
          					height: "2.25%",
          					width: "2.67%",
          					position: "absolute"
        				},
        				configuracionesChild: {
          					top: 742,
          					left: 38,
          					width: 318,
          					height: 1,
          					position: "absolute"
        				},
        				groupChild: {
          					backgroundColor: "#006175"
        				},
        				cerrarSesin: {
          					top: 11,
          					left: 98,
          					textAlign: "left"
        				},
        				rectangleParent: {
          					top: 606,
          					left: 40,
          					width: 321,
          					position: "absolute"
        				},
        				groupItem: {
          					backgroundColor: "#bb4426"
        				},
        				eliminarCuenta: {
          					textAlign: "center",
          					display: "flex",
          					alignItems: "center",
          					justifyContent: "center",
          					height: 49,
          					width: 321,
          					left: 0,
          					color: "#fff",
          					top: 0
        				},
        				rectangleGroup: {
          					top: 662,
          					left: 40,
          					width: 321,
          					position: "absolute"
        				},
        				activarModoOscuro: {
          					top: 137
        				},
        				misPostsFavoritos: {
          					top: 198
        				},
        				cambiarIdioma: {
          					top: 250
        				},
        				image31Icon: {
          					top: 125,
          					left: 312,
          					width: 45,
          					height: 45,
          					position: "absolute"
        				},
        				iconlylightOutlinearrowL1: {
          					top: "24.38%",
          					bottom: "73.36%"
        				},
        				iconlylightOutlinearrowL2: {
          					top: "30.42%",
          					bottom: "67.33%",
          					maxHeight: "100%",
          					maxWidth: "100%",
          					overflow: "hidden"
        				},
        				configuracionesItem: {
          					top: 775,
          					height: 75
        				},
        				configuraciones: {
          					backgroundColor: "#fff",
          					flex: 1,
          					height: 844,
          					overflow: "hidden",
          					width: "100%"
        				}
      			});
      			
      			export default CONFIGURACIONES;
      			