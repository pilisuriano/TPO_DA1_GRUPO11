import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, resetError } from '../../src/features/users/userSlice';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';


const EDITPROFILE = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const { t } = useTranslation();
	const { user, loading, error } = useSelector((state) => state.user);
	const [fullName, setFullName] = useState(user ? user.fullName : '');
	const [gender, setGender] = useState(user ? user.gender : '');
	const [profileDescription, setProfileDescription] = useState(user ? user.description : '');

	const handleUpdateProfile = () => {
		dispatch(resetError());
		dispatch(updateUser({ fullName, gender, description: profileDescription }));
	};

	return (
    		<View style={styles.editProfile}>
      			<Text style={[styles.miPerfil, styles.miPerfilTypo]}>{t('myProfile')}</Text>
      			<Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('perfil')}>
        				<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/Arrow---Left-2.png")} />
      			</Pressable>
      			<Image style={styles.unsplashhhcfgcgwqmyIcon} resizeMode="cover" source={require("../../assets/images/unsplash_hhcFGCGWQMY.png")} />
      			<Text style={[styles.martinSurez, styles.miPerfilTypo]}>{user.fullName}</Text>
				<TextInput
					style={[styles.input]}
					placeholder={t('fullName')}
					value={fullName}
					onChangeText={setFullName}
				/>
				<TextInput
					style={[styles.input]}
					placeholder={t('gender')}
					value={gender}
					onChangeText={setGender}
				/>
				<TextInput
					style={[styles.input]}
					placeholder={t('profileDescription')}
					value={profileDescription}
					onChangeText={setProfileDescription}
				/>
      			<Pressable style={styles.rectangleParent} onPress={handleUpdateProfile}>
        				<View style={[styles.groupChild, styles.groupChildLayout]} />
        				<Text style={[styles.actualizar, styles.miPerfilTypo]}>{t('update')}</Text>
      			</Pressable>
				{loading && <Text>{t('loading')}</Text>}
				{error && <Text style={styles.errorText}>{error}</Text>}
    		</View>);
};

/*<Text style={[styles.nombreCompleto, styles.gneroTypo]}>{t('fullName')}</Text>
	<Text style={[styles.gnero, styles.gneroTypo]}>{t('gender')}</Text>
	<Text style={[styles.descripcinDelPerfil, styles.gneroTypo]}>{t('profileDescription')}</Text>
	<View style={[styles.editProfileChild, styles.groupItemBorder]} />
      			<Text style={[styles.martinSurez1, styles.groupItemPosition]}>Martin Suárez</Text>
      			<View style={[styles.editProfileItem, styles.editPosition]} />
      			<Text style={[styles.masculino, styles.masculinoTypo]}>Masculino</Text>
      			<Image style={[styles.iconlyboldarrowDown2, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/Arrow---Down-2.png")} />
      			<View style={[styles.editProfileInner, styles.editPosition]} />
      			<Text style={[styles.soyUnaPersona, styles.groupItemPosition]}>Soy una persona positiva. Me encanta viajar y probar nuevas comidas.</Text>
      			<Image style={[styles.cameraIcon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/Camera.png")} />
      			<Text style={[styles.imagenDePortada, styles.gneroTypo]}>{t('header')}</Text>
      			<View style={[styles.rectangleView, styles.groupItemBorder]} />
      			<Image style={[styles.unsplashiicyiapyggiIcon, styles.groupChildLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_IicyiaPYGGI.png")} />
      			<Image style={[styles.plusIcon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/Plus.png")} />
      			<View style={styles.rectangleGroup}>
        				<View style={[styles.groupItem, styles.groupItemPosition]} />
        				<Image style={[styles.deleteIcon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/Group 81.png")} />
      			</View>*/

