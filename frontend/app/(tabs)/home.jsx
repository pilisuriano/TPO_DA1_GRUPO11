import React, { useCallback, useContext, useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, View, Text, TouchableOpacity, TextInput, Pressable, s, ActivityIndicator, StatusBar, Platform, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from "react-redux";
import { getTimeline, getTimelineNewPosts, getTimelineOlderPosts } from "../../src/features/timeline/timeline.slice"
import { formatDistanceToNow, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { ToastAndroid, Linking } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import ImageModal from 'react-native-image-modal'
import InfoMessage from '@/components/InfoMessage';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { transformDate } from '../../src/utils/dateUtils';
import { ThemeContext } from '../../src/context/ThemeContext';
import { Video } from 'expo-av';
import { addFavorite, removeFavorite } from '@/src/features/favorites/favorites.slice';
import { addLike, removeLike } from '@/src/features/likes/likes.slice';

const { width, height } = Dimensions.get('window');

const Post = ({ post }) => {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  if (!post || !post.media || !post.media.length) {
    return null;
  }
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const handleLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setContainerSize({ width, height });
  };

  return (
    <View style={[styles.elInicio, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.postContainer, { backgroundColor: theme.colors.background }]}>
        <View style={styles.header}>
          <Image source={post.userId.profileImage ? { uri: post.userId.profileImage } : require("../../assets/images/Profile.png")} style={styles.profilePic} />
          <View style={styles.headerInfo}>
            <Text style={[styles.name, { color: theme.colors.text }]}>{post.userId.fullName}</Text>
            <Text style={[styles.details, { color: theme.colors.text }]}>{transformDate(post.createdAt, i18n.language)}  ·   { }</Text>
            <Text style={[styles.cancunMexico, styles.chrisUilFlexBox, { color: theme.colors.text }]}>{post.location?.placeName ? post.location.placeName : ""}</Text>
          </View>
        </View>
        {post.media.length === 1 ? (
          <View
            onLayout={handleLayout}
            style={{
              width: "100%",
              borderRadius: 10,
              borderColor: '#000000',
              borderWidth: 1,
              overflow: 'hidden',
            }}>
            {post.media[0]?.type === 'video' ? (
              <Video
                source={{ uri: post.media[0]?.url }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="contain"
                shouldPlay
                isLooping
                style={{
                  width: containerSize.width,
                  height: 185,
                }}
              />
            ) : (
              <ImageModal
                resizeMode='contain'
                imageBackgroundColor='#f0f0f0'
                source={{ uri: post.media[0]?.url }}
                style={{
                  width: containerSize.width,
                  height: 185,
                }}
              />
            )}
          </View>

        ) : (
          <Carousel
            autoPlayInterval={1200}
            width={width - 10}
            height={250}
            data={post.media}
            pagingEnabled={true}
            autoPlayReverse={false}
            snapEnabled={true}
            loop={false}
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            mode='parallax'
            modeConfig={{
              parallaxScrollingScale: 0.8,
              parallaxScrollingOffset: 90
            }}
            renderItem={renderItem}
          />
        )}

        <View style={styles.footer}>
          <Text style={[styles.comment, { color: theme.colors.text }]}>{post.title}</Text>
          <View style={styles.reactions}>
            {post.isLiked ? (
              <TouchableOpacity style={styles.iconContainer} onPress={() => dispatch(removeLike(post._id))}>
                <Icon name="heart" size={20} color="red" />
                <Text style={[styles.reactionText, { color: theme.colors.text }]}>{post.likes}</Text>
              </TouchableOpacity>) : (
              <TouchableOpacity style={styles.iconContainer} onPress={() => dispatch(addLike(post._id))}>
                <Icon name="heart-o" size={20} />
                <Text style={[styles.reactionText, { color: theme.colors.text }]}>{post.likes}</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('postpublicado', { postId: post._id })}>
              <Icon name="comment" size={20} color="gray" />
              <Text style={[styles.reactionText, { color: theme.colors.text }]}>{post.comments.length}</Text>
            </TouchableOpacity>
            {/* favorites */}
            {post.isFavorite ? (
              <TouchableOpacity style={[styles.iconContainer, styles.favoriteIconToggle]} onPress={() => dispatch(removeFavorite(post._id))}>
                <Image style={[styles.favoriteIcon]} source={require("../../assets/images/isFavorite.png")} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={[styles.iconContainer, styles.favoriteIconToggle]} onPress={() => dispatch(addFavorite(post._id))}>
                <Image style={[styles.favoriteIcon]} source={require("../../assets/images/favorite.png")} />
              </TouchableOpacity>
            )}

          </View>
          <View>
            {post.comments.length > 0 ? (
              <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('postpublicado', { postId: post._id })}>
                <Text style={[styles.cantComentarios, { color: theme.colors.text }]}>{t('hasComments')}</Text>
              </TouchableOpacity>
            ) : (
                <Text style={[styles.cantComentarios, { color: theme.colors.text }]}>{t('noCom')}</Text>
            )}

          </View>
        </View>
      </View>
    </View>
  )
};

const renderItem = ({ item }) => {

  return (

    item.type === 'video' ? (
      <Video
        source={{ uri: item.url }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        isLooping
        style={{
          width: 360,
          height: 250,
          borderRadius: 10,
          borderColor: '#000000',
          borderWidth: 1,
        }}
      />
    ) : (
      <ImageModal
        resizeMode='contain'
        imageBackgroundColor='#f0f0f0'
        style={{
          width: 360,
          height: 250,
          borderRadius: 10,
          borderColor: '#000000',
          borderWidth: 1,
        }}
        source={{ uri: item.url }}
      />
    )

  );
}

const Ad = ({ post }) => {
  const [containerSizeAd, setContainerSizeAd] = useState({ width: 0, height: 0 });
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const handleAdLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setContainerSizeAd({ width, height });
  };

  return (
    <View style={[styles.elInicio, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.postContainer, { backgroundColor: theme.colors.background }]}>
        <View style={styles.header}>

          <Image source={{ uri: post.profilePic } || require("../../assets/images/Profile.png")} style={styles.profilePic} />

          <View style={styles.headerInfo}>
            <Text style={styles.name}>{post.commerce}</Text>
            {/* <Text style={styles.details}>{post.createdAt}  ·   {post.location.placeName}</Text> */}
          </View>
        </View>


        <View
          onLayout={handleAdLayout}
          style={{
            width: "100%",
            borderRadius: 10,
            borderColor: '#000000',
            borderWidth: 1,
            overflow: 'hidden', // Asegúrate de que no haya desbordes
          }}>
          <ImageModal
            resizeMode='contain'
            imageBackgroundColor='#f0f0f0'
            source={{ uri: post.imagePath[0]?.landscape }}
            style={{
              width: containerSizeAd.width,
              height: 265,
            }}
          />
        </View>
        {/* Pie de la publicación */}
        <View style={styles.footer}>
          <Text style={[styles.comment, { color: theme.colors.text }]}> {t('visit')}
            <Text style={styles.link} onPress={() => handleLinkPress(post.Url)}> {t('web')} </Text>
          </Text>
          <View style={styles.reactions}>
          </View>
        </View>
      </View>
    </View>
  )
}

const handleLinkPress = async (url) => {
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Error", "No se puede abrir la URL: " + url);
    }
  } catch (error) {
    console.error("Error al abrir la URL:", error);
  }
};

