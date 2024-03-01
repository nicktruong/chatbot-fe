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
    backgroundColor: '#60646c',
    transition: 'all 200ms ease-in',
    _hover: { outline: '1.5px solid #0090ff' },
  },
} satisfies Record<string, SystemStyleObject>;
