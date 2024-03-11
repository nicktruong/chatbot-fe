import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    background: 'gray.100',
  },
  leftBarContainer: {
    gap: '2',
    top: '0',
    left: '0',
    zIndex: 1,
    bottom: '0',
    padding: '2',
    height: '100%',
    display: 'flex',
    position: 'fixed',
  },
  rightBarContainer: {
    top: '0',
    right: '0',
    zIndex: 1,
    bottom: '0',
    padding: '2',
    height: '100%',
    display: 'flex',
    position: 'fixed',
  },
} satisfies Record<string, SystemStyleObject>;
