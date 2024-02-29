import { extendTheme } from '@chakra-ui/react';

import '@fontsource-variable/inter';

const lightThemeColors = {
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    studio: {
      50: '#f9f9fb',
      100: '#f0f0f3',
      200: '#e8e8ec',
      300: '#e0e1e7',
      600: '#7f838d',
    },
  },
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a4fa',
    500: '#3c82f6',
    600: '#2562eb',
    700: '#1d4dd8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
    studio: {
      50: '#edfbff',
      100: '#d6f5ff',
      200: '#b5f0ff',
      300: '#83eaff',
      400: '#48daff',
      500: '#1ebfff',
      600: '#06a3ff',
      700: '#0090ff',
      800: '#086dc5',
      900: '#0d5d9b',
      950: '#0e385d',
    },
  },
  home: {
    background: '#fdfdfd',
  },
  tab: {
    selected: { color: '#171717' },
    hover: { background: '#fafafa' },
  },
};

const lightTheme = extendTheme({
  colors: lightThemeColors,
  fonts: {
    body: `'Inter Variable', sans-serif`,
    heading: `'Inter Variable', sans-serif`,
  },
});

export const colors = {
  light: lightThemeColors,
};

export const themes = {
  light: lightTheme,
};
