import { DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';

export const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: '#BB4426',
    secondary: '#006175',
    background: '#F0F0F0',
    text: '#000000',
  },
};

export const CustomDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    primary: '#992E1C',
    secondary: '#004A5A',
    background: '#1A1A1A',
    text: '#FFFFFF',
  },
};