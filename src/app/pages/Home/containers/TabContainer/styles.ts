import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  tabs: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '0.25rem 0.25rem 0.25rem 0',
    paddingLeft: {
      md: '0',
      base: '0.25rem',
    },
  },
} satisfies Record<string, SystemStyleObject>;
