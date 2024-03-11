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
    borderColor: 'gray.200',
    backgroundColor: 'gray.50',
    transition: 'all var(--chakra-transition-duration-normal)',
  },
  accordionItem: {
    borderRadius: 'md',
    border: '1px solid',
    borderColor: 'gray.200',
    '&>.chakra-collapse': {
      overflow: 'unset !important',
    },
    _notFirst: {
      marginTop: 1,
    },
  },
  accordionButton: {
    gap: '1.5',
    padding: '2',
    fontSize: 'xs',
    color: 'slate.11',
    _hover: { backgroundColor: 'gray.100' },
  },
  sendMessages: {
    flex: '1',
    fontSize: 'xs',
    fontWeight: 600,
    color: 'slate.11',
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
    borderColor: 'gray.300',
    backgroundColor: 'gray.50',
    _hover: { borderColor: 'blue.700' },
  },
} satisfies Record<string, SystemStyleObject>;
