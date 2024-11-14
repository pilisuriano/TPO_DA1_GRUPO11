import React, { useEffect, useState } from 'react';
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
import { resetError, verifyUserEmail } from "../../src/features/verifyEmail/verifyEmail.slice"

export default function verifyEmail() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const isButtonEnabled = email.trim() !== '';
  const [emailResponse, setEmailResponse] = useState("");

  const { emailSent, data, loading, error } = useSelector((state) => state.verifyEmail);
  const [isFocused, setIsFocused] = useState(false);

  const handleVerifyEmail = async () => {
    try {
      if (isButtonEnabled) {
        dispatch(resetError())
        var response = dispatch(verifyUserEmail({email: email, flow: "signup"}));
        console.log("OTP ", JSON.stringify(response))
        setEmailResponse(response.email)
      }

    } catch (err) {
      console.error("Error during signup:", err);
      Alert.alert("Error", "Could not log in. Please try again.");
    }
  };

  useEffect(() => {
    if (emailSent && data?.email) {
      console.log("DATAAA", JSON.stringify(data.email))
      router.push({pathname: "/signup/otp", params: { email: data.email }});
    }
  }, [emailSent, data]);

  return (
    <>
      {/* <StatusBar backgroundColor={'transparent'} translucent/> */}
      <SafeAreaView style={styles.safeArea}>

        <Pressable style={styles.toolbar} onPress={() => router.back()}>
          <Image style={styles.icon} resizeMode="cover" source={require('../../assets/images/Arrow---Left-2.png')} />
        </Pressable>
        {/* <View style={[styles.signUp, styles.iconLayout]}> */}

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Ingrese su correo electrónico</Text>
          <Text style={styles.subtitle}>Para comenzar la creación de tu cuenta necesitamos tu correo</Text>

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

            <TouchableOpacity onPress={() => router.push('login')}>
              <Text style={styles.loginText}>
                ¿Ya tienes una cuenta? <Text style={styles.loginLink}>Inicia Sesión</Text>
              </Text>
            </TouchableOpacity>

          </View>

        </ScrollView>

      </SafeAreaView >
    </>

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