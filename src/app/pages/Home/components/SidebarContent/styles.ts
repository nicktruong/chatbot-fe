import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  container: {
    border: '1px',
    display: 'flex',
    padding: '8px 12px',
    alignItems: 'center',
    borderRadius: '0.25rem',
    borderColor: 'grayBorder',
    justifyContent: 'space-between',
    boxShadow:
      '0 0 #0000,0 0 #0000,0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 ,0 / .1)',
    _hover: {
      cursor: 'pointer',
      backgroundColor: 'gray.100',
    },
  },
  emptyText: {
    fontSize: 'sm',
    color: 'gray.600',
    textAlign: 'center',
  },
} satisfies Record<string, SystemStyleObject>;
