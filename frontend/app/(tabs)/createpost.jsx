import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View, TextInput, Alert } from "react-native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { createUserPost, resetError } from "../../src/features/posts/postSlice";
import { useNavigation, CommonActions } from '@react-navigation/native';

const CreatePost = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.post);

  /*
    No hace falta mandarle el userId al crear el Post, 
    ya que con el token que viaja en los headers de la llamada el backend ya sabe el userId (y ya se agrega desde ahi)
  */
  // const { userId } = useSelector((state) => state.auth);

  // cambiar los datos que se quieren enviar, va a devolver error
  // "media" deberia ser un archivo, la url y el type no se mandan de front, eso lo genero el back al crear el nuevo Post
  const [postData, setPostData] = useState({
    // userId: "",
    title: "",
    location: {
      placeName: "",
      coordinates: {
        latitude: "",
        longitude: "",
      },
    },
    media: [
      {
        url: "",
        type: "image", // Default to image
      },
    ],
  });

  useEffect(() => {
    // Inicializar la estructura del post vacío
    setPostData({
      // userId,
      title: "",
      location: {
        placeName: "",
        coordinates: {
          latitude: "",
          longitude: "",
        },
      },
      media: [
        {
          url: "",
          type: "image", // Default to image
        },
      ],
    });
  }, []);

  const handleCreatePost = async () => {
    try {
      dispatch(resetError());
      const res = dispatch(createUserPost(postData));  // llamada a funcion del slice que llama a api
      if (res) {
        navigation.dispatch(CommonActions.reset({
          routes: [{ name: '(tabs)/home' }]
        }));
      }
    } catch (err) {
      console.error("Error during post creation:", err);
      Alert.alert("Error", "Could not create post. Please try again.");
    }
  };

  return (
    <View style={[styles.post, styles.postLayout1]}>
      <Text style={[styles.post1, styles.postTypo]}>Post</Text>
      <TextInput
        style={[styles.input, styles.agregarTypo]}
        placeholder="Agregar pie de foto"
        value={postData.title}
        onChangeText={(text) => setPostData({ ...postData, title: text })}
      />
      <View style={[styles.postChild, styles.postLayout]} />
      <TextInput
        style={[styles.input, styles.agregarTypo]}
        placeholder="Agregar ubicación"
        value={postData.location.placeName}
        onChangeText={(text) => setPostData({ ...postData, location: { ...postData.location, placeName: text } })}
      />
      <View style={[styles.postItem, styles.postItemLayout]} />
      <View style={[styles.rectangleParent, styles.postItemLayout]}>
        <View style={[styles.groupChild, styles.postItemLayout]} />
        <Pressable onPress={handleCreatePost}>
          <Text style={[styles.publicarPost, styles.postTypo]}>Publicar post</Text>
        </Pressable>
      </View>
      <Text style={[styles.seleccionarImgenesYo, styles.agregarTypo]}>Seleccionar imágen(es) y/o video</Text>
      <TextInput
        style={[styles.input, styles.agregarTypo]}
        placeholder="Media URL"
        value={postData.media[0].url}
        onChangeText={(text) => setPostData({ ...postData, media: [{ ...postData.media[0], url: text }] })}
      />
      <TextInput
        style={[styles.input, styles.agregarTypo]}
        placeholder="Media Type (image or video)"
        value={postData.media[0].type}
        onChangeText={(text) => setPostData({ ...postData, media: [{ ...postData.media[0], type: text }] })}
      />
      <View style={[styles.postInner, styles.postLayout]} />
      <Image style={styles.imageIcon} resizeMode="cover" source={require("../../assets/images/imageubi.png")} />
      <Pressable style={styles.plus} onPress={() => {}}>
        <Image style={[styles.icon, styles.postLayout1]} resizeMode="cover" source={require("../../assets/images/PlusM.png")} />
      </Pressable>
      {loading && <Text>Loading...</Text>}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  agregarTypo: {
    fontSize: 16,
    color: '#000',
  },
  postLayout: {
    height: 40,
    marginBottom: 12,
  },
  postItemLayout: {
    height: 40,
    marginBottom: 12,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  post: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  post1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  imageIcon: {
    width: 100,
    height: 100,
  },
  plus: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});

export default CreatePost;















































































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
