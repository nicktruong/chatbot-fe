import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  container: {
    color: 'tab.color',
    fontSize: '0.875rem',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    _hover: {
      color: 'tab.hover.color',
      background: 'tab.hover.background',
    },
    _selected: {
      color: 'tab.selected.color',
      background: 'tab.selected.background',
    },
  },
} satisfies Record<string, SystemStyleObject>;
