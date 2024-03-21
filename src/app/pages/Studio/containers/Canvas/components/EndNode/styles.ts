import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  container: {
    height: '10',
    padding: '2',
    color: 'white',
    minWidth: '20',
    gap: '1.125rem',
    display: 'flex',
    borderRadius: 'xl',
    alignItems: 'center',
    outline: '1.5px solid',
    outlineColor: 'transparent',
    backgroundColor: 'slate.11',
    transition: 'all 200ms ease-in',
    _hover: { outlineColor: 'blue.700' },
  },
} satisfies Record<string, SystemStyleObject>;
