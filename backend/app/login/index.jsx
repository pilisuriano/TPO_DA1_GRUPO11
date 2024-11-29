import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { loginUser, resetError } from '../../src/features/auth/auth.slice';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  StatusBar,
  SafeAreaView,
  Pressable,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';

export default function LoginScreen() {
  const navigation = useNavigation();

  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isButtonEnabled = email.trim() !== '' && password.trim() !== '';
  const { authenticated, loading, error } = useSelector((state) => state.auth);

  const handleLogin = async () => {
    try {
      if (isButtonEnabled) {
        dispatch(resetError())
        dispatch(loginUser({ email, password }));
        // if (authenticated) {
        //   navigation.dispatch(CommonActions.reset({
        //     routes: [{ name: '(tabs)/home' }]
        //   }))
        // }
      }

    } catch (err) {
      console.error("Error during login:", err);
      Alert.alert("Error", "Could not log in. Please try again.");
    }
  };

  useEffect(() => {
    if (authenticated) {
      router.replace("/(tabs)/home")
    }
  }, [authenticated]);

  return (
    <>
    <StatusBar backgroundColor={'transparent'} translucent/>
    <SafeAreaView style={styles.safeArea}>
      <Pressable style={styles.toolbar} onPress={() => router.back()}>
        <Image resizeMode="cover" source={require('../../assets/images/Arrow---Left-2.png')} />
      </Pressable>
      {/* Agregar al scrollview padding/espaciado dependiendo el statusBar (video) */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Inicia sesión</Text>
        <Text style={styles.subtitle}>Ingresa tus credenciales</Text>


        <View style={styles.inputContainer}>
          <Text style={styles.label}>Correo electrónico</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            placeholderTextColor="#C7C7CD"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#C7C7CD"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* CAMBIAR RUTA */}
        <TouchableOpacity onPress={() => router.push('ForgotPassword')}>
          <Text style={styles.forgotPassword}>¿Olvidó su contraseña?</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={[styles.loginButton, { opacity: isButtonEnabled ? 1 : 0.6 }]}
            disabled={!isButtonEnabled}
            onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Listo</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('signup')}>
            <Text style={styles.registerText}>
              ¿No tienes una cuenta? <Text style={styles.registerLink}>Regístrate</Text>
            </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF', // color de fondo para evitar que se vea vacío
    justifyContent: 'space-between',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 35 : 35,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 30,
  },
  toolbar: {
    marginHorizontal: 25,
    paddingBottom: 40
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#000',
    fontWeight: '600',
    marginBottom: 10,
  },
  subtitle: {
    marginBottom: 30,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: "#000",
    opacity: 0.7,
    fontWeight: '500',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: "#000",
    opacity: 0.7,
    fontWeight: '500',
    marginBottom: 5,
  },
  input: {
    opacity: 0.5,
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    color: '#000',
  },
  forgotPassword: {
    fontSize: 14,
    fopacity: 0.7,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    textAlign: "left",
    color: "#000",
    textAlign: 'right',
    marginVertical: 10,
  },
  footerContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 120,
    width: '100%',
    justifyContent: 'flex-end'
  },
  loginButton: {
    backgroundColor: '#B5432A',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  registerText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#7D7D7D',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30
  },
  registerLink: {
    color: "#006175",
    fontFamily: 'Poppins-SemiBold',
  },
});