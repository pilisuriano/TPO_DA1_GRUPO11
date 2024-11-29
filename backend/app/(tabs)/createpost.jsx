import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View, TextInput, Alert, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserPost, resetError } from "../../src/features/posts/postSlice";
import { useNavigation, CommonActions } from '@react-navigation/native';
import * as ImagePicker from "expo-image-picker";

const CreatePost = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("")
  const [media, setMedia] = useState([]);
  const [formData, setFormData] = useState(new FormData());
  // const [location, setLocation] = useState('');
  const { posts, loading, error } = useSelector((state) => state.post);

  // const [postData, setPostData] = useState({});

  useEffect(() => {
    // Inicializar la estructura del post vacío, si es necesario
    setFormData(new FormData());  // Reiniciar FormData cuando el componente se monta
  }, []);

  const handleCreatePost = async () => {
    formData.append('title', title);
    // formData.append('location', JSON.stringify(location));
    /*if (media.length > 0 && media[0].uri) {
      const file = media[0];
      formData.append('media', {
        uri: file.uri,
        type: file.type || 'image/jpeg',
        name: file.name || 'photo.jpg',
    });
    }*/
    console.log(formData);

    try {
      dispatch(resetError());
      const res = await dispatch(createUserPost(formData)).unwrap();  // llamada a funcion del slice que llama a api
      if (res) {
        navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [{ name: 'home' }]
        }));
      }
    } catch (err) {
      console.error("Error during post creation:", err);
      Alert.alert("Error", "Could not create post. Please try again.");
    }
  };

  const pickMedia = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, // Asegura que solo imágenes se seleccionen
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      const file = result.assets[0];
      const mediaData = {
        uri: file.uri,
        type: file.type || 'image/png',
        name: file.fileName || 'photo.png',
      };
      // Verifica la estructura de mediaData
      console.log("Selected media data:", mediaData);
       // Utilizar fetch para crear un archivo Blob desde el URI
      const response = await fetch(mediaData.uri);
      const blob = await response.blob();
      // Clear previous media entries
      /*setMedia([mediaData]);
      const newFormData = new FormData();
      newFormData.append('media', {
        uri: mediaData.uri,
        type: mediaData.type,
        name: mediaData.name,
      });*/
      // Agregar media al FormData existente sin eliminar el title u otros campos
      /*const newFormData = new FormData(formData);  // Copiar los datos existentes
      newFormData.append('media', {
        uri: mediaData.uri,
        type: mediaData.type,
        name: mediaData.name,
      });*/
      const newFormData = new FormData();
      newFormData.append('media', blob, mediaData.name);
      setFormData(newFormData);  // Update formData with the new media
      setMedia([mediaData]);  // Actualizar el estado de los medios seleccionados
    }
  };
  const removeMedia = () => {
    // setPostData({
    //   ...postData,
    //   media: [{ url: "", type: "image" }],
    // });
    setMedia([]);
    setFormData(new FormData());  // Vaciar el estado de media

    /*const mediaFormData = new FormData();
      mediaFormData.append('media', {
        uri: mediaData.uri,
        type: mediaData.type,
        name: mediaData.name,
      });
      setFormData(mediaFormData);
      setMedia([mediaData]);*/
  };


  return (
    <View style={[styles.post, styles.postLayout1]}>
      <Text style={[styles.post1, styles.postTypo]}>Post</Text>
      <Text style={[styles.seleccionarImgenesYo, styles.agregarTypo]}>Seleccionar imágen(es) y/o video</Text>
      <Pressable style={styles.plus} onPress={pickMedia}>
        <Image style={[styles.icon, styles.postLayout1]} resizeMode="cover" source={require("../../assets/images/PlusM.png")} />
      </Pressable>
      {media.length > 0 && media[0].uri ? (
        <View style={styles.thumbnailContainer}>
          <Image source={{ uri: media[0].uri }} style={styles.thumbnail} />
          <Pressable style={styles.removeButton} onPress={removeMedia}>
            <Text style={styles.removeButtonText}>Eliminar</Text>
          </Pressable>
        </View>
      ) : null}
      <TextInput
        style={[styles.input, styles.agregarTypo]}
        value={title}
        onChangeText={setTitle}
        placeholder="Agregar pie de foto"
      />
      <View style={[styles.postChild, styles.postLayout]} />
      {/* <TextInput
          style={[styles.input, styles.agregarTypo]}
          placeholder="Agregar ubicación"
          value={formData.location.placeName}
          onChangeText={(text) => setPostData({ ...postData, location: { ...postData.location, placeName: text } })}
        /> */}
      <View style={[styles.postItem, styles.postItemLayout]} />
      <View style={[styles.rectangleParent, styles.postItemLayout]}>
        <View style={[styles.groupChild, styles.postItemLayout]} />
        <Pressable onPress={handleCreatePost}>
          <Text style={[styles.publicarPost, styles.postTypo]}>Publicar post</Text>
        </Pressable>
      </View>
      <View style={[styles.postInner, styles.postLayout]} />
      <Image style={styles.imageIcon} resizeMode="cover" source={require("../../assets/images/imageubi.png")} />
      {loading && <Text>Loading...</Text>}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    flex: 1,
    height: 844
  },
  post1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    top: 70,
    left: 175,
    width: 43,
    color: "#000",
    textAlign: "left",
    fontFamily: "Poppins-SemiBold",
    fontSize: 18
  },
  plus: {
    left: "82.56%",
    top: "33.53%",
    right: "10.77%",
    bottom: "63.39%",
    width: "6.67%",
    height: "3.08%",
    position: "absolute"
  },
  postInner: {
    top: 181,
    borderStyle: "solid",
    borderColor: "#7e5f5b",
    borderWidth: 0.5,
    height: 133
  },
  /*rectangleView: {
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    borderStyle: "solid",
    borderColor: "#7e5f5b",
    borderWidth: 0.5,
    flex: 1,
    width: "100%",
    height: 133
  },*/
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
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  postLayout1: {
    overflow: "hidden",
    width: "100%"
  },
  groupIcon: {
    top: 775,
    height: 75
  },
  groupIconPosition: {
    width: 390,
    left: 0,
    position: "absolute"
  },
  postTypo: {
    color: '#000',
    textAlign: "left",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    fontSize: 18,
    position: "absolute"
  },
  thumbnailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  removeButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 8,
    marginLeft: 16,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  /*agregarTypo: {
    color: '#000',
    opacity: 0.7,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    fontSize: 14,
    left: 35,
    textAlign: "left",
    position: "absolute"
  },*/
  /*postLayout: {
    height: 40,
    marginBottom: 12,
    width: 321,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    left: 35,
    position: "absolute"
  },*/
  postLayout1: {
    overflow: "hidden",
    width: "100%"
  },
  postItemLayout: {
    marginBottom: 12,
    height: 49,
    width: 321,
    position: "absolute"
  },
  imageIcon: {
    top: 509,
    left: 325,
    width: 20,
    height: 20,
    opacity: 0.5,
    borderRadius: 10,
    position: "absolute"
  },
  /*seleccionarImgenesYo: {
    top: 155,
    width: 259,
    opacity: 0.7,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    fontSize: 14
  },*/
  /*rectangleParent: {
    top: 579,
    left: 35,
    height: 49
  },*/
  publicarPost: {
    top: 11,
    left: 101,
    color: "#fff",
    textAlign: "left",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    fontSize: 18
  },
  groupChild: {
    backgroundColor: "#bb4426",
    borderRadius: 10,
    height: 49,
    left: 0,
    top: 0
  },
  postItem: {
    top: 494,
    backgroundColor: "#f2f2f2",
    height: 49,
    borderRadius: 10,
    left: 35
  },
  agregarUbicacin: {
    top: 468,
    width: 139,
    opacity: 0.7,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    fontSize: 14
  },
  postChild: {
    top: 367,
    height: 84
  },
  agregarPieDe: {
    top: 341,
    width: 139,
    opacity: 0.7,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    fontSize: 14
  },
  /*iconlylightOutlinearrowL: {
    left: "7.73%",
    top: "8.87%",
    right: "89.6%",
    bottom: "88.88%",
    width: "2.67%",
    height: "2.25%",
    position: "absolute"
  },*/
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  /*blackBase21: {
    height: 41,
    top: 0,
    width: 390
  },*/

});

