import React, { useCallback, useContext, useEffect, useState } from "react";
import {Image, StyleSheet, Text, View, Pressable, TextInput, Alert, Modal, Button, ActivityIndicator} from "react-native";
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import * as ImagePicker from 'expo-image-picker';
import { fetchUserPosts, updatePostData } from "../../src/features/posts/postSlice";
import { useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Asegúrate de importar correctamente
import { ThemeContext } from '../../src/context/ThemeContext';
import { fetchUserProfile } from "@/src/features/users/userSlice";


const EDITARPOST = () => {
    const navigation = useNavigation();
	const { t } = useTranslation();
	const route = useRoute();
	const dispatch = useDispatch();
	const { postId, media, title: initialTitle, location: initialLocation } = route.params || {};
	const [title, setTitle] = useState(initialTitle || '');
	const [location, setLocation] = useState(initialLocation || '');
	const [modalVisible, setModalVisible] = useState(false);
	const [postImage, setPostImage] = useState(Array.isArray(media) ? media : []);
	const { theme } = useContext(ThemeContext);


	useEffect(() => {
		console.log('Post ID:', postId);
		console.log('Media:', media);
		console.log('Title:', title);
		console.log('Location:', initialLocation);
		// Aquí puedes usar el postId para obtener los detalles del post o realizar otras acciones
	}, [postId, media,title,initialLocation]);

	useFocusEffect(
		useCallback(() => {
		  // Código que se ejecuta cada vez que la pantalla se enfoca
		  const fetchPostDetails = async () => {
			try {
			  const userProfile = await dispatch(fetchUserProfile()).unwrap();
			  const postDetails = userProfile.posts.find(post => post._id === postId);
			  if (postDetails) {
				setTitle(postDetails.title);
				setLocation(postDetails.location.placeName);
				setPostImage(postDetails.media);
			  } else {
				console.error('Post not found');
			  }
			} catch (error) {
			  console.error('Failed to fetch post details:', error);
			}
		  };
	
		  fetchPostDetails();
	
		  return () => {
			// Código que se ejecuta cuando la pantalla se desenfoca
			console.log('Screen is unfocused');
		  };
		}, [dispatch, postId])
	  );

	const handleUpdatePost = async () => {
		try {
		  const postData = {
			title,
			location: { ...initialLocation, placeName: location },
			media: postImage,
		  };
		  await dispatch(updatePostData({ postId, postData })).unwrap();
		  Alert.alert('Success', 'Post updated successfully');
		  navigation.navigate('editarpost');
		} catch (error) {
		  Alert.alert('Error', error.message);
		}
	  };
	
	  const pickMedia = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsMultipleSelection: true,
			quality: 0.5,
			base64: true,
		});

		if (!result.canceled) {
			setPostImage([...postImage, ...result.assets.map(asset => ({ url: asset.uri, type: 'image' }))]);
			setModalVisible(true);
		}
	};

	const confirmImage = () => {
		handleUpdatePost();
	};

	const cancelImage = () => {
		setPostImage(null);
		setModalVisible(false);
	};

  	return (
    		<View style={[styles.editarPost, { backgroundColor: theme.colors.background }]}>
                <Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('editarpost')}>
                    <Image style={[styles.icon]} resizeMode="cover" source={require("../../assets/images/Arrow---Left-2.png")} />
                </Pressable>
      			<Image style={styles.editarPostChild} resizeMode="cover" source={require("../../assets/images/Line 10.png")}/>
      			<Text style={[styles.editarPieDe, styles.editarPieDeTypo, { color: theme.colors.text }]}>{t('editTitle')}</Text>
      			<View style={styles.editarPostItem} />
				  <TextInput
						style={[styles.input,{ color: theme.colors.text }]}
						placeholder={t('title')}
						value={title}
						onChangeText={setTitle}
					/>
				<Text style={[styles.editarPieDe2, styles.editarPieDeTypo, { color: theme.colors.text }]}>{t('editLocation')}</Text>
					<TextInput
						style={[styles.input2, { color: theme.colors.text }]}
						placeholder={t('location')}
						value={location.placeName}
						onChangeText={setLocation}
					/>
				  {postImage && postImage.length > 0 ? (
						postImage.map((image, index) => (
						<Image key={index} source={{ uri: image.url }} style={[styles.unsplashig7vn6okgneIcon, styles.rectangleViewLayout]} />
						))
					) : (
						<Text style={styles.noImageText}>No image</Text>
					)}
					<Pressable style={[styles.cameraIconContainer,{ backgroundColor: theme.colors.background }] } onPress={pickMedia}>
						<Text style={[{ color: theme.colors.text }]}>{t('addPhoto')}</Text>
					</Pressable>
      			<Pressable style={[styles.rectangleParent, styles.groupLayout]} onPress={handleUpdatePost}>
        				<View style={[styles.groupChild, styles.groupLayout]} />
        				<Text style={[styles.actualizarPost, styles.postTypo]}>{t('update')}</Text>
      			</Pressable>
      			<View style={[styles.rectangleGroup, styles.groupLayout]}>
        				<View style={[styles.groupChild, styles.groupLayout]} />
        				<Text style={[styles.eliminarPost, styles.postTypo]}>{t('deletePost')}</Text>
      			</View>
      			<Text style={[styles.seleccionarImgenesYo, styles.editarPieDeTypo, { color: theme.colors.text }]}>{t('images')}</Text>
      			<Image style={[styles.iconlylightOutlinearrowL1, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/Arrow---Right-2.png")} />
      			<View style={[styles.rectangleView, styles.groupInnerBorder]} />
      			<View style={[styles.editarPostChild1, styles.groupInnerBorder]} />
      			<View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
        				<View style={[styles.groupInner, styles.groupInnerLayout]} />
        				<Image style={[styles.deleteIcon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/Group 81.png")} />
      			</View>
				  <Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
					setModalVisible(!modalVisible);
					}}
				>
					<View style={styles.modalView}>
					<Text style={styles.modalText}>{t('Confirm Image')}</Text>
					{postImage && (
						<Image style={styles.modalImage} source={{ uri: postImage }} />
					)}
					<View style={styles.modalButtons}>
						<Button title={t('Cancel')} onPress={cancelImage} />
						<Button title={t('Confirm')} onPress={confirmImage} />
					</View>
					</View>
				</Modal>
    		</View>);
};
/*      			<Image style={[styles.unsplashig7vn6okgneIcon, styles.rectangleViewLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_ig7vN6OkGNE.png")} />*/
/*<Text style={styles.elMejorMsico}>¡El mejor músico del mundo! Tour 2024 allá voy.</Text>*/


