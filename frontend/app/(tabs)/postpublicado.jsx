import React, { useCallback, useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, Pressable, ActivityIndicator, Platform, StatusBar, TextInput, TouchableOpacity, FlatList, ToastAndroid } from "react-native";
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Toolbar from "@/components/Toolbar";
import { useDispatch, useSelector } from "react-redux";
import { addUserComment, getUserPost } from "@/src/features/posts/postSlice";
import { ThemeContext } from '@/src/context/ThemeContext';
import InfoMessage from '@/components/InfoMessage';
import { transformDate } from '@/src/utils/dateUtils';


const POSTPUBLICADO = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const route = useRoute();
  const { postId } = route.params;
  const { theme } = useContext(ThemeContext);
  const [comment, setComment] = useState('');

  const { selectedPost, selectedPostLoading, selectedPostError } = useSelector(
    (state) => state.post
  );
  const isDisabled = selectedPostLoading || comment.trim() === '';

  useEffect(() => {
    dispatch(getUserPost(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    console.log("mari: ", selectedPost)
  }, [selectedPost]);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getUserPost(postId));
    }, [dispatch])
  );

  if (selectedPostLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#bb4426" />
      </View>
    );
  }

  const handleSendComment = () => {
    if (!isDisabled) {
      dispatch(addUserComment({ postId, comment }))
        .unwrap()
        .then(() => {
          setComment(''); 
        })
        .catch((error) => {
          ToastAndroid.show(t('error'), ToastAndroid.SHORT);
        });
    }
  };

  const renderComment = ({ item }) => (
    <View style={styles.commentContainer}>
      <Image source={{ uri: item.userId.profileImg }} style={styles.avatar} />
      <View style={styles.commentContent}>
        <View style={styles.commentHeader}>
          <Text style={styles.name}>{item.userId.fullName}</Text>
          <Text style={styles.timestamp}>{transformDate(item.createdAt, i18n.language)}</Text>
        </View>
        <Text style={styles.commentText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.postPublicado}>
      <Toolbar title={t('comments')} />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder={t('writeComment')}
          value={comment}
          onChangeText={setComment}
          style={styles.input}
        />
        <TouchableOpacity style={[styles.sendButton, isDisabled && styles.disabledButton]} onPress={handleSendComment} disabled={isDisabled}>
          <Text style={styles.sendButtonText}>➤</Text>
        </TouchableOpacity>
      </View>
      {selectedPost && selectedPost.comments.length > 0 ? (
        <FlatList
          data={selectedPost.comments}
          keyExtractor={(item) => item._id}
          renderItem={renderComment}
          style={styles.flatList}
        />

      ) : (
        <InfoMessage message={t('noCom')} />
      )}

    </View>
  );
};

const styles = StyleSheet.create({

  postPublicado: {
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 8,
  },
  sendButton: {
    backgroundColor: '#8B0000',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginLeft: 8,
  },
  disabledButton: {
    opacity: 0.6
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  flatList: {
    flex: 1,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    backgroundColor: 'gray'
  },
  commentContent: {
    flex: 1,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
  },
  commentText: {
    fontSize: 14,
    color: '#555',
  },
});

export default POSTPUBLICADO;