export default CreatePost;

/*
<TextInput
          style={[styles.input, styles.agregarTypo]}
          placeholder="Media URL"
          value={postData.media[0].url}
          onChangeText={(text) => setPostData({ ...postData, media: [{ ...postData.media[0], url: text }] })}
        />
*/










































































/*import * as React from "react";
import {Image, StyleSheet, Text, Pressable, View} from "react-native";

const POST = () => {
  	
    return (
      <View style={[styles.post, styles.postLayout1]}>
          <Text style={[styles.post1, styles.postTypo]}>Post</Text>
          <Text style={[styles.agregarPieDe, styles.agregarTypo]}>Agregar pie de foto</Text>
          <View style={[styles.postChild, styles.postLayout]} />
          <Text style={[styles.agregarUbicacin, styles.agregarTypo]}>Agregar ubicación</Text>
          <View style={[styles.postItem, styles.postItemLayout]} />
          <View style={[styles.rectangleParent, styles.postItemLayout]}>
            <View style={[styles.groupChild, styles.postItemLayout]} />
            <Text style={[styles.publicarPost, styles.postTypo]}>Publicar post</Text>
          </View>
          <Text style={[styles.seleccionarImgenesYo, styles.agregarTypo]}>Seleccionar imágen(es) y/o video</Text>
          <View style={[styles.postInner, styles.postLayout]} />
          <Image style={styles.imageIcon} resizeMode="cover" source={require("../../assets/images/imageubi.png")} />
          <Pressable style={styles.plus} onPress={()=>{}}>
            <Image style={[styles.icon, styles.postLayout1]} resizeMode="cover" source={require("../../assets/images/PlusM.png")} />
          </Pressable>
      </View>);
};

const styles = StyleSheet.create({
    postLayout1: {
      overflow: "hidden",
      width: "100%"
    },
    groupIconPosition: {
      width: 390,
      left: 0,
      position: "absolute"
    },
    postTypo: {
      textAlign: "left",
      fontFamily: "Poppins-SemiBold",
      fontWeight: "600",
      fontSize: 18,
      position: "absolute"
    },
    agregarTypo: {
      opacity: 0.7,
      fontFamily: "Poppins-Medium",
      fontWeight: "500",
      fontSize: 14,
      left: 35,
      textAlign: "left",
      color: "#000",
      position: "absolute"
    },
    postLayout: {
      width: 321,
      backgroundColor: "#f2f2f2",
      borderRadius: 10,
      left: 35,
      position: "absolute"
    },
    postItemLayout: {
      height: 49,
      width: 321,
      position: "absolute"
    },
    blackBase21: {
      height: 41,
      top: 0,
      width: 390
    },
    post1: {
      top: 70,
      left: 175,
      width: 43,
      color: "#000",
      textAlign: "left",
      fontFamily: "Poppins-SemiBold",
      fontWeight: "600",
      fontSize: 18
    },
    icon: {
      height: "100%",
      maxWidth: "100%",
      maxHeight: "100%"
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
    agregarPieDe: {
      top: 341,
      width: 139,
      opacity: 0.7,
      fontFamily: "Poppins-Medium",
      fontWeight: "500",
      fontSize: 14
    },
    postChild: {
      top: 367,
      height: 84
    },
    agregarUbicacin: {
      top: 468,
      width: 139,
      opacity: 0.7,
      fontFamily: "Poppins-Medium",
      fontWeight: "500",
      fontSize: 14
    },
    postItem: {
      top: 494,
      backgroundColor: "#f2f2f2",
      height: 49,
      borderRadius: 10,
      left: 35
    },
    groupChild: {
      backgroundColor: "#bb4426",
      borderRadius: 10,
      height: 49,
      left: 0,
      top: 0
    },
    publicarPost: {
      top: 11,
      left: 101,
      color: "#fff",
      textAlign: "left",
      fontFamily: "Poppins-SemiBold",
      fontWeight: "600",
      fontSize: 18
    },
    rectangleParent: {
      top: 579,
      left: 35,
      height: 49
    },
    seleccionarImgenesYo: {
      top: 155,
      width: 259,
      opacity: 0.7,
      fontFamily: "Poppins-Medium",
      fontWeight: "500",
      fontSize: 14
    },
    postInner: {
      top: 181,
      borderStyle: "solid",
      borderColor: "#7e5f5b",
      borderWidth: 0.5,
      height: 133
    },
    imageIcon: {
      top: 509,
      left: 325,
      width: 20,
      height: 20,
      opacity: 0.5,
      borderRadius: 10,
      position: "absolute"
    },
    plus: {
      left: "82.56%",
      top: "33.53%",
      right: "10.77%",
      bottom: "63.39%",
      width: "6.67%",
      height: "3.08%",
      position: "absolute"
    },
    groupIcon: {
      top: 775,
      height: 75
    },
    post: {
      backgroundColor: "#fff",
      flex: 1,
      height: 844
    }
});

export default POST;*/
