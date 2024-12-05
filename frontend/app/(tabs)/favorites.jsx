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
    height: 10,
    backgroundColor: 'transparent',
  },
  postImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  itemContainer: {
    margin: 4,
    alignItems: 'center',
  },
  iconButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 5,
  },
  noImageText: {
    fontSize: 12,
    textAlign: 'center',
    padding: 10,
    color: '#888',
  },
});

export default POSTSFAVORITOS;
