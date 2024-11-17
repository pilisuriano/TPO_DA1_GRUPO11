import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable, Platform, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useRouter } from "expo-router";

const WELCOME = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.imagesContainer}>
        <Image source={require('../../assets/images/Logo 2.png')} style={styles.logo} />
        <Text style={styles.title}>¡Te damos la bienvenida!</Text>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => router.replace('/(tabs)/home')}
        >
          <Text style={styles.registerText}>Continuar</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>


  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 35,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 35 : 35
  },
  imagesContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 65
  },
  container: {
    flex: 1,
  },
  footerContainer: {
    position: 'absolute',
    alignItems: "center",
    bottom: 95,
    width: '100%',
    justifyContent: 'flex-end'
  },
  logo: {
    width: 200,
    height: 195,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  illustration: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    alignSelf: 'left',
    marginBottom: 45,
    fontFamily: 'Poppins-SemiBold',
  },
  subtitle: {
    fontSize: 16,
    color: '#000000',
    alignSelf: 'left',
    marginBottom: 50,
    opacity: 0.7,
    fontFamily: 'Poppins-Medium',
  },
  continueButton: {
    backgroundColor: '#FDE6B2',
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  registerText: {
    color: '#7E5F5B',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  loginButton: {
    backgroundColor: '#B5432A',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default WELCOME;
