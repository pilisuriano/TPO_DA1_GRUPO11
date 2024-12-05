import React, { useContext, useEffect, useState } from "react";
import {Image, StyleSheet, Text, View, Pressable, ActivityIndicator, FlatList} from "react-native";
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { fetchAnotherUserProfile } from "../../src/features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from '../../src/context/ThemeContext';

const USUARIOENCONTRADO = () => {
    const navigation = useNavigation();
	const route = useRoute();
	const {user} = route.params;
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const {posts, loading, error} = useSelector((state) => state.user);
	const { theme } = useContext(ThemeContext);


	useEffect(() => {
		const fetchUser = async () => {
		  try {
			const response = await axios.get(`api/users/${user._id}`);
			setUser(response.data);
		  } catch (err) {
			setError(err.message);
		  } finally {
			setLoading(false);
		  }
		};
	
		fetchUser();
	  }, [user._id]);

	  useEffect(() => {
		dispatch(fetchAnotherUserProfile(user._id));
	  }, [dispatch, user._id]);

	  useFocusEffect(
		React.useCallback(() => {
		  dispatch(fetchAnotherUserProfile(user._id)); // Obtener el perfil y posts del usuario
		}, [dispatch]) // Solo se vuelve a ejecutar cuando se enfoca la página
	  );

	  /*useFocusEffect(
		React.useCallback(() => {
		  dispatch(fetchAnotherUserProfile()); // Obtener el perfil y posts del usuario
		}, [dispatch]) // Solo se vuelve a ejecutar cuando se enfoca la página
	  );*/

	  useEffect(() => {
		console.log('User:', user);
		console.log('Posts:', posts);
	  }, [user, posts]);
	
	  if (loading) {
		return <ActivityIndicator size="large" color="#0000ff" />;
	  }
	
	  if (error) {
		return <Text style={styles.errorText}>Error: {error}</Text>;
	  }
  	

	  if (loading) {
		return (
		  <View style={styles.loadingContainer}>
			<ActivityIndicator size="large" color="#bb4426" />
		  </View>
		);
	  }
	
	  if (!user) {
		return (
		  <View style={styles.loadingContainer}>
			<Text>{t('userNotFound')}</Text>
		  </View>
		);
	  }

	  const renderItem = ({ item }) => {
		// Extraer la primera URL de 'media'
		const firstMedia = item.media && item.media.length > 0 ? item.media[0].url : null;
	  
		return (
		  <View style={styles.itemContainer}>
			{firstMedia ? (
			  <Image source={{ uri: firstMedia }} style={styles.postImage} />
			) : (
			  <Text style={styles.noImageText}>No image</Text>
			)}
		  </View>
		);
	  };

	  const sortedPosts = user.posts.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));


  	return (
    		/*<View style={styles.usuarioEncontrado}>
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
      			<View style={styles.container}>
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
    		</View>);*/
			<View style={[styles.usuarioEncontrado, { backgroundColor: theme.colors.background }]}>
          {user ? (
            <>
      			<Image style={styles.unsplash4Qfycgpc4cIcon} resizeMode="cover" source={{ uri: user.coverImage }} />
      			<Text style={[styles.perfil, styles.perfilTypo, { color: theme.colors.text }]}>{t('profile')}</Text>
            <Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('search')}>
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
                  <Text style={[styles.errorText, { color: theme.colors.text }]}>{t('userNotFound')}</Text>
                )}
                {error && <Text style={styles.errorText}>{error}</Text>}
              </View>
      {user && (
					<>
              <Image style={styles.unsplashp5bobf0xjuaIcon} resizeMode="cover" source={{ uri: user.profileImage }} />
              <Text style={[styles.martinPerez, styles.perfilTypo, { color: theme.colors.text }]}>{user.fullName}</Text>
              <Text style={[styles.posts, { color: theme.colors.text }]}>{t('posts')}</Text>
              <Text style={[styles.imAPostive, styles.seguirTypo, { color: theme.colors.text }]}>{user.description}</Text>
              <Image style={styles.lineIcon} resizeMode="cover" source={require("../../assets/images/Line 10.png")} />
              <Text style={[styles.text, styles.textTypo, { color: theme.colors.text }]}>{user.posts.length}</Text>
              <Text style={[styles.text1, styles.textTypo, { color: theme.colors.text }]}>{user.following}</Text>
              <Text style={[styles.k, styles.textTypo, { color: theme.colors.text }]}>{user.followers}</Text>
              <View style={[styles.lineView, styles.lineViewLayout]} />
              <Text style={[styles.posts1, styles.posts1Typo, { color: theme.colors.text }]}>{t('posts')}</Text>
              <Pressable style={[styles.siguiendo, styles.postsPosition]} onPress={() => navigation.navigate('seguidos')}>
                <Text style={[styles.posts1Typo, { color: theme.colors.text }]}>{t('following')}</Text>
              </Pressable>
              <Pressable style={[styles.seguidores, styles.postsPosition]} onPress={() => navigation.navigate('seguidores')}>
                <Text style={[styles.posts1Typo, { color: theme.colors.text }]}>{t('followers')}</Text>
              </Pressable>
				  	</>
				)}
        </>
        ) : (
          <Text style={styles.errorText}>User not found</Text>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
	separator: {
		width: '100%',
		height: 10, // Altura de la separación
		backgroundColor: 'transparent', // O el color que prefieras
	  },
	  container: {
		flex: 1,
		padding: 10,
		backgroundColor: '#fff',
		top: 420,
		left: 25,
	  },
	  loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f0f0f0', // Color de fondo suave
	  },
	  loadingText: {
		marginTop: 10,
		fontSize: 18,
		color: '#888',
		fontWeight: '600',
	  },
	  header: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
	  },
	  list: {
		justifyContent: 'flex-start',
	  },
	  postContainer: {
		borderRadius: 7,
		overflow: 'hidden',
		backgroundColor: '#f0f0f0',
	  },
	  postImage: {
		width: 100,
		height: 100,
		resizeMode: 'cover',
		borderRadius: 12,
	  },
	  itemContainer: {
		margin: 4, // Espacio entre los ítems
		alignItems: 'center',
	  },
	  noImageText: {
		fontSize: 12,
		textAlign: 'center',
		padding: 10,
		color: '#888',
	  },
	  errorText: {
		color: 'red',
		textAlign: 'center',
		marginTop: 20,
	  },
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
