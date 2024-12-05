import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, Text, Pressable, Platform, StatusBar, FlatList, ActivityIndicator, Alert } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import Toolbar from "@/components/Toolbar";
import { fetchUserProfile } from './../../src/features/users/userSlice';
import { useTranslation } from 'react-i18next';
import { useRouter } from "expo-router";


const MYPROFILE = () => {
  const navigation = useNavigation();
  const router = useRouter()
  const dispatch = useDispatch();
  const { user, posts, loading, error } = useSelector((state) => state.user);
  const { t } = useTranslation();

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
    <View style={styles.container}>
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
              <Text style={[styles.fullName]}>{user.fullName}</Text>
              <View style={styles.rowContainer}>
                <Text style={[styles.gamificationLevel]}>{t('level')} {user.gamificationLevel}</Text>
                <Image style={[styles.vectorIcon]} resizeMode="cover" source={require("../../assets/images/Chat.png")} />
                <Text style={styles.comments}>{user.comments}</Text>

                {/* boton settings */}
                <Pressable style={{ marginLeft: 'auto' }} onPress={() => router.push('/(tabs)/settings')}>
                  <Image style={[styles.iconSettings]} resizeMode="cover" source={require("../../assets/images/Setting.png")} />
                </Pressable>
              </View>
            </View>


            <Text style={[styles.description]}>{user.description}</Text>
          </View>

          {/* boton editar perfil */}
          <Pressable style={styles.editProfileButton} >
            <Text style={[styles.editProfileText, styles.nivel4Typo]}>{t('editProfile')}</Text>
          </Pressable>

          {/* Posts, Siguiendo, Seguidores */}
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statValue}>{user.posts.length}</Text>
              <Text style={styles.statLabel}>{t('profilePostsStat')}</Text>
            </View>
            <View style={styles.stat}>
              <Pressable style={styles.stat} onPress={() => {
                if (user.following > 0) {
                  router.push({ pathname: "/(tabs)/following", params: { userId: user._id }})
                }
              }}>
                <Text style={styles.statValue}>{user.following}</Text>
                <Text style={styles.statLabel}>{t('following')}</Text>
              </Pressable>
            </View>

            <View style={styles.stat}>
              <Pressable style={styles.stat} onPress={() => {
                if (user.followers > 0) {
                  router.push({ pathname: "/(tabs)/followers", params: { userId: user._id }})
                }
              }}>
                <Text style={styles.statValue}>{user.followers}</Text>
                <Text style={styles.statLabel}>{t('followers')}</Text>
              </Pressable>
            </View>

          </View>

          {/* Posts */}
          <View style={styles.postsContainer}>

            <View style={styles.postsRowContainer}>
              <Text style={styles.postsTitle}>{t('profilePostsStat')}</Text>
              <Pressable style={styles.pressableContainer} onPress={() => navigation.navigate('editarpost')}>
                <Text style={styles.editPostsLabel}>{t('editPosts')}</Text>
                <Image style={styles.editProfileIcon} resizeMode="cover" source={require("../../assets/images/image 13.png")} />
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
  },
  editProfileIcon: {
    marginLeft: 5
  },
  pressableContainer: {
    flexDirection: 'row',

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
