import React, { useContext } from "react";
import { StyleSheet, View, Image, Text, Pressable, FlatList, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { fetchUserProfile } from './../../src/features/users/userSlice';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "expo-router";
import { ThemeContext } from '../../src/context/ThemeContext';
import { Video } from 'expo-av';

const EDITARPOST = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const { user, posts, loading, error } = useSelector((state) => state.user);
	const { t } = useTranslation();
	const { theme } = useContext(ThemeContext);

	// Disparar la acción para obtener el perfil cuando la página se enfoca
	useFocusEffect(
		React.useCallback(() => {
			dispatch(fetchUserProfile()); // Obtener el perfil y posts del usuario
		}, [dispatch]) // Solo se vuelve a ejecutar cuando se enfoca la página
	);

	if (loading) {
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicator size="large" color="#bb4426" />
			</View>
		);
	}

	const renderItem = ({ item }) => {
		// Extraer la primera URL de 'media'
		const firstMedia = item.media && item.media.length > 0 ? item.media[0] : null;

		// Verificar si el primer archivo es un video
		const isVideo = firstMedia && firstMedia.url && firstMedia.url.endsWith('.mp4'); // Puedes cambiar esta condición según el tipo de archivo de video

		return (
			<Pressable
				onPress={() =>
					navigation.navigate('editarfoto', {
						postId: item._id,
						media: item.media,
						title: item.title,
						location: item.location,
					})
				}
				style={styles.itemContainer}
			>
				{firstMedia ? (
					isVideo ? (
						// Si es un video, envuelve el Video en un View para manejar el onPress
						<View style={styles.videoWrapper}>
							<Video
								source={{ uri: firstMedia.url }}
								style={styles.postImage} // Usa el mismo estilo para imagen y video
								resizeMode="cover" // Ajuste del video
								shouldPlay={false} // El video no se reproduce automáticamente
								isLooping={false} // Si no deseas que se repita
								useNativeControls={true} // Controles nativos de reproducción
							/>
						</View>
					) : (
						// Si no es un video, muestra la imagen
						<Image source={{ uri: firstMedia.url }} style={styles.postImage} />
					)
				) : (
					<Text style={styles.noImageText}>No media</Text>
				)}
			</Pressable>
		);
	};

	const sortedPosts = user ? user.posts.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) : [];

	return (
		<View style={[styles.editarPost, { backgroundColor: theme.colors.background }]}>
			<Text style={[styles.editarMisPosts, styles.postsTypo, { color: theme.colors.text }]}>{t('editMy')}</Text>
			<View style={[styles.editarPostChild, styles.editarPostChildLayout]} />
			<Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('perfil')}>
				<Image style={[styles.icon]} resizeMode="cover" source={require("../../assets/images/Arrow---Left-2.png")} />
			</Pressable>
			<View style={[styles.container, { backgroundColor: theme.colors.background }]}>
				{user ? (
					<FlatList
						data={sortedPosts}
						renderItem={renderItem}
						keyExtractor={(item) => item._id ? item._id.toString() : ''} // Identificador único de cada post
						numColumns={3} // Tres columnas fijas
						contentContainerStyle={styles.list}
						ItemSeparatorComponent={() => <View style={styles.separator} />} // Separación entre los ítems
					/>
				) : (
					<Text style={styles.errorText}>{t('userNotFound')}</Text>
				)}
				{error && <Text style={styles.errorText}>{error}</Text>}
			</View>
		</View>);
};

