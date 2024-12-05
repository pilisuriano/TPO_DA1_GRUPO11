import React, { useState, useEffect, useContext } from "react";
import { Image, StyleSheet, View, Text, Pressable, ScrollView, Platform, StatusBar, FlatList, ActivityIndicator, Alert, Button, useColorScheme } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import Toolbar from "@/components/Toolbar";
import { fetchUserProfile } from './../../src/features/users/userSlice';
import { useTranslation } from 'react-i18next';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { ThemeContext } from '../../src/context/ThemeContext'; // Importar el contexto de tema
import { Video } from 'expo-av';

const MYPROFILE = () => {
  const navigation = useNavigation();
  const router = useRouter()
  const dispatch = useDispatch();
  const { user, posts, loading, error } = useSelector((state) => state.user);
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    dispatch(fetchUserProfile()); 
  }, [dispatch]);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchUserProfile()); 
    }, [dispatch])
  );

  useEffect(() => {
    if (error) {
      Alert.alert('Error', `Could not fetch user profile. Please try again. ${error}`);
    }
  }, [error]);


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
    // Extraer el primer elemento de 'media'
    const firstMedia = item.media && item.media.length > 0 ? item.media[0] : null;
  
    // Determinar si es un video (por ejemplo, comprobando la extensión)
    const isVideo = firstMedia && firstMedia.url && firstMedia.url.endsWith('.mp4'); // Ajusta según el tipo de archivo de tus videos
  
    return (
      <View style={styles.itemContainer}>
        {firstMedia ? (
          isVideo ? (
            // Si es un video, utiliza el componente Video de expo-av
            <Video
              source={{ uri: firstMedia.url }}
              style={styles.postImage} // Usar el mismo estilo para imágenes y videos
              resizeMode="cover" // Ajuste del video para cubrir el contenedor
              shouldPlay={false} // No comienza a reproducir automáticamente (puedes cambiarlo a `true` si quieres que el video se reproduzca automáticamente)
              isLooping={false} // Si quieres que el video se repita, establece esto en `true`
              useNativeControls={true} // Muestra los controles nativos de reproducción
            />
          ) : (
            // Si no es un video, muestra la imagen
            <Image source={{ uri: firstMedia.url }} style={styles.postImage} />
          )
        ) : (
          <Text style={styles.noImageText}>No media</Text>
        )}
      </View>
    );
  };

  const sortedPosts = user.posts.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {user ? (
        <>
          <Toolbar title={t('profile')} />

          {/* Banner, image profile y datos */}
          <View style={styles.bannerContainer}>
            <Image style={styles.banner} resizeMode="cover" source={{ uri: user.coverImage }} />

            <View style={styles.profileImgContainer}>
              <Image style={styles.profileImage} resizeMode="cover" source={{ uri: user.profileImage }} />
            </View>

            <View>
              <Text style={[styles.fullName, { color: theme.colors.text }]}>{user.fullName}</Text>
              <View style={styles.rowContainer}>
                <Text style={[styles.gamificationLevel]}>{t('level')} {user.gamificationLevel}</Text>
                <Image style={[styles.vectorIcon]} resizeMode="cover" source={require("../../assets/images/Chat.png")} />
                <Text style={[styles.comments, { color: theme.colors.text }]}>{user.comments}</Text>

                {/* boton settings */}
                <Pressable style={styles.settingsButton} onPress={() => navigation.navigate('settings')}>
                  <MaterialIcons name="settings" size={30} color={theme.colors.text} />
                </Pressable>
              </View>
            </View>


            <Text style={[styles.description, { color: theme.colors.text }]}>{user.description}</Text>
          </View>

          {/* boton editar perfil */}
          <Pressable style={styles.editProfileButton} onPress={() => navigation.navigate('editarpost')} >
            <Text style={[styles.editProfileText, styles.nivel4Typo]}>{t('editProfile')}</Text>
          </Pressable>

          {/* Posts, Siguiendo, Seguidores */}
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={[styles.statValue, { color: theme.colors.text }]}>{user.posts.length}</Text>
              <Text style={[styles.statLabel, { color: theme.colors.text }]}>{t('profilePostsStat')}</Text>
            </View>
            <View style={styles.stat}>
              <Pressable style={styles.stat} onPress={() => {
                if (user.following > 0) {
                  router.push({ pathname: "/(tabs)/following", params: { userId: user._id }})
                }
              }}>
                <Text style={[styles.statValue, { color: theme.colors.text }]}>{user.following}</Text>
                <Text style={[styles.statLabel, { color: theme.colors.text }]}>{t('following')}</Text>
              </Pressable>
            </View>

            <View style={styles.stat}>
              <Pressable style={styles.stat} onPress={() => {
                if (user.followers > 0) {
                  router.push({ pathname: "/(tabs)/followers", params: { userId: user._id }})
                }
              }}>
                <Text style={[styles.statValue, { color: theme.colors.text }]}>{user.followers}</Text>
                <Text style={[styles.statLabel, { color: theme.colors.text }]}>{t('followers')}</Text>
              </Pressable>
            </View>

          </View>

          {/* Posts */}
          <View style={styles.postsContainer}>

            <View style={styles.postsRowContainer}>
              <Text style={[styles.postsTitle, { color: theme.colors.text }]}>{t('profilePostsStat')}</Text>
              <Pressable style={styles.editPostsButton} onPress={() => navigation.navigate('editarpost')}>
                <MaterialIcons name="edit" size={30} color={theme.colors.text} />
                <Text style={[styles.editPostsLabel, { color: theme.colors.text }]}>{t('editPosts')}</Text>
              </Pressable>
            </View>

            <FlatList
              data={sortedPosts}
              renderItem={renderItem}
              keyExtractor={(item) => item._id ? item._id.toString() : ''}
              numColumns={3}
              contentContainerStyle={styles.list}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
          </View>
    {/* <View style={styles.myProfile}>
      <Toolbar title="Post" />
      <InfoMessage message="Próximamente podrás ver tu perfil y personalizar tu cuenta." />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={post}
          renderItem={renderPost}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
  <View style={[styles.usuarioEncontrado, { backgroundColor: theme.colors.background }]}>
          {user ? (
            <>
      			<Image style={styles.unsplash4Qfycgpc4cIcon} resizeMode="cover" source={{ uri: user.coverImage }} />
      			<Text style={[styles.perfil, styles.perfilTypo, { color: theme.colors.text }]}>{t('profile')}</Text>
            <Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('home')}>
              <Image style={[styles.icon]} resizeMode="cover" source={require("../../assets/images/Arrow---Left-2.png")} />
            </Pressable>
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
                  <Text style={[styles.errorText,{ color: theme.colors.text}] }>{t('userNotFound')}</Text>
                )}
                {error && <Text style={styles.errorText}>{error}</Text>}
              </View>
      {user && (
					<>
              <Image style={styles.unsplashp5bobf0xjuaIcon} resizeMode="cover" source={{ uri: user.profileImage }} />
              <Text style={[styles.martinPerez, styles.perfilTypo, { color: theme.colors.text}]}>{user.fullName}</Text>
              <Text style={[styles.posts, { color: theme.colors.text}]}>{t('posts')}</Text>
              <Text style={[styles.imAPostive, styles.seguirTypo, { color: theme.colors.text}]}>{user.description}</Text>
              <Text style={[styles.nivel4, styles.text2Typo]}>{t('level')} {user.gamificationLevel}</Text>
              <Pressable style={styles.iconlylightOutlinesetting} onPress={() => navigation.navigate('settings')}>
                <Image style={[styles.icon, styles.iconLayout2]} resizeMode="cover" source={require("../../assets/images/Setting.png")} />
              </Pressable>
              <Pressable style={styles.myProfileItem} onPress={() => navigation.navigate('editprofile', { userId: user._id, posts: user.posts})}>
                <Text style={[styles.editarPerfil, styles.nivel4Typo]}>{t('editProfile')}</Text>
              </Pressable>
              <Image style={styles.lineIcon} resizeMode="cover" source={require("../../assets/images/Line 10.png")} />
              <Text style={[styles.text, styles.textTypo, { color: theme.colors.text}]}>{user.posts.length}</Text>
              <Text style={[styles.text1, styles.textTypo, { color: theme.colors.text}]}>{user.following}</Text>
              <Text style={[styles.k, styles.textTypo, { color: theme.colors.text}]}>{user.followers}</Text>
              <View style={[styles.lineView, styles.lineViewLayout]} />
              <Text style={[styles.posts1, styles.posts1Typo, { color: theme.colors.text}]}>{t('posts')}</Text>
              <Pressable style={[styles.siguiendo, styles.postsPosition]} onPress={() => navigation.navigate('seguidos')}>
                <Text style={[styles.posts1Typo, { color: theme.colors.text}]}>{t('following')}</Text>
              </Pressable>
              <Pressable style={[styles.seguidores, styles.postsPosition]} onPress={() => navigation.navigate('seguidores')}>
                <Text style={[styles.posts1Typo, { color: theme.colors.text}]}>{t('followers')}</Text>
              </Pressable>
              <Pressable style={[styles.editarPostsParent, styles.image13IconLayout]} onPress={() => navigation.navigate('editarpost')}>
                <Text style={[styles.editarPosts, styles.editarPostsTypo, { color: theme.colors.text}]}>{t('editPosts')}</Text>
                <Image style={[styles.image13Icon, styles.image13IconLayout]} resizeMode="cover" source={require("../../assets/images/image 13.png")} />
              </Pressable>
              <View style={[styles.iconlyboldchat, styles.chatLayout]}>
                  <View style={[styles.chat, styles.chatLayout]}>
                  <View style={[styles.chat, styles.chatLayout]}>
                    <Text style={[styles.text2, styles.text2Typo, { color: theme.colors.text}]}>{user.comments}</Text>
                    <Image style={[styles.vectorIcon, styles.iconLayout2]} resizeMode="cover" source={require("../../assets/images/Chat.png")} />
                  </View>
                </View>
              </View>
				  	</>
				)} */}
        </>
      ) : (
        <Text style={styles.errorText}>{t('profileNotFound')}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 26 : 26,
    paddingHorizontal: 26
  },
  bannerContainer: {
    marginBottom: 20,
    marginTop: 16
  },
  banner: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
    alignSelf: 'center',
    backgroundColor: "#e9e9e9"
  },
  profileImgContainer: {
    position: 'absolute',
    top: 100,
    borderRadius: 50,
    borderWidth: 2,
    marginHorizontal: 10,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  profileImage: {
    width: 80,
    height: 80,
    backgroundColor: '#d3d3d3'
  },
  fullName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: "30%",
    marginTop: 5
  },
  rowContainer: {
    flexDirection: 'row',
    marginLeft: "30%",
  },
  postsRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  vectorIcon: {
    height: 13.5,
    width: 13.5,
    alignSelf: 'center',
    marginHorizontal: 5
  },
  gamificationLevel: {
    color: '#F17B47',
    marginTop: 4,
    marginHorizontal: 16,
    fontFamily: "Poppins-Medium",
  },
  comments: {
    color: '#F17B47',
    marginTop: 4,
    fontFamily: "Poppins-Medium",
  },
  iconSettings: {
    width: 20,
    height: 20
  },
  description: {
    color: '#555',
    marginHorizontal: 20,
    marginTop: 12,
    fontFamily: "Poppins-Medium",
  },
  editProfileButton: {
    backgroundColor: '#B5432A',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 100,
    alignSelf: 'center',
    marginVertical: 10,
  },
  editProfileText: { color: '#FFFFFF' },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  editPostsButton: {
    left: 55,
  },
  stat: { alignItems: 'center' },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  statValue: { fontSize: 16, fontWeight: 'bold' },
  statLabel: {
    fontSize: 14,
    color: '#000000',
    fontFamily: "Poppins-Regular"
  },
  settingsButton: {
    left: 75,
  },
  postsTitle: {
    fontSize: 14,
    color: '#000000',
    fontFamily: "Poppins-SemiBold"
  },
  postsContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 5
  },
  editPostsLabel: {
    color: '#000000',
    opacity: 0.8,
    left: -80,
    top: -30,
  },
  editProfileIcon: {
    marginLeft: 5
  },
  pressableContainer: {
    flexDirection: 'row',

  },
  darkBackground: {
    backgroundColor: '#1A1A1A',
  },
  lightBackground: {
    backgroundColor: '#F0F0F0',
  },
  darkText: {
    color: '#FFFFFF',
  },
  lightText: {
    color: '#000000',
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
    justifyContent: 'center',
    alignItems: 'center',
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
  separator: {
    width: '100%',
    height: 10, // Altura de la separación
    backgroundColor: 'transparent', // O el color que prefieras
  },
  groupIconPosition: {
    width: 390,
    left: 0,
    position: "absolute"
  },
  nivel4Typo: {
    fontSize: 12,
    textAlign: "left"
  },
  textTypo: {
    fontSize: 14,
    textAlign: "left",
    color: "#000",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    position: "absolute"
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  icon: {
    height: "100%",
    borderRadius: 10,
    width: "100%"
  },
});

export default MYPROFILE;
