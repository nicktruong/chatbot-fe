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
      color: 'tab.selected.color',
      background: 'tab.selected.background',
    },
  },
} satisfies Record<string, SystemStyleObject>;