/*const transformDate = (date) => {
  const postDate = parseISO(date);
  // Calcula la distancia de tiempo desde ahora
  const formattedDate = formatDistanceToNow(postDate, { addSuffix: true, locale: es });
  return formattedDate;
}*/

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { posts, loading, hasMore, error, showEmptyTimeline } = useSelector((state) => state.timeline);
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);


  useEffect(() => {
    dispatch(getTimeline());
  }, [dispatch]);

  // Handler para refrescar posts más recientes
  const handleRefresh = useCallback(() => {
    if (!loading && posts.length > 0) {
      const latestPost = posts[0];
      dispatch(getTimelineNewPosts({ after_timestamp: latestPost.createdAt, after_postId: latestPost._id }))
        .then((response) => {
          if (response.payload.posts.length === 0) {
            ToastAndroid.show(t('noNewPost'), ToastAndroid.SHORT);
          }
        })
    }
  }, [dispatch, loading]);


  // Handler para cargar más posts antiguos
  const loadMorePosts = () => {
    if (hasMore && !loading && posts.length > 0) {
      const oldestPost = posts[posts.length - 1];
      dispatch(getTimelineOlderPosts(oldestPost.createdAt));
    }
  };

  // Handler para la navegación a la pantalla de búsqueda
  const handleSearchPress = () => {
    navigation.navigate('search', { query: searchQuery });
  };

  // Handler para la búsqueda cuando se presiona "Enter"
  const handleSearchSubmit = () => {
    handleSearchPress();
  };

  /*const showSearchMessage = () => {
    ToastAndroid.show('Proximamente vas a poder buscar otros usuarios!', ToastAndroid.LONG);
  }*/

  return (
    <View style={[styles.unInicio, { backgroundColor: theme.colors.background }]}>
      {/* Barra de búsqueda */}
      <View style={[styles.containerInicio, { backgroundColor: theme.colors.background }]}>
        <Image style={[styles.memento]} source={require("../../assets/images/Marca 2.png")} />
        <View style={[styles.searchBar, { backgroundColor: theme.colors.background }]}>
          <TextInput
            style={[styles.searchInput, styles.bringToFront]}
            placeholder={t('search')}
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearchSubmit} // Manejar la búsqueda cuando se presiona "Enter"
          />
          <Pressable style={[styles.timelinePublicidadChild, styles.searchPressable]} onPress={handleSearchPress} >
            <Image style={[styles.searchIcon]} source={require("../../assets/images/Search.png")} />
          </Pressable>
          <Image style={[styles.icon]} source={require("../../assets/images/Group 12.png")} />
        </View>
      </View>
      {showEmptyTimeline && posts.length === 0 && <InfoMessage message={t('noPost')} />}
      {(loading && posts.length === 0) ? (<View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#B5432A" />
      </View>) : (
        <FlatList
          data={posts}
          renderItem={({ item }) =>
            item.type === "post" ? <Post post={item} /> : <Ad post={item} />
          }
          keyExtractor={(item) => item._id}
          contentContainerStyle={[styles.container, { backgroundColor: theme.colors.background }]}
          onEndReached={loadMorePosts}
          onEndReachedThreshold={0.5}
          refreshing={loading && posts.length > 0}
          onRefresh={handleRefresh}
          ListFooterComponent={hasMore ? <ActivityIndicator size="small" color="#0000ff" /> : null}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    color: "#006175",
    fontFamily: 'Roboto-Regular',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timelinePublicidadChild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 230,
    height: 34,
    borderColor: "#7e5f5b",
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#ffffff",
  },
  searchInput: {
    left: 70,
    top: 2,
  },
  postContainer: {
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    borderColor: '#000000',
    borderWidth: 1,
    opacity: 0.9,
  },
  cancunMexico: {
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
    color: "#000",
    left: 200,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  profilePic: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginLeft: 16,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    top: 15,
  },
  headerInfo: {
    flex: 1,
    borderRadius: 40,
    width: "100%"
  },
  details: {
    color: 'gray',
    top: 15,
  },
  bringToFront: {
    position: 'absolute',
    zIndex: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    borderColor: '#000000',
    borderWidth: 1,
  },

  footer: {
    marginTop: 10,
  },
  comment: {
    marginBottom: 10,
  },
  reactions: {
    flexDirection: 'row',
  },
  favoriteIconToggle: {
    marginLeft: 'auto'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  favoriteIcon: {
    width: 16,
    height: 16
  },
  reactionText: {
    marginLeft: 5,
  },

  container: {
    padding: 10,
    top: 10,
    paddingBottom: 120,
    backgroundColor: '#f0f0f0',
  },
  cantComentarios: {
    color: 'gray',
  },
  searchBar: {
    position: "static",
    width: "100%",
    top: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  containerInicio: {
    alignItems: "center",
    position: "static",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 12 : 12,

  },
  memento: {
    height: 40,
    position: "static",
    marginTop: 8,
    width: '60%',
  },
  icon: {
  },
  searchIcon: {
    width: 15,
    height: 15,
    marginRight: 10,
    left: 200,
  },
  searchPressable: {
    borderWidth: 1,
    borderStyle: "solid"
  },
  buscar: {
    fontFamily: "Roboto-Medium",
    color: "#7e5f5b",
    opacity: 0.5,
    textAlign: "right",
    textAlignVertical: "center",
    fontSize: 12,
    paddingLeft: 10
  },

});

export default Home;