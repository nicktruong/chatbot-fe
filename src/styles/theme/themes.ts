import { extendTheme } from '@chakra-ui/react';

import '@fontsource-variable/inter';

const lightTheme = extendTheme({
  colors: {
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      500: '#737373',
      600: '#525252',
      700: '#404040',
    },
    home: {
      background: '#fdfdfd',
    },
    tab: {
      selected: { color: '#171717' },
      hover: { background: '#fafafa' },
    },
  },
  fonts: {
    body: `'Inter Variable', sans-serif`,
    heading: `'Inter Variable', sans-serif`,
  },
});

export const themes = {
  light: lightTheme,
};
