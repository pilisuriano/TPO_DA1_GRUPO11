import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, Pressable, StatusBar, Platform, SafeAreaView, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { getItem } from "@/src/services/secureStore";
import { useDispatch, useSelector } from "react-redux";
import { resetError, resetUserPassword } from '@/src/features/resetPassword/resetPassword.slice';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const [userEmail, setUserEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [pwdIsFocused, setPwdIsFocused] = useState(false);
  const [confirmPwdIsFocused, setconfirmPwdIsFocused] = useState(false);
  const [confirmError, setConfirmError] = useState(false);

  const isValidPassword = (password) => {
    return password.length > 6;
  };
  const isButtonEnabled = pwd.trim() !== '' && pwd.trim() !== '' && confirmPwd.trim() !== '' && isValidPassword(pwd) && isValidPassword(confirmPwd);
  const { showInUI, passwordRecovery, loading, error } = useSelector((state) => state.resetPassword);

  const handleUsername = async () => {
    if (pwd !== confirmPwd) {
      setConfirmError(true);
    } else {
      setConfirmError(false)
      const userEmail = await getItem("userEmail")
      setUserEmail(userEmail)
      dispatch(resetUserPassword({ email: userEmail, newPassword: pwd, confirmPassword: confirmPwd }))
    }
    resetError()
  }

  useEffect(() => {
    if (passwordRecovery) {
      router.replace("/forgotPassword/recovered")
      resetError()
    }
  }, [passwordRecovery]);


  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#B5432A" />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Elige una nueva contraseña</Text>
          <Text style={styles.subtitle}>Asegura tu cuenta </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nueva contraseña</Text> 
            <TextInput
              value={pwd}
              onChangeText={(text) => {
                setPwd(text);
                if (confirmError) setConfirmError(false);
              }}
              keyboardType="default"
              autoCapitalize="none"
              secureTextEntry
              style={[styles.input, pwdIsFocused && styles.inputFocused, confirmError && styles.inputError]}
              placeholderTextColor="#C7C7CD"
              onFocus={() => setPwdIsFocused(true)}
              onBlur={() => setPwdIsFocused(false)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirmar nueva contraseña</Text>
            <TextInput
              value={confirmPwd}
              onChangeText={(text) => {
                setConfirmPwd(text);
                if (confirmError) setConfirmError(false);
              }}
              keyboardType="default"
              autoCapitalize="none"
              secureTextEntry
              style={[styles.input, confirmPwdIsFocused && styles.inputFocused, confirmError && styles.inputError]}
              placeholderTextColor="#C7C7CD"
              onFocus={() => setconfirmPwdIsFocused(true)}
              onBlur={() => setconfirmPwdIsFocused(false)}
            />
          </View>

          {confirmError && (
            <Text style={styles.errorText}>No coinciden contraseñas</Text>
          )}

          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={[styles.signupButton, { opacity: isButtonEnabled ? 1 : 0.6 }]}
              disabled={!isButtonEnabled}
              onPress={handleUsername}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  inputFocused: {
    borderWidth: 0.5,
    borderColor: '#7E5F5B'
  },
  footerContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 95,
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

export default ResetPassword;
