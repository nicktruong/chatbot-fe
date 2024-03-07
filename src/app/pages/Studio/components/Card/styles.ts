import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  card: {
    gap: '1.5',
    padding: '1.5',
    display: 'flex',
    height: '1.875rem',
    borderRadius: 'md',
    alignItems: 'center',
    backgroundColor: 'white',

    _hover: { outline: '1.5px solid blue.700' },
  },
  cardContent: {
    fontSize: 'xs',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
} satisfies Record<string, SystemStyleObject>;
