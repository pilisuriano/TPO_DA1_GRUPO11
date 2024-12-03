import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable, Image, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData, resetError, fetchUserProfile } from '../../src/features/users/userSlice';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Asegúrate de importar correctamente


const EDITPROFILE = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const { t } = useTranslation();
	const { user, loading, error } = useSelector((state) => state.user);
	const [fullName, setFullName] = useState(user ? user.fullName : '');
	const [gender, setGender] = useState(user ? user.gender : '');
	const [profileDescription, setProfileDescription] = useState(user ? user.description : '');
	const [profileImage, setProfileImage] = useState(user ? user.profileImage : '');
	const [coverImage, setCoverImage] = useState(user ? user.coverImage : '');
	const route = useRoute();
	const [selectedImage, setSelectedImage] = useState(null);
	const [selectedCover, setSelectedCover] = useState(null);
	const [modalVisible, setModalVisible] = useState(false);
	const [modalVisible2, setModalVisible2] = useState(false);

	const handleUpdateProfile = () => {
		const userId = route.params?.userId; // Asegúrate de que route.params no sea undefined
		if (!userId) {
		  console.error('User ID is missing');
		  return;
		}
		console.log('Updating profile with:', { userId, fullName, gender, profileDescription});
		dispatch(resetError());
		dispatch(updateUserData({ userId, fullName, gender, description: profileDescription}));
	};

	const handleUpdatePicture = async () => {
		const userId = route.params?.userId; // Asegúrate de que route.params no sea undefined
		if (!userId) {
		  console.error('User ID is missing');
		  return;
		}
		console.log('Updating picture with:', { profileImage: selectedImage });
		dispatch(resetError());
		await dispatch(updateUserData({ userId, profileImage: selectedImage }));
		await dispatch(fetchUserProfile()); // Obtener la imagen actualizada desde el backend
		setModalVisible(false);
	};

	const handleUpdateCover = async () => {
		const userId = route.params?.userId; // Asegúrate de que route.params no sea undefined
		if (!userId) {
		  console.error('User ID is missing');
		  return;
		}
		console.log('Updating cover with:', { coverImage: selectedCover });
		dispatch(resetError());
		await dispatch(updateUserData({ userId, coverImage: selectedCover }));
		await dispatch(fetchUserProfile()); // Obtener la imagen actualizada desde el backend
		setModalVisible2(false);
	};


	useEffect(() => {
		if (user && user.profileImage) {
		  setProfileImage(user.profileImage);
		}
	  }, [user]);
	  
	useEffect(() => {
	if (user && user.coverImage) {
		  setCoverImage(user.coverImage);
		}
	}, [user]);

	const pickMedia = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsMultipleSelection: true,
			quality: 0.5,
			base64: true,
		});

		if (!result.canceled) {
			setSelectedImage(result.assets[0].uri);
			setModalVisible(true);
		}
	};

	const pickCover = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsMultipleSelection: true,
			quality: 0.5,
			base64: true,
		});

		if (!result.canceled) {
			setSelectedCover(result.assets[0].uri);
			setModalVisible2(true);
		}
	};

	const confirmCover = () => {
		handleUpdateCover();
	};

	const confirmImage = () => {
		handleUpdatePicture();
	};

	const cancelImage = () => {
		setSelectedImage(null);
		setModalVisible(false);
	};

	const cancelCover = () => {
		setSelectedCover(null);
		setModalVisible2(false);
	};

	return (
    		<View style={styles.editProfile}>
      			<Text style={[styles.miPerfil, styles.miPerfilTypo]}>{t('myProfile')}</Text>
      			<Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('perfil')}>
        				<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/Arrow---Left-2.png")} />
      			</Pressable>
      			<Image style={styles.unsplashhhcfgcgwqmyIcon} resizeMode="cover" source={require("../../assets/images/unsplash_hhcFGCGWQMY.png")} />
				  <View style={styles.profileImageContainer} >
						{user.profileImage ? (
							<Image style={styles.profileImage} source={{ uri: profileImage }} />
						) : (
							<View style={styles.profileImagePlaceholder}>
							<Text style={styles.profileImagePlaceholderText}>{t('Add Photo')}</Text>
							</View>
						)}
						<Pressable style={styles.cameraIconContainer} onPress={pickMedia}>
							<Icon name="camera-alt" size={24} color="#fff" />
						</Pressable>
					</View>
      			<Text style={[styles.martinSurez, styles.miNombreTypo]}>{user.fullName}</Text>
				<Text style={styles.nombreCompleto}>{t('fullName')}</Text>
				<TextInput
					style={[styles.input]}
					placeholder={t('fullName')}
					value={fullName}
					onChangeText={setFullName}
				/>
				<Text style={styles.nombreCompleto}>{t('gender')}</Text>
				<TextInput
					style={[styles.input]}
					placeholder={t('gender')}
					value={gender}
					onChangeText={setGender}
				/>
				<Text style={styles.nombreCompleto}>{t('profileDescription')}</Text>
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
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
					setModalVisible(!modalVisible);
					}}
				>
					<View style={styles.modalView}>
					<Text style={styles.modalText}>{t('ConfirmImage')}</Text>
					{selectedImage && (
						<Image style={styles.modalImage} source={{ uri: selectedImage }} />
					)}
					<View style={styles.modalButtons}>
						<Button title={t('cancel')} onPress={cancelImage} />
						<Button title={t('confirm')} onPress={confirmImage} />
					</View>
					</View>
				</Modal>
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible2}
					onRequestClose={() => {
					setModalVisible2(!modalVisible2);
					}}
				>
					<View style={styles.modalView}>
					<Text style={styles.modalText}>{t('ConfirmCover')}</Text>
					{selectedCover && (
						<Image style={styles.modalImage} source={{ uri: selectedCover }} />
					)}
					<View style={styles.modalButtons}>
						<Button title={t('cancel')} onPress={cancelCover} />
						<Button title={t('confirm')} onPress={confirmCover} />
					</View>
					</View>
				</Modal>
				<View style={styles.coverImageContainer}>
					{user.coverImage ? (
					<Image style={styles.coverImage} source={{ uri: user.coverImage }} />
					) : (
					<View style={styles.coverImagePlaceholder}>
						<Text style={styles.coverImagePlaceholderText}>{t('Add Cover Photo')}</Text>
					</View>
					)}
					<Pressable style={styles.cameraIconContainer2} onPress={pickCover}>
					<Icon name="camera-alt" size={24} color="#fff" />
					</Pressable>
				</View>
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
		borderRadius: 10,
		top: 150,
		marginHorizontal: 15,
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
		position: "absolute",
		},
		miNombreTypo: {
			textAlign: "left",
			fontFamily: "Poppins-SemiBold",
			fontWeight: "600",
			fontSize: 18,
			position: "absolute",
			padding: 5,
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
		unsplashiicyiapyggiIcon: {
			borderRadius: 10,
			flex: 1,
			width: "100%",
			height: 80
			},
		groupChildLayout: {
		borderRadius: 10,
		position: "absolute"
		},
		cameraIconContainer: {
			position: 'absolute',
			backgroundColor: '#000000',
			borderRadius: 50,
			padding: 5,
			left: 80,
			top: 170,
		  },
		  cameraIconContainer2: {
			position: 'absolute',
			backgroundColor: '#000000',
			borderRadius: 50,
			padding: 5,
			left: 330,
			top: 130,
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
		nombreCompleto: {
			fontSize: 14,
			fontWeight: "500",
			fontFamily: "Poppins-Medium",
			color: "#000",
			textAlign: "left",
			width: 149,
			opacity: 0.7,
			top: 150,
			left: 15,
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
		coverImageContainer: {
			marginTop: 20,
			height: 133,
			width: '100%',
		  },
		  coverImage: {
			height: 133,
			width: '80%',
			borderRadius: 10,
			top: 140,
			left: 40,
		  },
		  coverImagePlaceholder: {
			height: 133,
			width: '100%',
			backgroundColor: '#cccccc',
			justifyContent: 'center',
			alignItems: 'center',
		  },
		  coverImagePlaceholderText: {
			color: '#ffffff',
			fontSize: 16,
		  },
		profileImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginVertical: 10,
	top: 120,
	left: 40,	
  },
  profileImagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
    backgroundColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangleView: {
	borderRadius: 10,
	backgroundColor: "#f2f2f2",
	borderStyle: "solid",
	borderColor: "#7e5f5b",
	borderWidth: 0.5,
	flex: 1,
	width: "100%",
	height: 133
	},
  profileImagePlaceholderText: {
    color: '#ffffff',
    fontSize: 16,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
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
		top: 640,
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
