import React, { createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPost, deletePost } from "./postSlice";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.post);

  const createNewPost = async (postData) => {
    try {
      return dispatch(createPost(postData));
    } catch (error) {
      console.error("Create post failed", error);
    }
  };

  const fetchPost = async (postId) => {
    try {
      return dispatch(getPost(postId));
    } catch (error) {
      console.error("Get post failed", error);
    }
  };

  const removePost = async (postId) => {
    try {
      return dispatch(deletePost(postId));
    } catch (error) {
      console.error("Delete post failed", error);
    }
  };

  return (
    <PostContext.Provider value={{ posts, loading, error, createNewPost, fetchPost, removePost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);