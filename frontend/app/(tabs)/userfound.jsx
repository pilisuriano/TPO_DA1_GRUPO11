import React, { useEffect, useState } from "react";
import {Image, StyleSheet, Text, View, Pressable, ActivityIndicator} from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const USUARIOENCONTRADO = () => {
    const navigation = useNavigation();
	const route = useRoute();
	const { userId } = route.params;
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const { t } = useTranslation();

	useEffect(() => {
		const fetchUser = async () => {
		  try {
			const response = await axios.get(`https://tpo-da1-grupo11.onrender.com/users/${userId}`);
			setUser(response.data);
		  } catch (err) {
			setError(err.message);
		  } finally {
			setLoading(false);
		  }
		};
	
		fetchUser();
	  }, [userId]);
	
	  if (loading) {
		return <ActivityIndicator size="large" color="#0000ff" />;
	  }
	
	  if (error) {
		return <Text style={styles.errorText}>Error: {error}</Text>;
	  }
  	
  	return (
    		<View style={styles.usuarioEncontrado}>
      			<Image style={styles.unsplash4Qfycgpc4cIcon} resizeMode="cover" source={require("../../assets/images/unsplash_4_QFycgpB4F.png")} />
      			<Text style={[styles.perfil, styles.perfilTypo]}>{t('profile')}</Text>
                <Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('search')}>
        		    <Image style={[styles.icon]} resizeMode="cover" source={require("../../assets/images/Arrow---Left-2.png")} />
      			</Pressable>
				{user && (
					<>
						<Image style={styles.unsplashp5bobf0xjuaIcon} resizeMode="cover" source={{ uri: user.profileImage }} />
						<Text style={[styles.martinPerez, styles.perfilTypo]}>{user.fullName}</Text>
						<Text style={styles.posts}>{t('posts')}</Text>
						<Text style={[styles.imAPostive, styles.seguirTypo]}>{user.description}</Text>
						<Pressable style={[styles.rectangleParent, styles.groupChildLayout]} onPress={()=>{}}>
								<View style={[styles.groupChild, styles.groupChildLayout]} />
								<Text style={[styles.seguir, styles.seguirTypo]}>{t('follow')}</Text>
						</Pressable>
						<Text style={[styles.text, styles.textTypo]}>{user.posts.length}</Text>
						<Text style={[styles.text1, styles.textTypo]}>{user.following}</Text>
						<Text style={[styles.k, styles.textTypo]}>{user.followers}</Text>
						<Text style={[styles.posts1, styles.posts1Typo]}>{t('posts')}</Text>
						<Text style={[styles.siguiendo, styles.posts1Typo]}>{t('following')}</Text>
						<Text style={[styles.seguidores, styles.posts1Typo]}>{t('followers')}</Text>
				  	</>
				)}
      			<View style={[styles.usuarioEncontradoItem, styles.lineViewLayout]} />
      			<Image style={styles.usuarioEncontradoInner} resizeMode="cover" source={require("../../assets/images/Line 10.png")} />
      			<View style={[styles.lineView, styles.lineViewLayout]} />
      			<View style={[styles.groupView, styles.groupViewLayout]}>
        				<View style={[styles.unsplashxejossdcnr8Parent, styles.groupViewLayout]}>
          					<Image style={[styles.unsplashxejossdcnr8Icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_xEJoSsDCnR8.png")} />
          					<Image style={[styles.unsplashhaznhev2wxqIcon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_haZNHEV2WXQ.png")} />
          					<Image style={[styles.unsplash8nwfh8I9ugIcon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_8NWFh8_i9Ug.png")} />
          					<Pressable style={[styles.unsplashuc0hzduitwy, styles.iconLayout1]} onPress={() => navigation.navigate('userfoundcomment')}>
            						<Image style={styles.icon} resizeMode="cover" source={require("../../assets/images/imageasado.png")} />
          					</Pressable>
          					<Image style={[styles.unsplashcssvezachvqIcon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_cssvEZacHvQ.png")}/>
          					<Image style={[styles.unsplash0boea7nbluuIcon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_0boeA7NBluU.png")} />
          					<Image style={[styles.unsplashtld6icolyb0Icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_TLD6iCOlyb0.png")} />
          					<Image style={[styles.unsplashkcaC3f3feIcon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_kcA-c3f_3FE.png")} />
          					<Image style={[styles.unsplashiicyiapyggiIcon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_IicyiaPYGGI.png")} />
        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	groupIconPosition: {
    		width: 390,
    		left: 0,
    		position: "absolute"
  	},
  	perfilTypo: {
    		textAlign: "left",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		fontSize: 18,
    		color: "#000",
    		position: "absolute"
  	},
  	seguirTypo: {
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		fontSize: 12,
    		textAlign: "left",
    		position: "absolute"
  	},
  	groupChildLayout: {
    		height: 31,
    		width: 90,
    		position: "absolute"
  	},
  	textTypo: {
    		top: 329,
    		fontSize: 14,
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		position: "absolute"
  	},
  	posts1Typo: {
    		fontFamily: "Poppins-Regular",
    		top: 350,
    		fontSize: 14,
    		textAlign: "left",
    		color: "#000",
    		position: "absolute"
  	},
  	lineViewLayout: {
    		height: 44,
    		width: 1,
    		borderRightWidth: 1,
    		borderColor: "#000",
    		borderStyle: "solid",
    		top: 328,
    		position: "absolute"
  	},
  	groupViewLayout: {
    		height: 317,
    		width: 318,
    		position: "absolute"
  	},
  	iconLayout1: {
    		height: 99,
    		width: 99,
    		position: "absolute"
  	},
  	iconLayout: {
    		top: 109,
    		height: 99,
    		width: 99,
    		borderRadius: 10,
    		position: "absolute"
  	},
  	unsplash4Qfycgpc4cIcon: {
    		top: 118,
    		left: 27,
    		width: 336,
    		height: 106,
    		borderRadius: 10,
    		position: "absolute"
  	},
  	blackBase21: {
    		height: 41,
    		top: 0
  	},
  	perfil: {
    		top: 74,
    		left: 174,
    		width: 59
  	},
  	usuarioEncontradoChild: {
    		height: "2.25%",
    		width: "2.67%",
    		top: "8.87%",
    		right: "89.6%",
    		bottom: "88.88%",
    		left: "7.73%",
    		maxWidth: "100%",
    		maxHeight: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	unsplashp5bobf0xjuaIcon: {
    		top: 190,
    		width: 67,
    		height: 67,
    		left: 33,
    		position: "absolute"
  	},
  	martinPerez: {
    		top: 224,
    		left: 105,
    		width: 122
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
  	posts: {
    		top: 401,
    		fontSize: 14,
    		left: 35,
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		position: "absolute"
  	},
  	imAPostive: {
    		top: 283,
    		left: 57,
    		width: 294,
    		color: "#000",
    		fontWeight: "500",
    		fontSize: 12
  	},
  	groupChild: {
    		borderRadius: 20,
    		backgroundColor: "#bb4426",
    		left: 0,
    		top: 0
  	},
  	seguir: {
    		top: 6,
    		left: 26,
    		color: "#fff"
  	},
  	rectangleParent: {
    		top: 233,
    		left: 270
  	},
  	text: {
    		left: 70
  	},
  	text1: {
    		left: 169
  	},
  	k: {
    		left: 289
  	},
  	posts1: {
    		left: 60
  	},
  	siguiendo: {
    		left: 147
  	},
  	seguidores: {
    		left: 261
  	},
  	usuarioEncontradoItem: {
    		left: 123
  	},
  	usuarioEncontradoInner: {
    		top: 384,
    		height: 1,
    		width: 318,
    		left: 33,
    		position: "absolute"
  	},
  	lineView: {
    		left: 241
  	},
  	unsplashxejossdcnr8Icon: {
    		top: 218,
    		width: 99,
    		borderRadius: 10,
    		left: 0
  	},
  	unsplashhaznhev2wxqIcon: {
    		left: 219,
    		top: 218,
    		width: 99,
    		borderRadius: 10
  	},
  	unsplash8nwfh8I9ugIcon: {
    		left: 109,
    		top: 218,
    		width: 99,
    		borderRadius: 10
  	},
  	icon: {
    		height: "100%",
    		borderRadius: 10,
    		width: "100%"
  	},
  	unsplashuc0hzduitwy: {
    		left: 0,
    		top: 0
  	},
  	unsplashcssvezachvqIcon: {
    		left: 0
  	},
  	unsplash0boea7nbluuIcon: {
    		left: 219,
    		top: 0,
    		borderRadius: 10
  	},
  	unsplashtld6icolyb0Icon: {
    		left: 219
  	},
  	unsplashkcaC3f3feIcon: {
    		left: 109,
    		top: 0,
    		borderRadius: 10
  	},
  	unsplashiicyiapyggiIcon: {
    		left: 109
  	},
  	unsplashxejossdcnr8Parent: {
    		left: 0,
    		top: 0
  	},
  	groupView: {
    		top: 429,
    		left: 35,
    		height: 317
  	},
  	groupIcon: {
    		top: 775,
    		height: 75
  	},
  	usuarioEncontrado: {
    		backgroundColor: "#fff",
    		flex: 1,
    		height: 844,
    		overflow: "hidden",
    		width: "100%"
  	}
});

export default USUARIOENCONTRADO;
