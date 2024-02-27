import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  container: {
    fontSize: 'sm',
    color: 'tab.color',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    _hover: {
      color: 'gray.700',
      background: 'tab.hover.background',
    },
    _selected: {
      background: 'gray.100',
      color: 'tab.selected.color',
    },
  },
} satisfies Record<string, SystemStyleObject>;
