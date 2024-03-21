import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  container: {
    border: '1px',
    width: '255px',
    borderRadius: 'xl',
    outline: '1.5px solid',
    borderColor: 'node.border',
    outlineColor: 'transparent',
    backgroundColor: 'node.background',
    transition: 'all 200ms ease-in',
    boxShadow:
      '0 2px 4px -1px #00000014,inset 0 0 2px 1px rgba(255, 255, 255, 0.48)',

    _hover: { outlineColor: 'blue.700' },
  },
  nodeName: {
    paddingX: '2',
    height: '40px',
    fontSize: 'sm',
    display: 'flex',
    fontWeight: 600,
    color: 'slate.11',
    alignItems: 'center',
  },
  nodeBody: {
    gap: '1.5',
    padding: '2',
    display: 'flex',
    flexDirection: 'column',
  },
  addCard: {
    fontSize: 'xs',
    display: 'flex',
    fontWeight: 500,
    color: 'node.placeholder',
    cursor: 'pointer',
    height: '1.875rem',
    borderRadius: 'md',
    border: '1px dashed',
    alignItems: 'center',
    transition: 'all 150ms ease-out',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    _hover: { color: 'blue.700', borderColor: 'blue.700' },
  },
} satisfies Record<string, SystemStyleObject>;
