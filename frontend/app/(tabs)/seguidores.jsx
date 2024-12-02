import * as React from "react";
import {Image, StyleSheet, Text, Pressable, View} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const SIGUIDORES = () => {
    const navigation = useNavigation();
	const { t } = useTranslation();
  	
  	return (
    		<View style={[styles.siguidores, styles.iconLayout2]}>
      			<Text style={styles.seguidores}>{t('followers')}</Text>
      			<Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('perfil')}>
        				<Image style={[styles.icon, styles.iconLayout2]} resizeMode="cover" source={require("../../assets/images/Arrow---Left-2.png")} />
      			</Pressable>
      			<Text style={styles.hoy}>Hoy</Text>
      			<Image style={[styles.unsplashditylc26zviIcon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_DItYlc26zVI.png")} />
      			<Image style={[styles.unsplashsibvworyqs0Icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_sibVwORYqs0.png")} />
      			<Image style={[styles.unsplashymoYcN2oIcon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_ymo_yC_N_2o.png")} />
      			<Image style={[styles.unsplashako5dg2fqsmIcon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_ako5dG2fqSM.png")}/>
      			<Image style={[styles.unsplashkipqvvtoc1sIcon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_KIPqvvTOC1s.png")} />
      			<Image style={[styles.unsplash4uojmedcwi8Icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_4uojMEdcwI8.png")} />
      			<Image style={[styles.unsplashwnolnjo7ts8Icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_WNoLnJo7tS8.png")} />
      			<Image style={[styles.unsplashbgg8xpgwVqIcon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_bgg8xPGw_vQ.png")} />
      			<Text style={[styles.patrickAdams, styles.smithTypo]}>Patrick Adams</Text>
      			<Text style={[styles.patrickMill, styles.smithTypo]}>Patrick Mill</Text>
      			<Text style={[styles.adamSmith, styles.smithTypo]}>Adam Smith</Text>
      			<Text style={[styles.johnSmith, styles.smithTypo]}>John Smith</Text>
      			<Text style={[styles.oliviaHargitay, styles.smithTypo]}>Olivia Hargitay</Text>
      			<Text style={[styles.chrisUil, styles.smithTypo]}>Chris Uil</Text>
      			<Text style={[styles.mariaPerez, styles.smithTypo]}>Maria Perez</Text>
      			<Text style={[styles.luisIbaez, styles.smithTypo]}>Luis Ibañez</Text>
      			<Image style={[styles.unsplashbgg8xpgwVqIcon1, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_bgg8xPGw_vQ.png")} />
      			<Text style={[styles.justinWilliams, styles.smithTypo]}>Justin Williams</Text>
      			<Image style={[styles.image29Icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/image 21.png")} />
      			<Image style={[styles.image31Icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/image 21.png")} />
      			<Image style={[styles.image30Icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/image 21.png")} />
      			<Image style={[styles.image32Icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/image 21.png")} />
      			<Image style={styles.image28Icon} resizeMode="cover" source={require("../../assets/images/image 20.png")} />
      			<Image style={[styles.image28Icon1, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/image 20.png")}/>
      			<Image style={[styles.image28Icon2, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/image 20.png")} />
      			<Image style={[styles.image28Icon3, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/image 20.png")} />
      			<Image style={[styles.image33Icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/image 20.png")} />
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
    		left: 38,
    		position: "absolute"
  	},
  	smithTypo: {
    		textAlign: "center",
    		fontSize: 15,
    		color: "#000",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		position: "absolute"
  	},
  	iconLayout: {
    		height: 33,
    		left: 322,
    		width: 33,
    		position: "absolute"
  	},
  	blackBase21: {
    		top: 0,
    		height: 41
  	},
  	seguidores: {
    		top: 68,
    		left: 154,
    		fontSize: 18,
    		width: 108,
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
    		top: 110,
    		fontSize: 14,
    		fontWeight: "500",
    		fontFamily: "Poppins-Medium",
    		left: 38,
    		textAlign: "left",
    		color: "#000",
    		position: "absolute"
  	},
  	unsplashditylc26zviIcon: {
    		top: 143
  	},
  	unsplashsibvworyqs0Icon: {
    		top: 415
  	},
  	unsplashymoYcN2oIcon: {
    		top: 279
  	},
  	unsplashako5dg2fqsmIcon: {
    		top: 551
  	},
  	unsplashkipqvvtoc1sIcon: {
    		top: 211
  	},
  	unsplash4uojmedcwi8Icon: {
    		top: 483
  	},
  	unsplashwnolnjo7ts8Icon: {
    		top: 347
  	},
  	unsplashbgg8xpgwVqIcon: {
    		top: 619
  	},
  	patrickAdams: {
    		top: 154,
    		left: 95,
    		fontSize: 15
  	},
  	patrickMill: {
    		top: 426,
    		left: 95,
    		fontSize: 15
  	},
  	adamSmith: {
    		top: 290,
    		left: 96
  	},
  	johnSmith: {
    		top: 562,
    		left: 95,
    		fontSize: 15
  	},
  	oliviaHargitay: {
    		top: 222,
    		left: 95,
    		fontSize: 15
  	},
  	chrisUil: {
    		top: 494,
    		left: 95,
    		fontSize: 15
  	},
  	mariaPerez: {
    		top: 358,
    		left: 98
  	},
  	luisIbaez: {
    		top: 630,
    		left: 95,
    		fontSize: 15
  	},
  	unsplashbgg8xpgwVqIcon1: {
    		top: 687
  	},
  	justinWilliams: {
    		top: 697,
    		left: 95,
    		fontSize: 15
  	},
  	image29Icon: {
    		top: 285
  	},
  	image31Icon: {
    		top: 217
  	},
  	image30Icon: {
    		top: 353
  	},
  	image32Icon: {
    		top: 692
  	},
  	image28Icon: {
    		top: 150,
    		left: 321,
    		height: 32,
    		width: 33,
    		position: "absolute"
  	},
  	image28Icon1: {
    		top: 423
  	},
  	image28Icon2: {
    		top: 489
  	},
  	image28Icon3: {
    		top: 557
  	},
  	image33Icon: {
    		top: 625
  	},
  	siguidoresChild: {
    		top: 775,
    		height: 75
  	},
  	siguidores: {
    		backgroundColor: "#fff",
    		flex: 1,
    		height: 844
  	}
});

export default SIGUIDORES;
