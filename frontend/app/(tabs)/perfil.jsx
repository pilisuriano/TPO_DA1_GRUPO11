import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, Text, Pressable, Platform, StatusBar, FlatList, ActivityIndicator, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Toolbar from "@/components/Toolbar";
import Icon from 'react-native-vector-icons/MaterialIcons';
import InfoMessage from "@/components/InfoMessage";
import { fetchUserProfile } from './../../src/features/users/userSlice';


const MYPROFILE = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { user, posts, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserProfile()); // Disparar la acción para obtener el perfil del usuario
  }, [dispatch]);

  /*useEffect(() => {
    if (user) {
      console.log('User:', user);
    } else {
      console.log('User is still loading...');
    }
  }, [user]);*/

  useEffect(() => {
    console.log('User:', user);
    console.log('Posts:', posts);
  }, [user, posts]);

  useEffect(() => {
    if (error) {
      Alert.alert('Error', `Could not fetch user profile. Please try again. ${error}`);
    }
  }, [error]); // Este efecto se activará solo si el estado de error cambia

  if (loading) return <Text>Cargando publicaciones...</Text>;

  return (
    /*<View style={styles.myProfile}>
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
  );*/
  <View style={styles.myProfile}>
      <Toolbar title="My Profile" />
      {user && (
        <View>
          <Text style={styles.userInfo}>Nombre: {user.fullName}</Text>
          <Text style={styles.userInfo}>Nickname: {user.nickname}</Text>
          <Text style={styles.userInfo}>Descripción: {user.description}</Text>
          <Text style={styles.userInfo}>Género: {user.gender}</Text>
          <Text style={styles.userInfo}>Seguidores: {user.followers}</Text>
          <Text style={styles.userInfo}>Siguiendo: {user.following}</Text>
          <Text style={styles.userInfo}>Nivel de Gamificación: {user.gamificationLevel}</Text>
          <Text style={styles.userInfo}>Comentarios: {user.comments}</Text>
        </View>
      )}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <View style={styles.postContainer}>
              <Text style={styles.postTitle}>{item.title}</Text>
              {item.media && item.media.length > 0 && (
                <Image source={{ uri: item.media[0].uri }} style={styles.postImage} />
              )}
              <Text style={styles.postContent}>{item.content}</Text>
              <Text style={styles.postDate}>{new Date(item.createdAt).toLocaleDateString()}</Text>
            </View>
          )}
          keyExtractor={(item) => item._id.toString()} // Asegúrate de usar `_id` si es el identificador correcto
        />
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    margin: 20,
    backgroundColor: '#e0f7fa', // Color de fondo tipo "información"
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#26c6da', // Color de borde
  },
  icon: {
    marginRight: 10
  },
  message: {
    fontSize: 16,
    color: '#004d40', // Color del texto
    flexShrink: 1, // Ajusta el texto en caso de desbordar
  },
  myProfile: {
    // backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 35,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 30 : 30,
    backgroundColor: "#F9F9F9",
  }
});

export default MYPROFILE;
