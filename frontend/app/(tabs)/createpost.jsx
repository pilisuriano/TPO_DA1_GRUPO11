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

  const [image, setImage] = useState(null);
  /*

    {
      "title":"Salmón al ajillo",
      "images": ["data:image/jpeg;base64,/9j/4QD4RXhpZgAATU0AKgAAAAg......]
    }
  */
  const { posts, loading, error } = useSelector((state) => state.post);

  // const [postData, setPostData] = useState({});


  const handleCreatePost = () => {
    // formData.append('title', title);


    try {
      dispatch(resetError());
      dispatch(createUserPost({ title: title, images: [`data:image/jpeg;base64,${image}`] }));  // llamada a funcion del slice que llama a api
    } catch (err) {
      console.error("Error during post creation:", err);
      Alert.alert("Error", "Could not create post. Please try again.");
    }
  };

  const pickMedia = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
      base64: true,
    });

    if (!result.canceled) {
      // setImage(result.assets[0].uri); // Muestra la imagen seleccionada
      console.log(result.assets[0].base64)
      setImage(result.assets[0].base64); // Llama a la función de subida con la imagen en base64
    }


    // if (!result.canceled) {
    //   const base64Image = `data:image/jpeg;base64,${result.base64}`;
    //   console.log("asdsa", base64Image)
    //   setMedia(base64Image)
    //   return base64Image;
    // }
    // if (!result.canceled && result.assets && result.assets.length > 0) {
    //   const resizedImage = await ImageResizer.createResizedImage(result.assets[0].uri, 800, 600, 'JPEG', 80);
    //   const base64Image = await fetch(resizedImage.uri).then(res => res.blob()).then(blob => {
    //     return new Promise((resolve, reject) => {
    //       const reader = new FileReader();
    //       reader.onloadend = () => resolve(reader.result.split(',')[1]);
    //       reader.onerror = reject;
    //       reader.readAsDataURL(blob);
    //     });
    //   });
    //   setImage(base64Image);
    //   // console.log("Image set to:", base64Image);
    // } else {
    //   console.error("Image picking was canceled or no assets found");
    // }
  };
  const removeMedia = () => {

    setMedia([]);
    setFormData(new FormData());  // Vaciar el estado de media
  };


  useEffect(() => {
    // if (posts) {
    //   console.log(posts)

    // }
    if (posts) {
      console.log(posts);
    }
    // Inicializar la estructura del post vacío, si es necesario
    // setFormData(new FormData());  // Reiniciar FormData cuando el componente se monta
  }, [posts]);

  return (

    <View style={[styles.post]}>

      <Text style={[styles.postText]}>Post</Text>
      <Text style={[styles.agregarTypo]}>Seleccionar imágen(es) y/o video</Text>
      <View style={[styles.backgraund]}>
        <Pressable onPress={pickMedia}>
          <Image style={[styles.icon]} resizeMode="stretch" source={require("../../assets/images/PlusM.png")} />
        </Pressable>


        {/* {media.length > 0 && media[0].uri ? (
          <View style={styles.thumbnailContainer}>
            <Image source={{ uri: media[0].uri }} style={styles.thumbnail} />
            <Pressable style={styles.removeButton} onPress={removeMedia}>
              <Text style={styles.removeButtonText}>Eliminar</Text>
            </Pressable>
          </View>

        ) : null} */}
        </View>
      <View style={[styles.pie]}>
        <TextInput

          value={title}
          onChangeText={setTitle}
          placeholder="Agregar pie de foto"
        /></View>
      <View style={[styles.postChild]} />
      {/* <TextInput
          style={[styles.input, styles.agregarTypo]}
          placeholder="Agregar ubicación"
          value={formData.location.placeName}
          onChangeText={(text) => setPostData({ ...postData, location: { ...postData.location, placeName: text } })}
        /> */}

      <View style={[styles.rectangleParent, styles.postItemLayout]}>
        <View style={[styles.groupChild]} >
          <Pressable onPress={handleCreatePost}>
            <Text style={[styles.publicarPost]}>Publicar post</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.postInner]} />
      <Image style={styles.imageIcon} resizeMode="cover" source={require("../../assets/images/imageubi.png")} />
      {loading && <Text>Loading...</Text>}
      {/* {error && <Text style={styles.errorText}>{error}</Text>} */}
    </View>
  );
};

const styles = StyleSheet.create({

  post: {
    flex: 1,
    textAlign: 'center',
    position: "static",
    alignContent: "flex-start",
    backgroundColor: '#fff',
  },
  agregarTypo: {
    color: "#000",
    borderRadius: 8,
    top: 70,
    textAlign: 'center',
    position: "static"
  },
  postText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    top: 70,
    left: 175,
    color: "#000",
    fontFamily: "Poppins-SemiBold",
    textAlign: "left",
    fontWeight: "600",
    position: "static"
  },
  backgraund: {
    width: '90%',
    height: '15%',
    alignContent: "flex-start",
    justifyContent: "space-beetwen",
    position: "static",
    backgroundColor: '#F2F2F2',
    top: 80,
    left: 20,
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  icon: {
    width: 90,
    height: 90,
    position: "static",
    top: 10,
    paddingHorizontal: 12,
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
    position: "static"
  },
  pie: {
    width: '90%',
    height: 49,
    borderRadius: 10,
    left: 20,
    top: 90,
    textAlign: 'center',
    position: "static",
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: '#000',
    backgroundColor: '#f2f2f2',
  },
  thumbnailContainer: {
    width: 90,
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    top: 15,
    paddingHorizontal: 12,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  removeButton: {
    backgroundColor: '#FF0000',
    borderRadius: 8,
    width: 100,
    height: 30,
    paddingHorizontal: 12,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  postItemLayout: {
    marginBottom: 12,
    position: "static"
  },
  imageIcon: {
    top: 50,
    left: 325,
    width: 20,
    height: 20,
    opacity: 0.5,
    borderRadius: 10,
    position: "static"
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
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    fontSize: 18,
    position: "static",
    top: 7,
    alignSelf: "center",
  },
  groupChild: {
    backgroundColor: "#bb4426",
    borderRadius: 10,
    height: 49,
    top: '200%',
    left: 20,
    alignContent: "center",
    width: '90%',
  },

  agregarUbicacin: {
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
    opacity: 0.7,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    fontSize: 14
  },

});

export default CreatePost;
