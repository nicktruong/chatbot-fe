import { extendTheme } from '@chakra-ui/react';

import { fonts } from './fonts';

export const studioLightColors = {
  gray: {
    50: '#f9f9fb',
    100: '#f0f0f3',
    200: '#e8e8ec',
    300: '#e0e1e7',
    500: '#d9d9e0',
    600: '#7f838d',
  },
  blue: {
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
  slate: {
    7: '#cdced7',
    11: '#60646c',
  },
  node: {
    border: '#cdced7',
    background: '#e0e1e7',
    placeholder: '#7f838d',
  },
};

export const studioLight = extendTheme({
  fonts,
  colors: studioLightColors,
});
