import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  explorerHandle: {
    top: '0',
    right: '0',
    height: '100%',
    width: '0.3rem',
    borderRadius: 'lg',
    cursor: 'col-resize',
    position: 'absolute',
    transition: 'all var(--chakra-transition-duration-normal)',

    _hover: { backgroundColor: '#0090ff' },
  },
} satisfies Record<string, SystemStyleObject>;
