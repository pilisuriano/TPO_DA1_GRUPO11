import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, Pressable, StatusBar, Platform, SafeAreaView, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { getItem } from "@/src/services/secureStore";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "@/src/features/signup/signup.slice";
import { loginUser } from '@/src/features/auth/auth.slice';

const ChooseUser = () => {

  const dispatch = useDispatch();
  const router = useRouter()
  const params = useLocalSearchParams();
  const { fullName, gender, description } = params;
  const [userEmail, setUserEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [nicknameIsFocused, setNicknameIsFocused] = useState(false);
  const [pwdIsFocused, setPwdIsFocused] = useState(false);
  const [confirmPwdIsFocused, setconfirmPwdIsFocused] = useState(false);
  const [confirmError, setConfirmError] = useState(false);

  const isValidPassword = (password) => {
    return password.length > 6;
  };
  const isButtonEnabled = pwd.trim() !== '' && pwd.trim() !== '' && confirmPwd.trim() !== '' && isValidPassword(pwd) && isValidPassword(confirmPwd);
  const { showInUI, created, loading, error } = useSelector((state) => state.signup);

  const handleUsername = async () => {
    if (pwd !== confirmPwd) {
      console.log("pass distintas")
      setConfirmError(true);
    } else {
      setConfirmError(false)
      const userEmail = await getItem("userEmail")
      setUserEmail(userEmail)
      dispatch(signupUser({ email: userEmail, fullName: fullName, gender: gender, description: description, nickname: nickname, password: pwd }))
    }
  }

  useEffect(() => {
    if (created) {
      dispatch(loginUser({email: userEmail, password: pwd}))
      router.replace("/signup/welcome")
    }
  }, [created]);


  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#B5432A" />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Elige un usuario</Text>
          <Text style={styles.subtitle}>Tus amigos podrán buscarte con el </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Usuario</Text>
            <TextInput
              value={nickname}
              onChangeText={setNickname}
              keyboardType="default"
              autoCapitalize="none"
              style={[styles.input, nicknameIsFocused && styles.inputFocused]}
              placeholderTextColor="#C7C7CD"
              onFocus={() => setNicknameIsFocused(true)}
              onBlur={() => setNicknameIsFocused(false)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Contraseña</Text> 
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
            <Text style={styles.label}>Confirmar contraseña</Text>
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

export default ChooseUser;
