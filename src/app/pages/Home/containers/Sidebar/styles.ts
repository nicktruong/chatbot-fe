import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  container: {
    zIndex: 10,
    flexShrink: 0,
    width: '270px',
    borderRadius: '0.25rem',
    backgroundColor: 'white',

    padding: {
      md: '0.25rem 0 0.25rem 0.25rem',
      base: '0',
    },
    position: {
      md: 'relative',
      base: 'absolute',
    },
    inset: {
      md: '0',
      base: '0.25rem 0 0.25rem 0.25rem',
    },
  },
  sidebar: {
    border: '1px',
    height: '100%',
    padding: '1rem',
    borderColor: 'gray.200',
    borderRadius: '0.25rem',
  },
} satisfies Record<string, SystemStyleObject>;
