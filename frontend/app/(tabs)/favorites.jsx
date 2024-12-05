import React, { useEffect } from 'react';
import { Image, StyleSheet, View, Text, Pressable, ActivityIndicator, Platform, StatusBar, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorites } from "@/src/features/favorites/favorites.slice";
import { useFocusEffect } from 'expo-router';
import Toolbar from '@/components/Toolbar';
import InfoMessage from '@/components/InfoMessage';

const POSTSFAVORITOS = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { favorites, loading, error } = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  useEffect(() => {
    console.log("favorites: ", favorites)
  }, [favorites]);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchFavorites());
    }, [dispatch])
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#bb4426" />
      </View>
    );
  }

  const renderItem = ({ item }) => {
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

  return (
    <View style={styles.container}>


      <Toolbar title={t('favoritePosts')} />

      {favorites && favorites.favorites.length > 0 ? (
        <FlatList
          data={favorites.favorites}
          renderItem={renderItem}
          keyExtractor={(item) => item._id ? item._id.toString() : ''}
          numColumns={3}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      ) : (
      <InfoMessage message={t('userDoesNotHaveFavorites')} />
      )}

      {/* <Image style={[styles.unsplashxejossdcnr8Icon, styles.iconLayout3]} resizeMode="cover" source={require("../../assets/images/unsplash_xEJoSsDCnR8.png")} />
      <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
      </View>
      <Image style={[styles.image37Icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/image 37.png")} />
      <Text style={styles.misPostsFavoritos}>{t('favoritePosts')}</Text>
      <Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('settings')}>
        <Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/Arrow---Left-2.png")} />
      </Pressable>
      <Image style={[styles.unsplashqbf59tu077qIcon, styles.iconLayout3]} resizeMode="cover" source={require("../../assets/images/unsplash_qbf59TU077Q.png")} />
      <View style={[styles.rectangleGroup, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
      </View>
      <Image style={[styles.image35Icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/image 37.png")} />
      <Pressable style={[styles.image, styles.imagePosition]} onPress={() => navigation.navigate('userfoundcomment')}>
        <Image style={[styles.icon1, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/imageasado.png")} />
      </Pressable>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
      </View>
      <Image style={[styles.image33Icon, styles.iconPosition]} resizeMode="cover" source={require("../../assets/images/image 37.png")} />
      <Image style={[styles.unsplashclv9dfjlwacIcon, styles.imagePosition]} resizeMode="cover" source={require("../../assets/images/unsplash_Clv9DfJLwac.png")} />
      <View style={[styles.rectangleParent1, styles.groupViewPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
      </View>
      <Image style={[styles.image36Icon, styles.iconPosition]} resizeMode="cover" source={require("../../assets/images/image 37.png")} />
      <Image style={[styles.unsplashq2b08qyxkc4Icon, styles.iconLayout3]} resizeMode="cover" source={require("../../assets/images/unsplash_Q2B08QyXKC4.png")} />
      <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
      </View>
      <Image style={[styles.image34Icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/image 37.png")} />
      <Image style={styles.postsFavoritosChild} resizeMode="cover" source={require("../../assets/images/Line 10.png")} /> */}
    </View>);
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 26 : 26,
    paddingHorizontal: 26
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },

  list: {
    paddingBottom: 20,
    paddingHorizontal: 10,
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
});

export default POSTSFAVORITOS;
