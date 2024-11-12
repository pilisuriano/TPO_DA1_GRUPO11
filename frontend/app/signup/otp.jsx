import React, { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, View, Text, Pressable, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams, useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { verifyUserOtp } from "@/src/features/verifyOtp/verifyOtp.slice";

const verifyOTP = () => {
  const router = useRouter()
  const params = useLocalSearchParams();
  const { email } = params;
  console.log("Params: ", params); // Esto muestra todos los parámetros para verificar si `email` existe.
  console.log("Received email: ", email);
  const length = 4;
  const [otp, setOtp] = useState(Array(length).fill(''));;
  const inputs = useRef([]);
  const dispatch = useDispatch();
  const { verified, loading, error } = useSelector((state) => state.verifyOtp);

  const handleTextChange = (text, index) => {
    const newOtp = [...otp];
    if (/^\d$/.test(text)) {  // Solo permitir números
      newOtp[index] = text;
      setOtp(newOtp);

      // Mover al siguiente campo si el texto es válido
      if (text && index < length - 1) {
        inputs.current[index + 1].focus();
      }

      // Llamar a la función cuando se complete el OTP
      // if (newOtp.join('').length === length) {
      //   onOtpComplete(newOtp.join(''));
      // }
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
      console.log(data)
      dispatch(verifyUserOtp(data));
    } else {
      console.error("Email or OTP is missing");
    }
  }

  useEffect(() => {
    if (verified) {
      router.replace("/signup/userInformation");
    }
  }, [verified]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP enviado</Text>
      <Text style={styles.subtitle}>Ingresa el código OTP que te enviamos</Text>

      <View style={styles.otpContainer}>
        {otp.map((_, index) => (
          <TextInput
            key={index}
            style={styles.input}
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

      <TouchableOpacity style={styles.submitButton} onPress={handleVerifyOTP}>
        <Text style={styles.submitButtonText}>Siguiente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerContainer}>
        <Text style={styles.registerText}>¿Ya tienes una cuenta? </Text>
        <Text style={styles.registerLink}>Inicia Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    paddingHorizontal: 20,
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#7D7D7D',
    textAlign: 'center',
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#FCE5CD',
    textAlign: 'center',
    fontSize: 24,
    color: '#000',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
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
  submitButton: {
    backgroundColor: '#B5432A',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    color: '#7D7D7D',
    fontSize: 14,
  },
  registerLink: {
    color: '#007AFF',
    fontSize: 14,
  },
});

export default verifyOTP;