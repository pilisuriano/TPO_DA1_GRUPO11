import * as React from "react";
import {Image, StyleSheet, View, Text, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';

const POSTSFAVORITOS = () => {
    const navigation = useNavigation();
  	
  	return (
    		<View style={styles.postsFavoritos}>
      			<Image style={[styles.unsplashxejossdcnr8Icon, styles.iconLayout3]} resizeMode="cover" source={require("../../assets/images/unsplash_xEJoSsDCnR8.png")} />
      			<View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
        				<View style={[styles.groupChild, styles.groupChildPosition]} />
        				<View style={styles.groupChildPosition}>
          					<View style={[styles.groupChild, styles.groupChildPosition]} />
        				</View>
      			</View>
      			<Image style={[styles.image37Icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/image 37.png")} />
      			<Text style={styles.misPostsFavoritos}>Mis Posts Favoritos</Text>
      			<Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('settings')}>
        				<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/Arrow---Left-2.png")} />
      			</Pressable>
      			<Image style={[styles.unsplashqbf59tu077qIcon, styles.iconLayout3]} resizeMode="cover" source={require("../../assets/images/unsplash_qbf59TU077Q.png")} />
      			<View style={[styles.rectangleGroup, styles.rectangleParentLayout]}>
        				<View style={[styles.groupChild, styles.groupChildPosition]} />
        				<View style={styles.groupChildPosition}>
          					<View style={[styles.groupChild, styles.groupChildPosition]} />
        				</View>
      			</View>
      			<Image style={[styles.image35Icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/image 37.png")} />
      			<Pressable style={[styles.image, styles.imagePosition]} onPress={() => navigation.navigate('userfoundcomment')}>
        				<Image style={[styles.icon1, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/imageasado.png")} />
      			</Pressable>
      			<View style={[styles.groupView, styles.groupViewPosition]}>
        				<View style={[styles.groupChild, styles.groupChildPosition]} />
        				<View style={styles.groupChildPosition}>
          					<View style={[styles.groupChild, styles.groupChildPosition]} />
        				</View>
      			</View>
      			<Image style={[styles.image33Icon, styles.iconPosition]} resizeMode="cover" source={require("../../assets/images/image 37.png")} />
      			<Image style={[styles.unsplashclv9dfjlwacIcon, styles.imagePosition]} resizeMode="cover" source={require("../../assets/images/unsplash_Clv9DfJLwac.png")} />
      			<View style={[styles.rectangleParent1, styles.groupViewPosition]}>
        				<View style={[styles.groupChild, styles.groupChildPosition]} />
        				<View style={styles.groupChildPosition}>
          					<View style={[styles.groupChild, styles.groupChildPosition]} />
        				</View>
      			</View>
      			<Image style={[styles.image36Icon, styles.iconPosition]} resizeMode="cover" source={require("../../assets/images/image 37.png")} />
      			<Image style={[styles.unsplashq2b08qyxkc4Icon, styles.iconLayout3]} resizeMode="cover" source={require("../../assets/images/unsplash_Q2B08QyXKC4.png")} />
      			<View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
        				<View style={[styles.groupChild, styles.groupChildPosition]} />
        				<View style={styles.groupChildPosition}>
          					<View style={[styles.groupChild, styles.groupChildPosition]} />
        				</View>
      			</View>
      			<Image style={[styles.image34Icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/image 37.png")} />
      			<Image style={styles.postsFavoritosChild} resizeMode="cover" source={require("../../assets/images/Line 10.png")} />
    		</View>);
};

const styles = StyleSheet.create({
  	iconLayout3: {
    		height: 99,
    		width: 99,
    		borderRadius: 10,
    		position: "absolute"
  	},
  	rectangleParentLayout: {
    		height: 25,
    		width: 23,
    		position: "absolute"
  	},
  	groupChildPosition: {
    		left: 0,
    		top: 0,
    		height: 25,
    		width: 23,
    		position: "absolute"
  	},
  	iconLayout1: {
    		height: 15,
    		width: 15,
    		position: "absolute"
  	},
  	blackBase21Position: {
    		width: 390,
    		left: 0,
    		position: "absolute"
  	},
  	iconLayout: {
    		height: "100%",
    		width: "100%"
  	},
  	imagePosition: {
    		left: 41,
    		height: 99,
    		width: 99,
    		position: "absolute"
  	},
  	groupViewPosition: {
    		left: 110,
    		height: 25,
    		width: 23,
    		position: "absolute"
  	},
  	iconPosition: {
    		left: 114,
    		height: 15,
    		width: 15,
    		position: "absolute"
  	},
  	unsplashxejossdcnr8Icon: {
    		left: 151,
    		top: 257
  	},
  	groupChild: {
    		backgroundColor: "#f2f2f2",
    		borderStyle: "solid",
    		borderColor: "#7e5f5b",
    		borderWidth: 0.5,
    		opacity: 0.8,
    		borderRadius: 10
  	},
  	rectangleParent: {
    		left: 219,
    		width: 23,
    		top: 262
  	},
  	image37Icon: {
    		left: 223,
    		height: 15,
    		width: 15,
    		top: 267
  	},
  	blackBase21: {
    		height: 41,
    		top: 0,
    		width: 390
  	},
  	misPostsFavoritos: {
    		top: 70,
    		left: 120,
    		fontSize: 18,
    		fontWeight: "600",
    		fontFamily: "Poppins-SemiBold",
    		color: "#000",
    		textAlign: "left",
    		width: 175,
    		position: "absolute"
  	},
  	icon: {
    		maxWidth: "100%",
    		maxHeight: "100%",
    		overflow: "hidden"
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
  	unsplashqbf59tu077qIcon: {
    		left: 260,
    		top: 148
  	},
  	rectangleGroup: {
    		left: 328,
    		top: 153
  	},
  	image35Icon: {
    		left: 332,
    		top: 158
  	},
  	icon1: {
    		borderRadius: 10
  	},
  	image: {
    		top: 148
  	},
  	groupView: {
    		top: 153
  	},
  	image33Icon: {
    		top: 158
  	},
  	unsplashclv9dfjlwacIcon: {
    		borderRadius: 10,
    		top: 257
  	},
  	rectangleParent1: {
    		top: 262
  	},
  	image36Icon: {
    		top: 267
  	},
  	unsplashq2b08qyxkc4Icon: {
    		left: 150,
    		top: 148
  	},
  	rectangleParent2: {
    		top: 153,
    		left: 219,
    		width: 23
  	},
  	image34Icon: {
    		top: 158,
    		left: 223,
    		height: 15,
    		width: 15
  	},
  	postsFavoritosChild: {
    		top: 742,
    		left: 24,
    		width: 318,
    		height: 1,
    		position: "absolute"
  	},
  	postsFavoritosItem: {
    		top: 775,
    		height: 75
  	},
  	postsFavoritos: {
    		backgroundColor: "#fff",
    		flex: 1,
    		height: 844,
    		overflow: "hidden",
    		width: "100%"
  	}
});

export default POSTSFAVORITOS;
