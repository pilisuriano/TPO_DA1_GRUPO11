import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, Dimensions, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const StartScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>

      <StatusBar barStyle="dark-content" />
      <View style={styles.imagesContainer}>

        {/* Imagen Central */}
        <Image source={require('../../assets/images/Marca 2.png')} style={styles.illustration} />
        {/* Logo */}
        <Image source={require('../../assets/images/Logo 2.png')} style={styles.logo} />


      </View>
      <View style={styles.container}>
        {/* Texto de Bienvenida */}
        <Text style={styles.title}>Conecta con amigos y familia</Text>
        <Text style={styles.subtitle}>
          Comparte fotos y videos con las personas que quieras, y mira sus publicaciones.
        </Text>

        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => router.replace('/signup')}
          >
            <Text style={styles.registerText}>Registrarme</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.replace('/login')}
          >
            <Text style={styles.loginText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>

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
    fontWeight: 'bold',
    alignSelf: 'left',
    marginBottom: 10,
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
  registerButton: {
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

export default StartScreen;