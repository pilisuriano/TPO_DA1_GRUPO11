import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, Pressable, StatusBar, Platform, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useLocalSearchParams, useRouter } from "expo-router";
import { useDispatch } from 'react-redux';
import { getItem } from '@/src/services/secureStore';

const UserInformation = () => {
  const router = useRouter()
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("masculino");
  const [description, setDescription] = useState("");
  const [emailIsFocused, setEmailIsFocused] = useState(false);
  const [descriptionIsFocused, setDescriptionIsFocused] = useState(false);
  const isButtonEnabled = fullName.trim() !== '' && gender.trim() !== '';

  const handleUserInformation = async () => {
    if (isButtonEnabled) {
      router.push({ pathname: "/signup/chooseUser", params: { fullName: fullName, gender: gender, description: description } });
    }
  }

  return (

    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Información Personal</Text>
          <Text style={styles.subtitle}>Por favor, complete la siguiente Información: </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nombre completo</Text>
            <TextInput
              value={fullName}
              onChangeText={setFullName}
              keyboardType="default"
              autoCapitalize="none"
              style={[styles.input, emailIsFocused && styles.inputFocused]}
              placeholderTextColor="#C7C7CD"
              onFocus={() => setEmailIsFocused(true)}
              onBlur={() => setEmailIsFocused(false)}
            />
          </View>


          <View style={styles.inputContainer}>
            <Text style={styles.label}>Género</Text>
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Masculino" value="masculino" />
              <Picker.Item label="Femenino" value="femenino" />
              <Picker.Item label="Otro" value="otro" />
            </Picker>
            <Image source="Iconly/Bold/Arrow---Down-2.png" style={styles.icon} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Sobre mi</Text>
            <TextInput
              value={description}
              onChangeText={setDescription}
              multiline={true}
              numberOfLines={3}
              style={[styles.input, styles.inputAreaText, descriptionIsFocused && styles.inputFocused]}
              placeholderTextColor="#C7C7CD"
              onFocus={() => setDescriptionIsFocused(true)}
              onBlur={() => setDescriptionIsFocused(false)}
            />
          </View>


          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={[styles.signupButton, { opacity: isButtonEnabled ? 1 : 0.6 }]}
              disabled={!isButtonEnabled}
              onPress={handleUserInformation}>
              <Text style={styles.signupButtonText}>Siguiente</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.replace('/login')}>
              <Text style={styles.loginText}>
                ¿Ya tienes una cuenta? <Text style={styles.loginLink}>Inicia Sesión</Text>
              </Text>
            </TouchableOpacity>

          </View>

        </ScrollView>
    </SafeAreaView>
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
  inputAreaText: {
    textAlignVertical: 'top',
  },
  inputFocused: {
    borderWidth: 0.5,
    borderColor: '#7E5F5B'
  },
  picker: {
    flex: 1,
    width: "50%",
    opacity: 0.7,
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    fontSize: 14,
    marginVertical: 0, paddingVertical: 0, height: 30
  },
  icon: {
    width: 20,
    height: 20,
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

export default UserInformation;
