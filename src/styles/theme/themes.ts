import { extendTheme } from '@chakra-ui/react';

import '@fontsource-variable/inter';

const lightTheme = extendTheme({
  fonts: {
    body: `'Inter Variable', sans-serif`,
    heading: `'Inter Variable', sans-serif`,
  },
});

export const themes = {
  light: lightTheme,
};
