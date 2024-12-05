import React, { useContext, useState } from 'react';
import { Image, StyleSheet, Text, Pressable, View, ActivityIndicator, useColorScheme, Switch, ToastAndroid, Modal, Platform, StatusBar } from "react-native";
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { ThemeContext } from '../../src/context/ThemeContext.js'; // Importar el contexto de tema
import { useDispatch } from 'react-redux';
import { logoutUser } from '@/src/features/auth/auth.slice';
import { deleteAuthToken } from '@/src/services/secureStore';
import api from '@/src/services/api';
import Toolbar from '@/components/Toolbar';

const CONFIGURACIONES = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const colorScheme = useColorScheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');
  const { isDarkMode, theme, toggleTheme } = useContext(ThemeContext); // Consumir del contexto

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsEnglish(language === 'en');
  };

  // Usar toggleTheme en lugar de setIsDarkMode
  const toggleDarkMode = (value) => {
    toggleTheme(value);  // Utilizamos toggleTheme desde el contexto
  };

  const handleLogout = async () => {
    try {
      dispatch(logoutUser());
      await deleteAuthToken()
      navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [{ name: 'login/index' }]
      }))
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await api.delete('/users/me');
      if (response.status === 200) {
        dispatch(logoutUser());
        await deleteAuthToken()
        setModalVisible(!modalVisible)
        navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [{ name: 'startScreen/index' }]
        }))
      } else {
        setModalVisible(!modalVisible)
        ToastAndroid.show(t('error'), ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={[styles.configuraciones, { backgroundColor: theme.colors.background }]}>
      <Toolbar title={t('settings')} />
      {/* <Text style={[styles.configuracin, { color: theme.colors.text }]}>{t('settings')}</Text>
      <Pressable style={styles.iconlylightOutlinearrowL} onPress={() => navigation.navigate('perfil')}>
        <Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/Arrow---Left-2.png")} />
      </Pressable> */}
      {/* <Pressable style={[styles.rectangleParent, styles.rectangleLayout]} onPress={() => navigation.navigate('index')}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.cerrarSesin, styles.cerrarSesinTypo]}>{t('logout')}</Text>
      </Pressable>
      <Pressable style={[styles.rectangleGroup, styles.rectangleLayout]} onPress={() => navigation.navigate('index')}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.eliminarCuenta, styles.cerrarSesinTypo]}>{t('deleteAccount')}</Text>
      </Pressable> */}
      <Text style={[styles.activarModoOscuro, styles.cambiarIdiomaTypo, { color: theme.colors.text }]}>{t('darkMode')}</Text>
      <View style={styles.switchContainer}>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: '#006175', true: '#BB4426' }}
          thumbColor={isDarkMode ? '#006175' : '#BB4426'}
          ios_backgroundColor="#3e3e3e"
        />
      </View>
      <Text style={[styles.misPostsFavoritos, styles.cambiarIdiomaTypo, { color: theme.colors.text }]}>{t('favoritePosts')}</Text>
      <Text style={[styles.cambiarIdioma, styles.cambiarIdiomaTypo, { color: theme.colors.text }]}>{t('changeLanguage')}</Text>
      <View style={styles.languageButtons}>
        <Pressable
          style={[styles.languageButton, isEnglish ? styles.activeButton : styles.inactiveButton]}
          onPress={() => changeLanguage('en')}
        >
          <Text style={styles.languageButtonText}>English</Text>
        </Pressable>
        <Pressable
          style={[styles.languageButton, !isEnglish ? styles.activeButton : styles.inactiveButton]}
          onPress={() => changeLanguage('es')}
        >
          <Text style={styles.languageButtonText}>Español</Text>
        </Pressable>
      </View>
      <Pressable style={[styles.iconlylightOutlinearrowL1, styles.iconlylightPosition]} onPress={() => navigation.navigate('favoritos')}>
        <Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source={require("../../assets/images/Arrow---Right-2.png")} />
      </Pressable>



      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => { setModalVisible(!modalVisible) }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{t('deleteAccountModalText')}</Text>
            <View style={styles.buttonsModalView}>
              <Pressable
                style={[styles.button, styles.buttonAccept]}
                onPress={handleDeleteAccount}>
                <Text style={styles.textStyle}>{t('deleteAccountModalAccept')}</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>{t('deleteAccountModalDismiss')}</Text>
              </Pressable>
            </View>

          </View>
        </View>
      </Modal>
      <View style={styles.footerContainer}>
        <Button text={t('logout')} type='third' onPress={handleLogout} />
        <Button text={t('deleteAccount')} onPress={() => setModalVisible(true)} />
      </View>
    </View>);
};

