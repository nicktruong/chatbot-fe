import { extendTheme } from '@chakra-ui/react';

import { fonts } from './fonts';

export const homeLightColors = {
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    900: '#171717',
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
  },
  home: {
    background: '#fdfdfd',
  },
};

export const homeLight = extendTheme({
  fonts,
  colors: homeLightColors,
});
