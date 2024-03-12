import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  flow: {
    gap: 1,
    marginX: 1,
    paddingY: 2,
    paddingX: 2.5,
    display: 'flex',
    cursor: 'pointer',
    borderRadius: 'md',
    alignItems: 'center',
    transition: 'backgroundColor var(--chakra-transition-duration-normal)',

    _hover: {
      backgroundColor: 'gray.200',
      boxShadow: 'inset 0 0 0 1px blue.700',
    },
  },
  flowName: {
    fontSize: 'xs',
  },
} satisfies Record<string, SystemStyleObject>;
