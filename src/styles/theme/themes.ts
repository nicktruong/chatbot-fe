import { extendTheme } from '@chakra-ui/react';

import '@fontsource-variable/inter';

const lightTheme = extendTheme({
  colors: {
    gray: {
      600: '#525252',
      700: '#404040',
    },
    grayBorder: '#e5e5e5',
    home: {
      background: '#fdfdfd',
    },
    tab: {
      color: '#737373',
      hover: { background: '#fafafa' },
      selected: { color: '#171717', background: '#f5f5f5' },
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
