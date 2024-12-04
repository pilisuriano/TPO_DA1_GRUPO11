import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, Pressable, View, ActivityIndicator, Platform, StatusBar, FlatList } from "react-native";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { fetchFollowers } from "@/src/features/folllowers/followers.slice";
import { useDispatch, useSelector } from "react-redux";
import { useLocalSearchParams } from "expo-router";
import Toolbar from "@/components/Toolbar";
import InfoMessage from "@/components/InfoMessage";

const Followers = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const params = useLocalSearchParams();
  const { userId } = params;
  console.log("mari: ", userId)
  const { data, loading, error } = useSelector((state) => state.followers.followers);
  const { t } = useTranslation();


  useEffect(() => {
    dispatch(fetchFollowers(userId));
  }, [dispatch]);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchFollowers(userId));
    }, [dispatch])
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#bb4426" />
      </View>
    );
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.profileImage} resizeMode="cover" source={{ uri: item.profileImage }} />
      <Text style={styles.userName}>{item.fullName}</Text>
      <Pressable onPress={() => console.log(`Interacción con ${item.fullName}`)}>
        <Image
          style={styles.actionIcon}
          source={require('../../assets/images/unfollowIcon.png')} // Reemplazar con la ruta real del ícono
        />
      </Pressable>
    </View>
  );


  return (
    <View style={styles.container}>
      <Toolbar title={t('followers')} />
      {data.followers.length > 0 ? (
        <FlatList
          data={data.followers}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          ListHeaderComponent={<Text style={styles.headerText}>Hoy</Text>}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <InfoMessage message={t('userDoesNotHaveFollowers')}/>
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
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerText: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "#000000",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileImage: {
    width: 46,
    height: 46,
    borderRadius: 25,
    marginRight: 12,
    backgroundColor: 'gray'
  },
  userName: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: "#000000"
  },
  actionIcon: {
    width: 24,
    height: 24,
    tintColor: '#000',
  },
});

export default Followers;