const styles = StyleSheet.create({
  	groupIconPosition: {
    		width: 390,
    		left: 0,
    		position: "absolute"
  	},
  	iconLayout: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	editarPieDeTypo: {
    		opacity: 0.7,
    		fontSize: 14,
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		left: 35,
    		position: "absolute"
  	},
	  cameraIconContainer: {
		position: 'absolute',
		backgroundColor: '#fff',
		borderRadius: 50,
		padding: 5,
		left: 135,
		top: 247,
		zIndex: 1,
	  },
  	groupLayout: {
    		height: 49,
    		width: 321,
    		position: "absolute"
  	},
	  input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 10,
		borderRadius: 10,
		top: 300,
		marginHorizontal: 15,
	  },
	  input2: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 10,
		borderRadius: 10,
		top: 330,
		marginHorizontal: 15,
	  },
  	postTypo: {
    		color: "#fff",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		fontSize: 18,
    		top: 11,
    		textAlign: "left",
    		position: "absolute"
  	},
	  postImage: {
		width: '100%',
		height: 200,
		borderRadius: 10,
		marginBottom: 10,
	  },
  	groupInnerBorder: {
    		opacity: 0.8,
    		borderWidth: 0.5,
    		borderColor: "#7e5f5b",
    		borderStyle: "solid",
    		backgroundColor: "#f2f2f2",
    		borderRadius: 10
  	},
  	rectangleViewLayout: {
    		height: 80,
    		width: 80,
    		top: 164,
    		position: "absolute",
			zIndex: 1,
  	},
  	groupInnerLayout: {
    		height: 25,
    		width: 23,
    		position: "absolute"
  	},
  	blackBase21: {
    		height: 41,
    		top: 0,
    		width: 390
  	},
  	iconlylightOutlinearrowL: {
    		top: "8.87%",
    		right: "89.6%",
    		bottom: "88.88%",
    		left: "7.73%",
    		width: "2.67%",
    		height: "2.25%",
    		maxWidth: "100%"
  	},
  	editarPostChild: {
    		top: 742,
    		left: 24,
    		width: 318,
    		height: 1,
    		position: "absolute"
  	},
  	editarPieDe: {
    		top: 290,
    		width: 137
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
	editarPieDe2: {
    		top: 370,
    		width: 137
  	},
  	editarPostItem: {
    		top: 334,
    		height: 84,
    		width: 321,
    		borderRadius: 10,
    		left: 35,
    		position: "absolute"
  	},
  	elMejorMsico: {
    		top: 358,
    		left: 41,
    		fontSize: 12,
    		width: 317,
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Poppins-Medium",
    		fontWeight: "500",
    		position: "absolute"
  	},
  	groupChild: {
    		backgroundColor: "#bb4426",
    		borderRadius: 10,
    		left: 0,
    		top: 0
  	},
  	actualizarPost: {
    		left: 93
  	},
  	rectangleParent: {
    		top: 603,
    		left: 35,
    		height: 49
  	},
  	eliminarPost: {
    		left: 102
  	},
  	rectangleGroup: {
    		top: 665,
    		left: 35,
    		height: 49
  	},
  	seleccionarImgenesYo: {
    		top: 121,
    		width: 268
  	},
  	editarPostInner: {
    		top: 147,
    		height: 133,
    		borderWidth: 0.5,
    		borderColor: "#7e5f5b",
    		borderStyle: "solid",
    		width: 321,
    		backgroundColor: "#f2f2f2",
    		borderRadius: 10,
    		left: 35,
    		position: "absolute"
  	},
  	iconlylightOutlinearrowL1: {
    		top: "24.12%",
    		right: "10.75%",
    		bottom: "73.62%",
    		left: "86.58%",
    		width: "2.67%",
    		height: "2.25%",
    		maxWidth: "100%"
  	},
  	rectangleView: {
    		left: 133,
    		height: 80,
    		width: 80,
    		top: 164,
    		position: "absolute"
  	},
  	editarPostChild1: {
    		left: 223,
    		height: 80,
    		width: 80,
    		top: 164,
    		position: "absolute"
  	},
  	unsplashig7vn6okgneIcon: {
    		left: 43,
    		borderRadius: 10
  	},
  	plusIcon: {
    		height: "3.08%",
    		width: "6.67%",
    		top: "29.62%",
    		right: "10%",
    		bottom: "67.3%",
    		left: "83.33%"
  	},
  	groupInner: {
    		opacity: 0.8,
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
    		top: "24%",
    		right: "19.57%",
    		bottom: "26%",
    		left: "21.74%"
  	},
  	rectangleContainer: {
    		top: 167,
    		left: 97
  	},
  	groupIcon: {
    		top: 775,
    		height: 75
  	},
  	editarPost: {
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		height: 844,
    		overflow: "hidden"
  	}
});

export default EDITARPOST;