const styles = StyleSheet.create({
	postImage: {
		width: '100%',
		height: 200, // Ajusta según lo necesites
		backgroundColor: 'black',
	},
	videoWrapper: {
		position: 'relative',
		width: '100%',
		height: 200, // Ajusta según lo necesites
	},
	noImageText: {
		textAlign: 'center',
		color: 'gray',
	},
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: '#fff',
		top: 130,
	},
	list: {
		paddingBottom: 20,
		paddingHorizontal: 10,
	},
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f0f0f0', // Color de fondo suave
	},
	itemContainer: {
		margin: 4, // Espacio entre los ítems
		alignItems: 'center',
	},
	separator: {
		width: '100%',
		height: 10, // Altura de la separación
		backgroundColor: 'transparent', // O el color que prefieras
	},
	postImage: {
		width: 100,
		height: 100,
		resizeMode: 'cover',
		borderRadius: 12,
	},
	editarPostChildLayout: {
		height: 99,
		width: 99,
		top: 474,
		borderRadius: 10,
		left: 260,
		position: "absolute"
	},
	iconLayout3: {
		top: 475,
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
	postsTypo: {
		textAlign: "left",
		color: "#000",
		fontFamily: "Poppins-SemiBold",
		fontWeight: "600",
		position: "absolute"
	},
	iconLayout2: {
		height: "100%",
		width: "100%"
	},
	iconLayout1: {
		top: 366,
		height: 99,
		width: 99,
		borderRadius: 10,
		position: "absolute"
	},
	unsplashig7vn6okgneIconPosition: {
		top: 148,
		height: 99,
		width: 99,
		position: "absolute"
	},
	iconLayout: {
		top: 257,
		height: 99,
		width: 99,
		borderRadius: 10,
		position: "absolute"
	},
	editarPostChild: {
		backgroundColor: "#c4c4c4"
	},
	unsplash76dgucmupv4Icon: {
		left: 41
	},
	unsplashmxfjwuffdi4Icon: {
		left: 150
	},
	blackBase21: {
		top: 0,
		height: 41
	},
	editarMisPosts: {
		top: 70,
		left: 126,
		fontSize: 18,
		width: 146
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
	unsplashmv38tbLjj8Icon: {
		left: 41
	},
	unsplashqbf59tu077qIcon: {
		left: 260
	},
	editarPostItem: {
		left: 150
	},
	posts: {
		top: 120,
		fontSize: 14,
		left: 41
	},
	unsplashig7vn6okgneIcon: {
		left: 41,
		borderRadius: 10
	},
	icon1: {
		borderRadius: 10
	},
	unsplashig7vn6okgne: {
		left: 41
	},
	unsplashclv9dfjlwacIcon: {
		left: 41
	},
	unsplashqpkpatk0fakIcon: {
		borderRadius: 10,
		left: 260
	},
	unsplashzbwstHz0IIcon: {
		left: 260
	},
	unsplashq2b08qyxkc4Icon: {
		left: 150,
		borderRadius: 10
	},
	unsplashl4v4t5adtneIcon: {
		left: 150
	},
	editarPostInner: {
		top: 742,
		left: 24,
		width: 318,
		height: 1,
		position: "absolute"
	},
	groupIcon: {
		top: 775,
		height: 75
	},
	editarPost: {
		backgroundColor: "#fff",
		flex: 1,
		height: 844,
		overflow: "hidden",
		width: "100%"
	}
});

export default EDITARPOST;

/*<Image style={styles.editarPostChildLayout} resizeMode="cover" source={require("../../assets/images/unsplash_xEJoSsDCnR8.png")}/>
					<Image style={[styles.unsplash76dgucmupv4Icon, styles.iconLayout3]} resizeMode="cover" source={require("../../assets/images/unsplash_76dgUcMupv4.png")} />
					<Image style={[styles.unsplashmxfjwuffdi4Icon, styles.iconLayout3]} resizeMode="cover" source={require("../../assets/images/unsplash_MxFjwuFFDi4.png")}/>
					<Text style={[styles.editarMisPosts, styles.postsTypo]}>{t('editMy')}</Text>
					<Image style={[styles.unsplashmv38tbLjj8Icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_mv38TB_Ljj8.png")} />
					<Image style={[styles.unsplashqbf59tu077qIcon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/unsplash_qbf59TU077Q.png")} />
					<Image style={[styles.editarPostItem, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/Rectangle 276.png")} />
					<Text style={[styles.posts, styles.postsTypo]}>{t('posts')}</Text>
					<Image style={[styles.unsplashig7vn6okgneIcon, styles.unsplashig7vn6okgneIconPosition]} resizeMode="cover" source={require("../../assets/images/unsplash_ig7vN6OkGNE.png")}/>
					<Image style={[styles.unsplashig7vn6okgneIcon, styles.unsplashig7vn6okgneIconPosition]} resizeMode="cover" source={require("../../assets/images/unsplash_ig7vN6OkGNE.png")}/>
					<Image style={[styles.unsplashig7vn6okgneIcon, styles.unsplashig7vn6okgneIconPosition]} resizeMode="cover" source={require("../../assets/images/unsplash_ig7vN6OkGNE.png")}/>
					<Image style={[styles.unsplashig7vn6okgneIcon, styles.unsplashig7vn6okgneIconPosition]} resizeMode="cover" source={require("../../assets/images/unsplash_ig7vN6OkGNE.png")}/>
					<Pressable style={[styles.unsplashig7vn6okgne, styles.unsplashig7vn6okgneIconPosition]} onPress={() => navigation.navigate('editarfoto')}>
						<Image style={[styles.icon1, styles.iconLayout2]} resizeMode="cover" source={require("../../assets/images/unsplash_ig7vN6OkGNE.png")} />
					</Pressable>
					<Image style={[styles.unsplashclv9dfjlwacIcon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_Clv9DfJLwac.png")} />
					<Image style={[styles.unsplashqpkpatk0fakIcon, styles.unsplashig7vn6okgneIconPosition]} resizeMode="cover" source={require("../../assets/images/unsplash_QpKPAtk0fak.png")}/>
					<Image style={[styles.unsplashzbwstHz0IIcon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_ZbWSt_Hz0-I.png")} />
					<Image style={[styles.unsplashq2b08qyxkc4Icon, styles.unsplashig7vn6okgneIconPosition]} resizeMode="cover" source={require("../../assets/images/unsplash_Q2B08QyXKC4.png")} />
					<Image style={[styles.unsplashl4v4t5adtneIcon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_L4v4T5aDtnE.png")} />
					<Image style={styles.editarPostInner} resizeMode="cover" source={require("../../assets/images/Line 10.png")} />*/