import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  container: {
    height: '10',
    padding: '2',
    color: 'white',
    gap: '1.125rem',
    display: 'flex',
    borderRadius: 'xl',
    alignItems: 'center',
    backgroundColor: '#25997a',
    transition: 'all 200ms ease-in',
    _hover: { outline: '1.5px solid blue.700' },
  },
} satisfies Record<string, SystemStyleObject>;
