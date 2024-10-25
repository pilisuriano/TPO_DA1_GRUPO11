import * as React from "react";
import {Image, StyleSheet, Text, Pressable, View} from "react-native";
import { useNavigation } from '@react-navigation/native';

const SEGUIDOS = () => {
    const navigation = useNavigation();
  	
  	return (
    		<View style={[styles.seguidos, styles.iconLayout2]}>
      			<Text style={styles.seguidos1}>Seguidos</Text>
      			<Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('perfil')}>
        				<Image style={[styles.icon, styles.iconLayout2]} resizeMode="cover" source={require("../../assets/images/Arrow---Left-2.png")} />
      			</Pressable>
      			<Text style={styles.hoy}>Hoy</Text>
      			<Image style={[styles.unsplashditylc26zviIcon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_DItYlc26zVI.png")} />
      			<Image style={[styles.unsplashsibvworyqs0Icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_sibVwORYqs0.png")} />
      			<Image style={[styles.unsplashymoYcN2oIcon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_ymo_yC_N_2o.png")}/>
      			<Image style={[styles.unsplashako5dg2fqsmIcon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_ako5dG2fqSM.png")} />
      			<Image style={[styles.unsplashkipqvvtoc1sIcon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_KIPqvvTOC1s.png")} />
      			<Image style={[styles.unsplash4uojmedcwi8Icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_4uojMEdcwI8.png")} />
      			<Image style={[styles.unsplashwnolnjo7ts8Icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_WNoLnJo7tS8.png")} />
      			<Image style={[styles.unsplashbgg8xpgwVqIcon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_bgg8xPGw_vQ.png")} />
      			<Text style={[styles.patrickAdams, styles.chrisTypo]}>Patrick Adams</Text>
      			<Text style={[styles.patrickMill, styles.chrisTypo]}>Patrick Mill</Text>
      			<Text style={[styles.segunUdam, styles.chrisTypo]}>Segun Udam</Text>
      			<Text style={[styles.johnSmith, styles.chrisTypo]}>John Smith</Text>
      			<Text style={[styles.chrisLam, styles.chrisTypo]}>Chris Lam</Text>
      			<Text style={[styles.chrisUil, styles.chrisTypo]}>Chris Uil</Text>
      			<Text style={[styles.chrisMeloni, styles.chrisTypo]}>{`Chris Meloni `}</Text>
      			<Text style={[styles.luisIbaez, styles.chrisTypo]}>Luis Ibañez</Text>
      			<Image style={[styles.image20Icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/image 20.png")} />
      			<Image style={[styles.image22Icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/image 20.png")} />
      			<Image style={[styles.image23Icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/image 20.png")} />
      			<Image style={[styles.image21Icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/image 20.png")}/>
      			<Image style={[styles.image24Icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/image 20.png")} />
      			<Image style={[styles.image25Icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/image 20.png")} />
      			<Image style={[styles.image26Icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/image 20.png")} />
      			<Image style={[styles.image27Icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/image 20.png")} />
    		</View>);
};

const styles = StyleSheet.create({
  	iconLayout2: {
    		overflow: "hidden",
    		width: "100%"
  	},
  	blackBase21Position: {
    		width: 390,
    		left: 0,
    		position: "absolute"
  	},
  	iconLayout1: {
    		height: 46,
    		width: 46,
    		left: 41,
    		position: "absolute"
  	},
  	chrisTypo: {
    		textAlign: "center",
    		fontSize: 15,
    		left: 98,
    		color: "#000",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		position: "absolute"
  	},
  	iconLayout: {
    		height: 33,
    		width: 33,
    		left: 320,
    		position: "absolute"
  	},
  	blackBase21: {
    		top: 0,
    		height: 41
  	},
  	seguidos1: {
    		top: 68,
    		left: 164,
    		fontSize: 18,
    		width: 87,
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
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
  	hoy: {
    		top: 114,
    		fontSize: 14,
    		fontWeight: "500",
    		fontFamily: "Poppins-Medium",
    		left: 41,
    		textAlign: "left",
    		color: "#000",
    		position: "absolute"
  	},
  	unsplashditylc26zviIcon: {
    		top: 147
  	},
  	unsplashsibvworyqs0Icon: {
    		top: 419
  	},
  	unsplashymoYcN2oIcon: {
    		top: 283
  	},
  	unsplashako5dg2fqsmIcon: {
    		top: 555
  	},
  	unsplashkipqvvtoc1sIcon: {
    		top: 215
  	},
  	unsplash4uojmedcwi8Icon: {
    		top: 487
  	},
  	unsplashwnolnjo7ts8Icon: {
    		top: 351
  	},
  	unsplashbgg8xpgwVqIcon: {
    		top: 623
  	},
  	patrickAdams: {
    		top: 158
  	},
  	patrickMill: {
    		top: 430
  	},
  	segunUdam: {
    		top: 294
  	},
  	johnSmith: {
    		top: 566
  	},
  	chrisLam: {
    		top: 226
  	},
  	chrisUil: {
    		top: 498
  	},
  	chrisMeloni: {
    		top: 362
  	},
  	luisIbaez: {
    		top: 634
  	},
  	image20Icon: {
    		top: 153
  	},
  	image22Icon: {
    		top: 289
  	},
  	image23Icon: {
    		top: 357
  	},
  	image21Icon: {
    		top: 221
  	},
  	image24Icon: {
    		top: 425
  	},
  	image25Icon: {
    		top: 493
  	},
  	image26Icon: {
    		top: 561
  	},
  	image27Icon: {
    		top: 629
  	},
  	seguidosChild: {
    		top: 775,
    		height: 75
  	},
  	seguidos: {
    		backgroundColor: "#fff",
    		flex: 1,
    		height: 844
  	}
});

export default SEGUIDOS;
