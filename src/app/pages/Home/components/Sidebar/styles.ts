import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  container: {
    flexShrink: 0,
    width: '270px',
    backgroundColor: 'white',
    padding: '0.25rem 0 0.25rem 0.25rem',
  },
  sidebar: {
    border: '1px',
    height: '100%',
    borderRadius: '0.25rem',
    borderColor: 'grayBorder',
  },
} satisfies Record<string, SystemStyleObject>;
