import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  container: {
    width: '2xs',
    zIndex: '-1',
    padding: '1',
    border: '1px',
    height: '100%',
    borderRadius: 'lg',
    position: 'absolute',
    borderColor: 'gray.studio.200',
    backgroundColor: 'gray.studio.50',
    transition: 'all var(--chakra-transition-duration-normal)',
  },
  accordionItem: {
    borderRadius: 'md',
    border: '1px solid',
    borderColor: '#e8e8ec',
    '&>.chakra-collapse': {
      overflow: 'unset !important',
    },
  },
  accordionButton: {
    gap: '1.5',
    padding: '2',
    fontSize: 'xs',
    color: '#60646c',
    _hover: { backgroundColor: '#f0f0f3' },
  },
  sendMessages: {
    flex: '1',
    fontSize: 'xs',
    fontWeight: 600,
    color: '#60646c',
    textAlign: 'left',
  },
  cardType: {
    gap: '1',
    height: '7',
    paddingX: '3',
    display: 'flex',
    cursor: 'pointer',
    borderRadius: 'md',
    border: '1px solid',
    alignItems: 'center',
    borderColor: '#e0e1e7',
    backgroundColor: 'gray.studio.50',
    _hover: { borderColor: '#0090ff' },
  },
} satisfies Record<string, SystemStyleObject>;
