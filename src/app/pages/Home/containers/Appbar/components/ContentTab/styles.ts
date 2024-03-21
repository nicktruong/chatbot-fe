import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  container: {
    fontSize: 'sm',
    color: 'gray.500',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    _hover: {
      color: 'gray.700',
      background: 'gray.50',
    },
    _selected: {
      color: 'gray.900',
      background: 'gray.100',
    },
  },
} satisfies Record<string, SystemStyleObject>;