const styles = StyleSheet.create({
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 10,
		borderRadius: 5,
	  },
	groupIconPosition: {
		width: 390,
		left: 0,
		position: "absolute"
		},
		miPerfilTypo: {
		textAlign: "left",
		fontFamily: "Poppins-SemiBold",
		fontWeight: "600",
		fontSize: 18,
		position: "absolute"
		},
		iconLayout: {
		maxHeight: "100%",
		maxWidth: "100%",
		overflow: "hidden"
		},
		gneroTypo: {
		opacity: 0.7,
		fontSize: 14,
		fontFamily: "Poppins-Medium",
		fontWeight: "500",
		textAlign: "left",
		color: "#000",
		position: "absolute"
		},
		groupChildLayout: {
		borderRadius: 10,
		position: "absolute"
		},
		groupItemBorder: {
		borderWidth: 0.5,
		borderColor: "#7e5f5b",
		borderStyle: "solid",
		backgroundColor: "#f2f2f2",
		borderRadius: 10
		},
		groupItemPosition: {
		opacity: 0.8,
		position: "absolute"
		},
		editPosition: {
		backgroundColor: "#f2f2f2",
		borderRadius: 10,
		left: 36,
		position: "absolute"
		},
		masculinoTypo: {
		left: 53,
		fontSize: 14,
		textAlign: "left",
		color: "#000"
		},
		blackBase21: {
		height: 41,
		top: 0,
		width: 390
		},
		miPerfil: {
		top: 70,
		left: 162,
		width: 89,
		color: "#000",
		textAlign: "left",
		fontFamily: "Poppins-SemiBold",
		fontWeight: "600",
		fontSize: 18
		},
		icon: {
		height: "100%",
		width: "100%",
		maxWidth: "100%"
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
		top: 130,
		width: 67,
		height: 67,
		left: 36,
		position: "absolute"
		},
		martinSurez: {
		top: 150,
		left: 116,
		width: 131,
		color: "#000",
		textAlign: "left",
		fontFamily: "Poppins-SemiBold",
		fontWeight: "600",
		fontSize: 18
		},
		nombreCompleto: {
		top: 217,
		width: 149,
		opacity: 0.7,
		fontSize: 14,
		left: 35
		},
		gnero: {
		top: 304,
		width: 56,
		opacity: 0.7,
		fontSize: 14,
		left: 36
		},
		descripcinDelPerfil: {
		top: 391,
		width: 160,
		height: 20,
		opacity: 0.7,
		fontSize: 14,
		left: 36
		},
		groupChild: {
		backgroundColor: "#bb4426",
		height: 49,
		width: 321,
		left: 0,
		top: 0
		},
		actualizar: {
		top: 11,
		left: 112,
		color: "#fff",
		textAlign: "left",
		fontFamily: "Poppins-SemiBold",
		fontWeight: "600",
		fontSize: 18
		},
		rectangleParent: {
		top: 686,
		height: 49,
		width: 321,
		left: 36,
		position: "absolute"
		},
		editProfileChild: {
		top: 243,
		height: 49,
		width: 321,
		left: 35,
		borderColor: "#7e5f5b",
		borderStyle: "solid",
		position: "absolute"
		},
		martinSurez1: {
		top: 258,
		fontFamily: "Poppins-Regular",
		width: 127,
		left: 53,
		fontSize: 14,
		textAlign: "left",
		color: "#000"
		},
		editProfileItem: {
		top: 330,
		width: 144,
		height: 49
		},
		masculino: {
		top: 348,
		fontFamily: "Roboto-Medium",
		opacity: 0.5,
		fontWeight: "500",
		left: 53,
		position: "absolute"
		},
		iconlyboldarrowDown2: {
		height: "0.98%",
		width: "2.13%",
		top: "42.24%",
		right: "56.34%",
		bottom: "56.78%",
		left: "41.53%",
		position: "absolute"
		},
		editProfileInner: {
		top: 417,
		height: 90,
		width: 321
		},
		soyUnaPersona: {
		top: 428,
		left: 47,
		fontSize: 12,
		width: 297,
		fontFamily: "Poppins-Medium",
		opacity: 0.8,
		fontWeight: "500",
		height: 67,
		textAlign: "left",
		color: "#000"
		},
		cameraIcon: {
		height: "1.73%",
		width: "4.15%",
		top: "22.54%",
		right: "73.25%",
		bottom: "75.73%",
		left: "22.59%",
		position: "absolute"
		},
		imagenDePortada: {
		top: 512,
		width: 149,
		opacity: 0.7,
		fontSize: 14,
		left: 35
		},
		rectangleView: {
		top: 538,
		height: 133,
		width: 321,
		left: 35,
		borderColor: "#7e5f5b",
		borderStyle: "solid",
		position: "absolute"
		},
		unsplashiicyiapyggiIcon: {
		top: 553,
		left: 56,
		width: 280,
		height: 80
		},
		plusIcon: {
		height: "3.08%",
		width: "6.67%",
		top: "75.83%",
		right: "10.26%",
		bottom: "21.09%",
		left: "83.08%",
		position: "absolute"
		},
		groupItem: {
		width: 24,
		height: 26,
		borderWidth: 0.5,
		borderColor: "#7e5f5b",
		borderStyle: "solid",
		backgroundColor: "#f2f2f2",
		borderRadius: 10,
		left: 0,
		top: 0
		},
		deleteIcon: {
		height: "50%",
		width: "58.7%",
		top: "28%",
		right: "19.57%",
		bottom: "22%",
		left: "21.74%",
		position: "absolute"
		},
		rectangleGroup: {
		top: 557,
		left: 306,
		shadowColor: "rgba(0, 0, 0, 0.25)",
		shadowOffset: {
		width: 0,
		height: 4
		},
		shadowRadius: 4,
		elevation: 4,
		shadowOpacity: 1,
		width: 23,
		height: 25,
		position: "absolute"
		},
		groupIcon: {
		top: 775,
		height: 75
		},
		editProfile: {
		backgroundColor: "#fff",
		flex: 1,
		height: 844,
		overflow: "hidden",
		width: "100%"
		}
});

export default EDITPROFILE;
