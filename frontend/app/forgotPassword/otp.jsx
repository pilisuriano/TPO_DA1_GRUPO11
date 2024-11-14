import React, { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, View, Text, Pressable, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Platform, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { router, useLocalSearchParams, useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { verifyUserOtp } from "@/src/features/verifyOtp/verifyOtp.slice";
import { saveItem } from '@/src/services/secureStore';

const VERIFICATION = () => {
  const router = useRouter()
  const params = useLocalSearchParams();
  const { email } = params;
  const length = 4;
  const [otp, setOtp] = useState(Array(length).fill(''));;
  const inputs = useRef([]);
  const dispatch = useDispatch();
  const { verifiedRegistered, loadingRegistered, errorRegistered } = useSelector((state) => state.verifyOtp);

  const handleTextChange = (text, index) => {
    const newOtp = [...otp];
    if (/^\d$/.test(text)) {  // Solo permitir números
      newOtp[index] = text;
      setOtp(newOtp);

      if (text && index < length - 1) {
        inputs.current[index + 1].focus();
      }
    } else if (text === '') {
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handleKeyPress = ({ nativeEvent: { key } }, index) => {
    if (key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1].focus(); // Mover al campo anterior si se presiona "Backspace" y está vacío
    }
  };


  const handleVerifyOTP = () => {
    const otpJoin = otp.join(''); // Une el OTP en un solo string
    if (email && otpJoin) {
      const data = { email: email, otp: otpJoin };
      dispatch(verifyUserOtp(data));
    } else {
      console.error("Email or OTP is missing");
    }
  }

  useEffect(() => {
    if (verifiedRegistered) {
      saveItem("userEmail", email)
      router.replace("/forgotPassword/resetPassword");
    }
  }, [verifiedRegistered]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      {loadingRegistered ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#B5432A" />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>OTP enviado</Text>
          <Text style={styles.subtitle}>Ingresa el código OTP que te enviamos</Text>

          <View style={styles.otpContainer}>
            {otp.map((_, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                value={otp[index]}
                onChangeText={(text) => handleTextChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                ref={(input) => (inputs.current[index] = input)}
              />
            ))}
          </View>

          <TouchableOpacity style={styles.resendContainer}>
            <Text style={styles.resendText}>¿No lo recibiste? </Text>
            <Text style={styles.resendLink}>Reenviar en 01:00</Text>
          </TouchableOpacity>

          <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.submitButton} onPress={handleVerifyOTP}>
              <Text style={styles.submitButtonText}>Siguiente</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.registerContainer}>
              <Text style={styles.registerText}>¿Ya tienes una cuenta? </Text>
              <Text style={styles.registerLink}>Inicia Sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  safeArea: {
    flex: 1,
    paddingHorizontal: 35,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 100 : 100
  },
  container: {
    flex: 1,
  },
  input: {
    width: 50,
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
    fontSize: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 8,
    color: '#000000',
    fontFamily: 'Poppins-SemiBold',
  },
  subtitle: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'left',
    marginBottom: 20,
    opacity: 0.7,
    fontFamily: 'Poppins-Medium',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otpInput: {
    width: 70,
    height: 60,
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: '#E5E5E5',
    backgroundColor: '#FDE6B2',
    textAlign: 'center',
    fontSize: 16,
    color: '#7E5F5B',
    marginBottom: 32,
    fontFamily: 'Poppins-SemiBold',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'left',
    marginBottom: 40,
  },
  resendText: {
    color: '#7D7D7D',
    fontSize: 14,
  },
  resendLink: {
    color: '#FF0000',
    fontSize: 14,
  },
  footerContainer: {
    position: 'absolute',
    alignItems: "center",
    bottom: 95,
    width: '100%',
    justifyContent: 'flex-end'
  },
  submitButton: {
    backgroundColor: '#B5432A',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#00000',
    textAlign: 'center',
  },
  registerLink: {
    color: "#006175",
    fontFamily: 'Poppins-Medium',
  },
});

export default VERIFICATION;
