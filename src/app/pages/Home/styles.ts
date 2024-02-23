import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  container: {
    gap: '0.25rem',
    height: '100vh',
    display: 'flex',
    backgroundColor: 'homeBackground',
  },
  tabs: {
    width: '100%',
    padding: '0.25rem 0.25rem 0.25rem 0',
    paddingLeft: {
      md: '0',
      base: '0.25rem',
    },
  },
} satisfies Record<string, SystemStyleObject>;
