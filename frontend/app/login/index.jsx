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
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';

export default function LoginScreen() {
  const navigation = useNavigation();

  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValidPassword = (password) => {
    return password.length > 6;
  };
  const isButtonEnabled = email.trim() !== '' && password.trim() !== '' && isValidPassword(password);
  const { authenticated, loading, error, showInUI } = useSelector((state) => state.auth);

  const handleLogin = async () => {
    if (isButtonEnabled) {
      dispatch(loginUser({ email, password }));
    }
  };

  useEffect(() => {
    if (authenticated) {
      router.replace("/(tabs)/home")
      resetError()
    }
  }, [authenticated]);

  return (
    <SafeAreaView style={styles.safeArea}>

      <StatusBar barStyle="dark-content" />
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#B5432A" />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Inicia sesión</Text>
          <Text style={styles.subtitle}>Ingresa tus credenciales</Text>


          <View style={styles.inputContainer}>
            <Text style={styles.label}>Correo electrónico</Text>
            <TextInput
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (showInUI) dispatch(resetError()); // Limpiar el error al escribir
              }}
              keyboardType="email-address"
              autoCapitalize="none"
              style={[styles.input, showInUI && styles.inputError]}
              placeholderTextColor="#C7C7CD"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={[styles.input, showInUI && styles.inputError]}
              placeholderTextColor="#C7C7CD"
              value={password}
              autoCapitalize="none"
              onChangeText={(text) => {
                setPassword(text);
                if (showInUI) dispatch(resetError()); // Limpiar el error al escribir
              }}
              secureTextEntry
            />
          </View>

          {showInUI && (
            <Text style={styles.errorText}>{error}</Text>
          )}

          <TouchableOpacity onPress={() => router.push('/forgotPassword')}>
            <Text style={styles.forgotPassword}>¿Olvidó su contraseña?</Text>
          </TouchableOpacity>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={[styles.loginButton, { opacity: isButtonEnabled ? 1 : 0.6 }]}
              disabled={!isButtonEnabled}
              onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Listo</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.replace('signup')}>
              <Text style={styles.registerText}>
                ¿No tienes una cuenta? <Text style={styles.registerLink}>Regístrate</Text>
              </Text>
            </TouchableOpacity>

          </View>

        </ScrollView>
      )}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF', // color de fondo para evitar que se vea vacío
    justifyContent: 'space-between',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 100 : 100,
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
  inputError: {
    borderColor: '#BB4426',
    borderWidth: 1,
  },
  errorText: {
    color: '#BB4426',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
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