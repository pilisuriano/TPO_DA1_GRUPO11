import * as React from "react";
import {Image, StyleSheet, View, Text, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';

const MYPROFILE = () => {
	const navigation = useNavigation();
  	
  	return (
    		<View style={styles.myProfile}>
      			<Image style={styles.unsplashiicyiapyggiIcon} resizeMode="cover" source={require("../../assets/images/unsplash_IicyiaPYGGI.png")} />
      			<View style={[styles.myProfileChild, styles.myProfileChildLayout]} />
      			<Image style={styles.myProfileChildLayout} resizeMode="cover" source={require("../../assets/images/unsplash_xEJoSsDCnR8.png")} />
      			<Image style={[styles.unsplash76dgucmupv4Icon, styles.iconLayout4]} resizeMode="cover" source={require("../../assets/images/unsplash_76dgUcMupv4.png")}/>
      			<Image style={[styles.unsplashmxfjwuffdi4Icon, styles.iconLayout4]} resizeMode="cover" source={require("../../assets/images/unsplash_MxFjwuFFDi4.png")} />
      			<Text style={[styles.miPerfil, styles.miPerfilTypo]}>Mi perfil</Text>
      			<Pressable style={styles.iconlylightOutlinearrowL} onPress={()=>{}}>
        				<Image style={[styles.icon, styles.iconLayout2]} resizeMode="cover" source={require("../../assets/images/Arrow---Left-2.png")} />
      			</Pressable>
      			<Image style={styles.unsplashhhcfgcgwqmyIcon} resizeMode="cover" source={require("../../assets/images/unsplash_hhcFGCGWQMY.png")} />
      			<Text style={[styles.martinSurez, styles.miPerfilTypo]}>Martin Suárez</Text>
      			<Text style={[styles.soyUnaPersona, styles.editarPostsTypo]}>Soy una persona positiva. Me encanta viajar y probar nuevas comidas.</Text>
      			<Text style={[styles.nivel4, styles.text2Typo]}>Nivel 4</Text>
      			<Pressable style={styles.iconlylightOutlinesetting} onPress={() => navigation.navigate('settings')}>
        				<Image style={[styles.icon, styles.iconLayout2]} resizeMode="cover" source={require("../../assets/images/Setting.png")}/>
      			</Pressable>
      			<Pressable style={styles.myProfileItem} onPress={() => {}}>
      				<Text style={[styles.editarPerfil, styles.nivel4Typo]}>Editar Perfil</Text>
				</Pressable>
      			<Text style={[styles.text, styles.textTypo]}>87</Text>
      			<Text style={[styles.text1, styles.textTypo]}>870</Text>
      			<Text style={[styles.k, styles.textTypo]}>15k</Text>
      			<Text style={[styles.posts, styles.postsTypo]}>Posts</Text>
      			<Pressable style={[styles.siguiendo, styles.postsPosition]} onPress={() => navigation.navigate('seguidos')}>
        				<Text style={styles.postsTypo}>Siguiendo</Text>
      			</Pressable>
      			<Pressable style={[styles.seguidores, styles.postsPosition]} onPress={() => navigation.navigate('seguidores')}>
        				<Text style={styles.postsTypo}>Seguidores</Text>
      			</Pressable>
      			<View style={[styles.myProfileInner, styles.lineViewLayout]} />
      			<View style={[styles.lineView, styles.lineViewLayout]} />
      			<Image style={[styles.unsplashmv38tbLjj8Icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_mv38TB_Ljj8.png")} />
      			<Image style={[styles.unsplashqbf59tu077qIcon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_qbf59TU077Q.png")} />
      			<Image style={[styles.rectangleIcon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/Rectangle 276.png")} />
      			<Text style={[styles.posts1, styles.textTypo]}>Posts</Text>
      			<Pressable style={[styles.unsplashig7vn6okgne, styles.iconPosition]} onPress={() => navigation.navigate('postpublicado')}>
        				<Image style={[styles.icon2, styles.iconLayout3]} resizeMode="cover" source={require("../../assets/images/unsplash_ig7vN6OkGNE.png")} />
      			</Pressable>
      			<Image style={[styles.unsplashclv9dfjlwacIcon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_Clv9DfJLwac.png")} />
      			<Image style={[styles.unsplashqpkpatk0fakIcon, styles.iconPosition]} resizeMode="cover" source={require("../../assets/images/unsplash_QpKPAtk0fak.png")} />
      			<Image style={[styles.unsplashzbwstHz0IIcon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_ZbWSt_Hz0-I.png")} />
      			<Image style={[styles.unsplashq2b08qyxkc4Icon, styles.iconPosition]} resizeMode="cover" source={require("../../assets/images/unsplash_Q2B08QyXKC4.png")} />
      			<Image style={[styles.unsplashl4v4t5adtneIcon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_L4v4T5aDtnE.png")} />
      			<Image style={styles.lineIcon} resizeMode="cover" source={require("../../assets/images/Line 10.png")} />
      			<Pressable style={[styles.editarPostsParent, styles.image13IconLayout]} onPress={() => navigation.navigate('editarpost')}>
        				<Text style={[styles.editarPosts, styles.editarPostsTypo]}>Editar Posts</Text>
        				<Image style={[styles.image13Icon, styles.image13IconLayout]} resizeMode="cover" source={require("../../assets/images/image 13.png")} />
      			</Pressable>
      			<View style={[styles.iconlyboldchat, styles.chatLayout]}>
        				<View style={[styles.chat, styles.chatLayout]}>
          					<View style={[styles.chat, styles.chatLayout]}>
            						<Text style={[styles.text2, styles.text2Typo]}> 5</Text>
            						<Image style={[styles.vectorIcon, styles.iconLayout2]} resizeMode="cover" source={require("../../assets/images/Chat.png")} />
          					</View>
        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	myProfileChildLayout: {
    		height: 99,
    		width: 99,
    		top: 756,
    		left: 259,
    		borderRadius: 10,
    		position: "absolute"
  	},
  	iconLayout4: {
    		top: 757,
    		height: 99,
    		width: 99,
    		borderRadius: 10,
    		position: "absolute"
  	},
  	groupIconPosition: {
    		width: 390,
    		left: 0,
    		position: "absolute"
  	},
  	miPerfilTypo: {
    		textAlign: "left",
    		color: "#000",
    		fontSize: 18,
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		position: "absolute"
  	},
  	iconLayout2: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		overflow: "hidden"
  	},
  	editarPostsTypo: {
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		fontSize: 12,
    		textAlign: "left",
    		color: "#000",
    		position: "absolute"
  	},
  	text2Typo: {
    		color: "#f17b47",
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		position: "absolute"
  	},
  	nivel4Typo: {
    		fontSize: 12,
    		textAlign: "left",
  	},
  	textTypo: {
    		fontSize: 14,
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		position: "absolute"
  	},
  	postsTypo: {
    		fontFamily: "Poppins-Regular",
    		fontSize: 14,
    		textAlign: "left",
    		color: "#000"
  	},
  	postsPosition: {
    		top: 361,
    		position: "absolute"
  	},
  	lineViewLayout: {
    		height: 44,
    		width: 1,
    		borderRightWidth: 1,
    		borderColor: "#000",
    		borderStyle: "solid",
    		top: 342,
    		position: "absolute"
  	},
  	iconLayout1: {
    		top: 648,
    		height: 99,
    		width: 99,
    		borderRadius: 10,
    		position: "absolute"
  	},
  	iconPosition: {
    		top: 430,
    		height: 99,
    		width: 99,
    		position: "absolute"
  	},
  	iconLayout3: {
    		height: "100%",
    		width: "100%"
  	},
  	iconLayout: {
    		top: 539,
    		height: 99,
    		width: 99,
    		borderRadius: 10,
    		position: "absolute"
  	},
  	image13IconLayout: {
    		height: 20,
    		position: "absolute"
  	},
  	chatLayout: {
    		height: 17,
    		width: 24,
    		position: "absolute"
  	},
  	unsplashiicyiapyggiIcon: {
    		top: 110,
    		left: 31,
    		width: 336,
    		height: 92,
    		borderRadius: 10,
    		position: "absolute"
  	},
  	myProfileChild: {
    		backgroundColor: "#c4c4c4"
  	},
  	unsplash76dgucmupv4Icon: {
    		left: 40
  	},
  	unsplashmxfjwuffdi4Icon: {
    		left: 149
  	},
  	blackBase21: {
    		height: 41,
    		top: 0
  	},
  	miPerfil: {
    		top: 67,
    		left: 165,
    		width: 89
  	},
  	icon: {
    		height: "100%",
    		width: "100%"
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
  	unsplashhhcfgcgwqmyIcon: {
    		top: 173,
    		width: 67,
    		height: 67,
    		left: 40,
    		position: "absolute"
  	},
  	martinSurez: {
    		top: 207,
    		left: 111,
    		width: 127
  	},
  	soyUnaPersona: {
    		top: 255,
    		left: 59,
    		width: 317
  	},
  	nivel4: {
    		top: 232,
    		left: 124,
    		width: 48,
    		fontSize: 12,
    		textAlign: "left"
  	},
  	iconlylightOutlinesetting: {
    		left: "87.95%",
    		top: "26.07%",
    		right: "6.72%",
    		bottom: "71.47%",
    		width: "5.33%",
    		height: "2.46%",
    		position: "absolute"
  	},
  	myProfileItem: {
    		top: 300,
    		left: 53,
    		backgroundColor: "#bb4426",
    		width: 300,
    		height: 28,
    		borderRadius: 10,
    		position: "absolute"
  	},
  	editarPerfil: {
    		top: 305,
    		left: 169,
    		color: "#ffffff",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		fontSize: 12,
    		position: "absolute"
  	},
  	text: {
    		left: 73,
    		top: 343,
    		fontSize: 14
  	},
  	text1: {
    		left: 172,
    		top: 343,
    		fontSize: 14
  	},
  	k: {
    		left: 292,
    		top: 343,
    		fontSize: 14
  	},
  	posts: {
    		left: 63,
    		top: 361,
    		position: "absolute"
  	},
  	siguiendo: {
    		left: 152
  	},
  	seguidores: {
    		left: 264
  	},
  	myProfileInner: {
    		left: 126
  	},
  	lineView: {
    		left: 244
  	},
  	unsplashmv38tbLjj8Icon: {
    		left: 40
  	},
  	unsplashqbf59tu077qIcon: {
    		left: 259
  	},
  	rectangleIcon: {
    		left: 149
  	},
  	posts1: {
    		top: 402,
    		left: 40
  	},
  	icon2: {
    		borderRadius: 10
  	},
  	unsplashig7vn6okgne: {
    		left: 40
  	},
  	unsplashclv9dfjlwacIcon: {
    		left: 40
  	},
  	unsplashqpkpatk0fakIcon: {
    		left: 259,
    		borderRadius: 10
  	},
  	unsplashzbwstHz0IIcon: {
    		left: 259
  	},
  	unsplashq2b08qyxkc4Icon: {
    		left: 149,
    		borderRadius: 10
  	},
  	unsplashl4v4t5adtneIcon: {
    		left: 149
  	},
  	lineIcon: {
    		top: 394,
    		width: 318,
    		height: 1,
    		left: 40,
    		position: "absolute"
  	},
  	editarPosts: {
    		top: 1,
    		width: 70,
    		opacity: 0.8,
    		left: 0
  	},
  	image13Icon: {
    		left: 75,
    		width: 16,
    		top: 0
  	},
  	editarPostsParent: {
    		left: 253,
    		width: 91,
    		top: 402
  	},
  	text2: {
    		left: 13,
    		fontSize: 11,
    		textAlign: "center",
    		width: 11,
    		top: 0
  	},
  	vectorIcon: {
    		height: "79.41%",
    		width: "56.25%",
    		top: "5.88%",
    		right: "43.75%",
    		bottom: "14.71%",
    		left: "0%",
    		position: "absolute"
  	},
  	chat: {
    		left: 0,
    		top: 0
  	},
  	iconlyboldchat: {
    		top: 233,
    		left: 185
  	},
  	groupIcon: {
    		top: 775,
    		height: 75
  	},
  	myProfile: {
    		backgroundColor: "#fff",
    		flex: 1,
    		height: 844,
    		overflow: "hidden",
    		width: "100%"
  	}
});

export default MYPROFILE;
