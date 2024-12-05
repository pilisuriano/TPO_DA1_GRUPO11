import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomDefaultTheme, CustomDarkTheme } from '../themes';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? CustomDarkTheme : CustomDefaultTheme;

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme) {
        setIsDarkMode(savedTheme === 'dark');
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    // Usar el valor actual de isDarkMode de manera correcta
    setIsDarkMode((prevState) => {
        const newTheme = prevState ? 'light' : 'dark';
        AsyncStorage.setItem('theme', newTheme); // Guardar el nuevo valor en AsyncStorage
        return !prevState; // Cambiar el estado al opuesto
    });
};

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};