const styles = StyleSheet.create({
  // Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonsModalView: {
    flexDirection: 'row'
  },
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    marginHorizontal: 20
  },
  buttonAccept: {
    backgroundColor: '#B5432A',
  },
  buttonClose: {
    backgroundColor: '#006175',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  // Screen
  footerContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 65,
    width: '100%',
    justifyContent: 'flex-end'
  },
  blackBase21Position: {
    width: 390,
    left: 0,
    position: "absolute"
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
  },
  rectangleLayout: {
    height: 49,
    width: 321
  },
  groupLayout: {
    borderRadius: 10,
    height: 49,
    width: 321,
    left: 0,
    top: 0,
    position: "absolute"
  },
  cerrarSesinTypo: {
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    fontSize: 18,
    position: "absolute"
  },
  cambiarIdiomaTypo: {
    opacity: 0.7,
    width: 272,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    fontSize: 14,
    left: 40,
    textAlign: "left",
    color: "#000",
    position: "absolute"
  },
  iconlylightPosition: {
    right: "9.71%",
    left: 295,
    height: "2.25%",
    width: "2.67%",
    position: "absolute",
    top: "27.5%",
  },
  blackBase21: {
    height: 41,
    top: 0,
    width: 390
  },
  darkBackground: {
    backgroundColor: '#1A1A1A',
  },
  lightBackground: {
    backgroundColor: '#F0F0F0',
  },
  darkText: {
    color: '#FFFFFF',
  },
  lightText: {
    color: '#000000',
  },
  configuracin: {
    top: 67,
    left: 134,
    width: 149,
    textAlign: "left",
    color: "#000",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    fontSize: 18,
    position: "absolute"
  },
  icon: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%"
  },
  switchContainer: {
    marginVertical: 123, // Ajusta el margen superior e inferior del contenedor del Switch
    left: -40,
  },
  iconlylightOutlinearrowL: {
    left: "7.73%",
    top: "8.87%",
    right: "89.6%",
    bottom: "88.88%",
    height: "2.25%",
    width: "2.67%",
    position: "absolute"
  },
  configuracionesChild: {
    top: 742,
    left: 38,
    width: 318,
    height: 1,
    position: "absolute"
  },
  groupChild: {
    backgroundColor: "#006175"
  },
  activeButton: {
    backgroundColor: '#bb4426',
  },
  inactiveButton: {
    backgroundColor: '#8A9597',
  },
  cerrarSesin: {
    top: 11,
    left: 98,
    textAlign: "left"
  },
  rectangleParent: {
    top: 606,
    left: 40,
    width: 321,
    position: "absolute"
  },
  groupItem: {
    backgroundColor: "#bb4426"
  },
  eliminarCuenta: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 49,
    width: 321,
    left: 0,
    color: "#fff",
    top: 0
  },
  rectangleGroup: {
    top: 662,
    left: 40,
    width: 321,
    position: "absolute"
  },
  activarModoOscuro: {
    top: 137
  },
  misPostsFavoritos: {
    top: 198
  },
  cambiarIdioma: {
    top: 250
  },
  image31Icon: {
    top: 125,
    left: 312,
    width: 45,
    height: 45,
    position: "absolute"
  },
  iconlylightOutlinearrowL1: {
    top: "24.38%",
    bottom: "73.36%"
  },
  iconlylightOutlinearrowL2: {
    top: "30.42%",
    bottom: "67.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
  },
  configuracionesItem: {
    top: 775,
    height: 75
  },
  languageButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  languageButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  languageButtonText: {
    color: '#fff',
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
  },
  configuraciones: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 26 : 26,
    backgroundColor: "#fff",
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    paddingHorizontal: 30,
  }
});

export default CONFIGURACIONES;

