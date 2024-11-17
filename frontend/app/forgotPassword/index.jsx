import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, Pressable, StatusBar, Platform, SafeAreaView, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { resetState, verifyUserEmail } from "@/src/features/verifyEmail/verifyEmail.slice";
import { resetError } from '@/src/features/signup/signup.slice';

// igual al de signup/index
const ForgotPassword = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isButtonEnabled = email.trim() !== ''  && isValidEmail(email) ;

  const { emailSent, data, loading, error } = useSelector((state) => state.verifyEmail);
  const [isFocused, setIsFocused] = useState(false);

  // Resetea el estado al entrar a la pantalla
  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  const handleVerifyEmail = async () => {
    try {
      if (isButtonEnabled) {
        dispatch(resetError())
        var response = dispatch(verifyUserEmail({ email: email, flow: "reset_password" }));
        console.log("OTP ", JSON.stringify(response))
      }

    } catch (err) {
      console.error("Error during signup:", err);
      Alert.alert("Error", "Could not log in. Please try again.");
    }
  };

  useEffect(() => {
    if (emailSent && data?.email) {
      router.push({ pathname: "/forgotPassword/otp", params: { email: data.email } });
      resetError()
    }
  }, [emailSent, data]);


  return (
    <SafeAreaView style={styles.safeArea}>

      <StatusBar barStyle="dark-content" />
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#B5432A" />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Olvido de contraseña</Text>
          <Text style={styles.subtitle}>Te ayudaremos a recuperar tu cuenta</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Correo electrónico</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              style={[styles.input, isFocused && styles.inputFocused]}
              placeholderTextColor="#C7C7CD"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </View>

          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={[styles.signupButton, { opacity: isButtonEnabled ? 1 : 0.6 }]}
              disabled={!isButtonEnabled}
              onPress={handleVerifyEmail}>
              <Text style={styles.signupButtonText}>Listo</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.replace('/login')}>
              <Text style={styles.loginText}>
                ¿Ya tienes una cuenta? <Text style={styles.loginLink}>Inicia Sesión</Text>
              </Text>
            </TouchableOpacity>

          </View>

        </ScrollView>
      )}

    </SafeAreaView >

  );
};

const styles = StyleSheet.create({
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  inputFocused: {
    borderWidth: 0.5,
    borderColor: '#7E5F5B'
  },
  footerContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 120,
    width: '100%',
    justifyContent: 'flex-end'
  },
  signupButton: {
    backgroundColor: '#B5432A',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  signupButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  loginText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#7D7D7D',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30
  },
  loginLink: {
    color: "#006175",
    fontFamily: 'Poppins-SemiBold',
  },
});

export default ForgotPassword;
