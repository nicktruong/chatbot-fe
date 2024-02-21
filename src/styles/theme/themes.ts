import { extendTheme } from '@chakra-ui/react';

import '@fontsource-variable/inter';

const lightTheme = extendTheme({
  colors: {
    grayBorder: '#e5e5e5',
    homeBackground: '#fdfdfd',
    tab: {
      color: '#737373',
      hover: { background: '#fafafa', color: '#404040' },
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
