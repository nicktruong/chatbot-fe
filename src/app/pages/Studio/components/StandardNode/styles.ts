import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  container: {
    border: '1px',
    width: '255px',
    borderRadius: 'xl',
    borderColor: '#cdced7',
    backgroundColor: '#e0e1e7',
    transition: 'all 200ms ease-in',
    boxShadow:
      '0 2px 4px -1px #00000014,inset 0 0 2px 1px rgba(255, 255, 255, 0.48)',

    _hover: { outline: '1.5px solid #0090ff' },
  },
  nodeName: {
    paddingX: '2',
    height: '40px',
    fontSize: 'sm',
    display: 'flex',
    fontWeight: 600,
    color: '#60646c',
    alignItems: 'center',
  },
  nodeBody: {
    gap: '1.5',
    padding: '2',
    display: 'flex',
    flexDirection: 'column',
  },
  card: {
    gap: '1.5',
    padding: '1.5',
    display: 'flex',
    height: '1.875rem',
    borderRadius: 'md',
    alignItems: 'center',
    backgroundColor: 'white',

    _hover: { outline: '1.5px solid #0090ff' },
  },
  cardContent: {
    fontSize: 'xs',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  addCard: {
    fontSize: 'xs',
    display: 'flex',
    fontWeight: 500,
    color: '#7f838d',
    height: '1.875rem',
    borderRadius: 'md',
    border: '1px dashed',
    alignItems: 'center',
    transition: 'all 150ms ease-out',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    _hover: { color: '#0090ff', borderColor: '#0090ff' },
  },
} satisfies Record<string, SystemStyleObject>;
