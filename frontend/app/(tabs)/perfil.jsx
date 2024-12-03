import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, Text, Pressable, Platform, StatusBar, FlatList, ActivityIndicator, Alert, Button } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import Toolbar from "@/components/Toolbar";
import Icon from 'react-native-vector-icons/MaterialIcons';
import InfoMessage from "@/components/InfoMessage";
import { fetchUserProfile } from './../../src/features/users/userSlice';
import { useTranslation } from 'react-i18next';


const MYPROFILE = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { user, posts, loading, error } = useSelector((state) => state.user);
  const { t } = useTranslation();

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

  // Disparar la acción para obtener el perfil cuando la página se enfoca
  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchUserProfile()); // Obtener el perfil y posts del usuario
    }, [dispatch]) // Solo se vuelve a ejecutar cuando se enfoca la página
  );

  useEffect(() => {
    console.log('User:', user);
    console.log('Posts:', posts);
  }, [user, posts]);

  useEffect(() => {
    if (error) {
      Alert.alert('Error', `Could not fetch user profile. Please try again. ${error}`);
    }
  }, [error]); // Este efecto se activará solo si el estado de error cambia

  

  //if (loading) return <Text>Cargando publicaciones...</Text>;

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
  <View style={styles.usuarioEncontrado}>
          {user ? (
            <>
      			<Image style={styles.unsplash4Qfycgpc4cIcon} resizeMode="cover" source={{ uri: user.coverImage }} />
      			<Text style={[styles.perfil, styles.perfilTypo]}>{t('profile')}</Text>
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
                  <Text style={styles.errorText}>{t('userNotFound')}</Text>
                )}
                {error && <Text style={styles.errorText}>{error}</Text>}
              </View>
      {user && (
					<>
              <Image style={styles.unsplashp5bobf0xjuaIcon} resizeMode="cover" source={{ uri: user.profileImage }} />
              <Text style={[styles.martinPerez, styles.perfilTypo]}>{user.fullName}</Text>
              <Text style={styles.posts}>{t('posts')}</Text>
              <Text style={[styles.imAPostive, styles.seguirTypo]}>{user.description}</Text>
              <Text style={[styles.nivel4, styles.text2Typo]}>{t('level')} {user.gamificationLevel}</Text>
              <Pressable style={styles.iconlylightOutlinesetting} onPress={() => navigation.navigate('settings')}>
                <Image style={[styles.icon, styles.iconLayout2]} resizeMode="cover" source={require("../../assets/images/Setting.png")} />
              </Pressable>
              <Pressable style={styles.myProfileItem} onPress={() => navigation.navigate('editprofile', { userId: user._id, posts: user.posts})}>
                <Text style={[styles.editarPerfil, styles.nivel4Typo]}>{t('editProfile')}</Text>
              </Pressable>
              <Image style={styles.lineIcon} resizeMode="cover" source={require("../../assets/images/Line 10.png")} />
              <Text style={[styles.text, styles.textTypo]}>{user.posts.length}</Text>
              <Text style={[styles.text1, styles.textTypo]}>{user.following}</Text>
              <Text style={[styles.k, styles.textTypo]}>{user.followers}</Text>
              <View style={[styles.lineView, styles.lineViewLayout]} />
              <Text style={[styles.posts1, styles.posts1Typo]}>{t('posts')}</Text>
              <Pressable style={[styles.siguiendo, styles.postsPosition]} onPress={() => navigation.navigate('seguidos')}>
                <Text style={styles.posts1Typo}>{t('following')}</Text>
              </Pressable>
              <Pressable style={[styles.seguidores, styles.postsPosition]} onPress={() => navigation.navigate('seguidores')}>
                <Text style={styles.posts1Typo}>{t('followers')}</Text>
              </Pressable>
              <Pressable style={[styles.editarPostsParent, styles.image13IconLayout]} onPress={() => navigation.navigate('editarpost')}>
                <Text style={[styles.editarPosts, styles.editarPostsTypo]}>{t('editPosts')}</Text>
                <Image style={[styles.image13Icon, styles.image13IconLayout]} resizeMode="cover" source={require("../../assets/images/image 13.png")} />
              </Pressable>
              <View style={[styles.iconlyboldchat, styles.chatLayout]}>
                  <View style={[styles.chat, styles.chatLayout]}>
                  <View style={[styles.chat, styles.chatLayout]}>
                    <Text style={[styles.text2, styles.text2Typo]}>{user.comments}</Text>
                    <Image style={[styles.vectorIcon, styles.iconLayout2]} resizeMode="cover" source={require("../../assets/images/Chat.png")} />
                  </View>
                </View>
              </View>
				  	</>
				)}
        </>
        ) : (
          <Text style={styles.errorText}>{t('noUser')}</Text>
        )}
    </View>
  );
};

