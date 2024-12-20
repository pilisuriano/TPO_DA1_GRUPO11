import React, { useState, useEffect, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Platform, StatusBar, FlatList, Pressable, Image, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
//import * as Location from "expo-location";
//import MapView, { Marker } from "react-native-maps";
import { createUserPost, resetError } from "../../src/features/posts/postSlice";
import { ThemeContext } from '../../src/context/ThemeContext';
import { useTranslation } from 'react-i18next';
import Toolbar from "@/components/Toolbar";
import * as FileSystem from "expo-file-system"; // Importar para manejar archivos
//import { ScrollView } from "react-native-gesture-handler";

const CreatePost = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const [title, setTitle] = useState("");
  const [media, setMedia] = useState([]);
  const [locationPlace, setLocationPlace] = useState("");
  const [locationCoordinates, setLocationCoordinates] = useState({
    latitude: -34.6037,
    longitude: -58.3816,
  });
  const [loading, setLoading] = useState(false);

  const { postCreated, error } = useSelector((state) => state.post);

  // Request location permission
  /*useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setLocationCoordinates({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      // Fetch the location name using reverse geocoding
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.coords.latitude}&lon=${location.coords.longitude}`);
      const data = await response.json();
      setLocationPlace(data.display_name);
    })();
  }, []);*/

  const handleCreatePost = () => {
    try {
      dispatch(resetError());
      const imagesBase64 = media.map((item) => `data:image/jpeg;base64,${item.base64}`);
      const videoBase64 = media.map((item) => `data:video/mp4;base64,${item.base64}`);

      const locationData = {placeName: locationPlace, coordinates: locationCoordinates };
      dispatch(createUserPost({ title, location: locationData, images: imagesBase64 || videoBase64 }));
    } catch (err) {
      console.error("Error during post creation:", err);
      ToastAndroid.show('Hubo un error al publicarel post. Por favor intentelo de nuevo.', ToastAndroid.LONG)
    }
  };
  const convertVideoToBase64 = async (uri) => {
    try {
      // Leer el archivo del video como binario en base64
      const videoBase64 = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      return videoBase64;
    } catch (error) {
      console.error('Error reading video file:', error);
      return null;
    }
  };

  const pickMedia = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      quality: 0.5,
      base64: true,
    });

    if (!result.canceled) {
      const selectedMedia = await Promise.all(result.assets.map(async (asset) => {
        if (asset.type === 'video') {
          // Convertir video a base64
          const videoBase64 = await convertVideoToBase64(asset.uri);
          return { uri: asset.uri, type: 'video', base64: videoBase64 };
        } else {
          // Si es imagen, ya tiene base64
          return { uri: asset.uri, type: 'image', base64: asset.base64 };
        }
      }));
      setMedia((prev) => [...prev, ...selectedMedia]);
    }
  };

  const removeMedia = (index) => {
    setMedia((prev) => prev.filter((_, i) => i !== index));
  };

  const isButtonEnabled = title.trim() !== '' && media.length !== 0;

  useEffect(() => {
    if (postCreated) {
      router.replace("/(tabs)/home")
      resetValues()
      resetError()
    }
  }, [postCreated]);
  const resetValues = () => {
    setTitle("")
    setMedia([])
    setLocationPlace("")
  }
  

  return (
    <ScrollView style={[styles.post, { backgroundColor: theme.colors.background }]}>
      <Toolbar title={t('createPost')} />
      {loading ? (
        <ActivityIndicator size="large" color="#B5432A" />
      ) : (
        <>
          <Text style={[styles.labelInputs, { color: theme.colors.text }]}>{t('images')}</Text>
          <View style={[styles.background, { backgroundColor: theme.colors.background }]}>
            <Pressable onPress={pickMedia}>
              <Image style={[styles.icon]} source={require("../../assets/images/addGalery.png")} />
            </Pressable>

            {/* Mostrar imagenes seleccionadas */}
            <FlatList
              data={media}
              horizontal
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View style={styles.thumbnailContainer}>
                  <Image source={{ uri: item.uri }} style={styles.thumbnail} />
                  <Pressable style={styles.removeButton} onPress={() => removeMedia(index)}>
                    <Text style={styles.removeButtonText}>×</Text>
                  </Pressable>
                </View>
              )}
            />
          </View>

          <Text style={[styles.labelInputs, { color: theme.colors.text }]}>{t('title')}</Text>
          <View style={[styles.pie, { backgroundColor: theme.colors.background }]}>
            <TextInput
              style={[styles.inputAreaText, { color: theme.colors.text }]}
              multiline={true}
              numberOfLines={3}
              value={title}
              onChangeText={setTitle}
            />
          </View>

          <Text style={[styles.labelInputs, { color: theme.colors.text }]}>{t('location')}</Text>
          <View style={[styles.pie, { backgroundColor: theme.colors.background }]}>
            <TextInput
              style={[styles.inputAreaText, { color: theme.colors.text }]}
              multiline={true}
              numberOfLines={2}
              value={locationPlace}
              onChangeText={setLocationPlace}
            />
          </View>

           {/*<MapView
            style={styles.map}
            region={{
              latitude: locationCoordinates.latitude,
              longitude: locationCoordinates.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={(event) => {
              const { latitude, longitude } = event.nativeEvent.coordinate;
              setLocationCoordinates({
                latitude,
                longitude,
              });

              // Fetch the location name using reverse geocoding
              fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
                .then(response => response.json())
                .then(data => setLocationPlace(data.display_name))
                .catch(error => console.error('Error fetching location name:', error));
            }}
          >
            <Marker coordinate={locationCoordinates} />
          </MapView>*/}

          <View>
            <TouchableOpacity
              style={[styles.postButton, { opacity: isButtonEnabled ? 1 : 0.6 }]}
              disabled={!isButtonEnabled}
              onPress={handleCreatePost}
            >
              <Text style={styles.buttonText}>{t('createPost')}</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 150,
    marginVertical: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  postButton: {
    backgroundColor: '#B5432A',
    borderRadius: 8,
    marginBottom: 70,
    paddingVertical: 12,
    width: "100%",
    alignItems: 'center',
  },
  inputAreaText: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "500",
    borderRadius: 8,
    fontSize: 14,
    color: '#000',
    textAlignVertical: 'top',
  },
  thumbnailContainer: {
    position: "relative",
    marginRight: 10,
    marginTop: 10,
    alignItems: "center"
  },
  thumbnailText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold"
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: "cover"
  },
  removeButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#FF0000",
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  removeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12
  },
  post: {
    flex: 1,
    paddingHorizontal: 35,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 30 : 30,
    backgroundColor: "#F9F9F9",
  },
  labelInputs: {
    color: "#00000",
    textAlign: 'left',
    fontSize: 14,
    marginTop: 10,
    fontFamily: 'Poppins-Medium',
  },
  selectMedia: {
    marginTop: 50
  },
  postText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: "center",
    color: "#000",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
  },
  background: {
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 20
  },
  icon: {
    width: 26,
    height: 26,
    alignSelf: "center",
    marginVertical: 10
  },
  postInner: {
    top: 181,
    borderStyle: "solid",
    borderColor: "#7e5f5b",
    borderWidth: 0.5,
    height: 133
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: '#000',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 1000,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 1600,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  pie: {
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 20
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreatePost;
