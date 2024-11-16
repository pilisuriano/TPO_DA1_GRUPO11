import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Toolbar({ title = '', showBackButton = true }) {
  const router = useRouter();

  return (
    <View style={styles.toolbar}>
      {showBackButton && (
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Image resizeMode="cover" source={require('../assets/images/Arrow---Left-2.png')} />
        </Pressable>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },
});