/*{loading ? (
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
      {error && <Text style={styles.errorText}>{error}</Text>}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Color de fondo suave
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
perfilTypo: {
    textAlign: "left",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    fontSize: 18,
    color: "#000",
    position: "absolute"
},
container: {
  flex: 1,
  padding: 20,
  top: 415,
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
seguirTypo: {
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    fontSize: 12,
    textAlign: "left",
    position: "absolute"
},
groupChildLayout: {
    height: 31,
    width: 90,
    position: "absolute"
},
textTypo: {
    top: 329,
    fontSize: 14,
    textAlign: "left",
    color: "#000",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    position: "absolute"
},
posts1Typo: {
    fontFamily: "Poppins-Regular",
    top: 350,
    fontSize: 14,
    textAlign: "left",
    color: "#000",
    position: "absolute"
},
myProfileItem: {
  top: 300,
  left: 53,
  backgroundColor: "#bb4426",
  width: 300,
  height: 28,
  borderRadius: 10,
  position: "absolute"
  },
lineViewLayout: {
    height: 44,
    width: 1,
    borderRightWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    top: 328,
    position: "absolute"
},
groupViewLayout: {
    height: 317,
    width: 318,
    position: "absolute"
},
iconLayout1: {
    height: 99,
    width: 99,
    position: "absolute"
},
iconLayout: {
    top: 109,
    height: 99,
    width: 99,
    borderRadius: 10,
    position: "absolute"
},
iconLayout2: {
  maxHeight: "100%",
  maxWidth: "100%",
  overflow: "hidden",
  top: 50,
  left: -10,
},
unsplash4Qfycgpc4cIcon: {
    top: 118,
    left: 27,
    width: 336,
    height: 106,
    borderRadius: 10,
    position: "absolute"
},
blackBase21: {
    height: 41,
    top: 0
},
image13IconLayout: {
  height: 20,
  position: "absolute"
  },
image13Icon: {
    left: 75,
    width: 16,
    top: 0
    },
chatLayout: {
  height: 17,
  width: 24,
  position: "absolute"
  },
  text2: {
    left: 10,
    fontSize: 11,
    textAlign: "center",
    width: 11,
    top: 48,
    },
    vectorIcon: {
    height: "79.41%",
    width: "56.25%",
    top: "5.88%",
    right: "43.75%",
    bottom: "14.71%",
    left: "0%",
    position: "absolute"
    },
    chat: {
    left: 0,
    top: -13,
    },
    iconlyboldchat: {
    top: 233,
    left: 185
    },
    groupIcon: {
      top: 775,
      height: 75
      },
      lineIcon: {
        top: 394,
        width: 318,
        height: 1,
        left: 40,
        position: "absolute"
        },
editarPerfil: {
    left: 115,
    top: 3,
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    fontSize: 12,
    position: "center"
    },
editarPostsParent: {
      left: 253,
      width: 91,
      top: 402
      },
      unsplashig7vn6okgne: {
        left: 40
        },
        unsplashclv9dfjlwacIcon: {
        left: 40
        },
        unsplashqpkpatk0fakIcon: {
        left: 259,
        borderRadius: 10
        },
        unsplashzbwstHz0IIcon: {
        left: 259
        },
        unsplashq2b08qyxkc4Icon: {
        left: 149,
        borderRadius: 10
        },
        unsplashl4v4t5adtneIcon: {
        left: 149
        },
        rectangleIcon: {
          left: 149
          },
          posts1: {
          top: 402,
          left: 40
          },
          icon2: {
          borderRadius: 10
          },
          myProfileInner: {
            left: 126
            },
            lineView: {
            left: 244
            },
            unsplashmv38tbLjj8Icon: {
            left: 40
            },
            unsplashqbf59tu077qIcon: {
            left: 259
            },
            text: {
              left: 73,
              top: 343,
              fontSize: 14
              },
              text1: {
              left: 172,
              top: 343,
              fontSize: 14
              },
              k: {
              left: 292,
              top: 343,
              fontSize: 14
              },
iconlylightOutlinesetting: {
  left: "87.95%",
  top: "26.07%",
  right: "6.72%",
  bottom: "71.47%",
  width: "5.33%",
  height: "2.46%",
  position: "absolute"
  },
                soyUnaPersona: {
                  top: 255,
                  left: 59,
                  width: 317
                  },
editarPostsTypo: {
  fontFamily: "Poppins-Medium",
  fontWeight: "500",
  fontSize: 12,
  textAlign: "left",
  color: "#000",
  position: "absolute"
  },
perfil: {
    top: 74,
    left: 174,
    width: 59
},
text2Typo: {
  color: "#f17b47",
  fontFamily: "Poppins-Medium",
  fontWeight: "500",
  position: "absolute"
  },
usuarioEncontradoChild: {
    height: "2.25%",
    width: "2.67%",
    top: "8.87%",
    right: "89.6%",
    bottom: "88.88%",
    left: "7.73%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden"
},
unsplashp5bobf0xjuaIcon: {
    top: 190,
    width: 67,
    height: 67,
    left: 33,
    position: "absolute",
    borderRadius: 35,
},
martinPerez: {
  top: 230,
  left: 111,
  width: 127
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
posts: {
    top: 401,
    fontSize: 14,
    left: 35,
    textAlign: "left",
    color: "#000",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    position: "absolute"
},
imAPostive: {
    top: 273,
    left: 57,
    width: 294,
    color: "#000",
    fontWeight: "500",
    fontSize: 12
},
groupChild: {
    borderRadius: 20,
    backgroundColor: "#bb4426",
    left: 0,
    top: 0
},
seguir: {
    top: 6,
    left: 26,
    color: "#fff"
},
rectangleParent: {
    top: 233,
    left: 270
},
text: {
    left: 70
},
text1: {
    left: 169
},
k: {
    left: 289
},
posts1: {
    left: 60
},
siguiendo: {
    left: 147
},
seguidores: {
    left: 261
},
usuarioEncontradoItem: {
    left: 123
},
usuarioEncontradoInner: {
    top: 384,
    height: 1,
    width: 318,
    left: 33,
    position: "absolute"
},
lineView: {
    left: 241
},
unsplashxejossdcnr8Icon: {
    top: 218,
    width: 99,
    borderRadius: 10,
    left: 0
},
unsplashhaznhev2wxqIcon: {
    left: 219,
    top: 218,
    width: 99,
    borderRadius: 10
},
unsplash8nwfh8I9ugIcon: {
    left: 109,
    top: 218,
    width: 99,
    borderRadius: 10
},
icon: {
    height: "100%",
    borderRadius: 10,
    width: "100%"
},
unsplashuc0hzduitwy: {
    left: 0,
    top: 0
},
unsplashcssvezachvqIcon: {
    left: 0
},
unsplash0boea7nbluuIcon: {
    left: 219,
    top: 0,
    borderRadius: 10
},
unsplashtld6icolyb0Icon: {
    left: 219
},
unsplashkcaC3f3feIcon: {
    left: 109,
    top: 0,
    borderRadius: 10
},
unsplashiicyiapyggiIcon: {
    left: 109
},
unsplashxejossdcnr8Parent: {
    left: 0,
    top: 0
},
groupView: {
    top: 429,
    left: 35,
    height: 317
},
groupIcon: {
    top: 775,
    height: 75
},
nivel4: {
  top: 255,
  left: 124,
  width: 48,
  fontSize: 12,
  textAlign: "left"
  },
usuarioEncontrado: {
    backgroundColor: "#fff",
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%"
}
});

export default MYPROFILE;
