import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  containerBg: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'fixed',
    overflow: 'hidden',
    maskImage:
      'radial-gradient(100% 50% at 50% 115%,#ffffff 0%,rgba(255,255,255,.3) 30%,transparent 100%)',

    _after: {
      content: `''`,
      width: '100%',
      height: '100%',
      position: 'absolute',
      backgroundRepeat: 'round',
      backgroundSize: '16px 16px',
      backgroundImage:
        'radial-gradient(circle at center,black 1px,transparent 0)',
    },
  },
  stack: {
    spacing: '3',
    width: '100%',
    maxWidth: 'xs',
    position: 'relative',
  },
  inputIconContainer: {
    height: 12,
    width: '2.8rem',
    pointerEvents: 'none',
  },
  input: {
    height: 12,

    _placeholder: {
      fontSize: 'sm',
      fontWeight: 500,
      color: 'gray.400',
    },
  },
} satisfies Record<string, SystemStyleObject>;
