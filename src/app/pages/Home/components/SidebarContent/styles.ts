import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  createChatbotBtn: {
    width: '100%',
    border: '1px',
    display: 'flex',
    padding: '8px 12px',
    alignItems: 'center',
    borderColor: 'gray.200',
    borderRadius: '0.25rem',
    justifyContent: 'space-between',
    boxShadow:
      '0 0 #0000,0 0 #0000,0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)',
    _hover: {
      cursor: 'pointer',
      backgroundColor: 'gray.100',
    },
    _disabled: {
      color: 'gray.300',
    },
  },
  emptyText: {
    fontSize: 'sm',
    color: 'gray.600',
    textAlign: 'center',
  },
  chatbotContainer: {
    display: 'flex',
    cursor: 'pointer',
    height: '2.625rem',
    borderRadius: 'md',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    justifyContent: 'space-between',
    transition: 'all var(--chakra-transition-duration-normal)',

    _notFirst: { marginTop: 1 },
    _hover: { '& > #open-studio-btn': { visibility: 'visible', opacity: 1 } },
  },
  openStudioBtn: {
    opacity: '0',
    height: '1.625rem',
    visibility: 'hidden',
    minWidth: '1.875rem',
    borderRadius: 'full',
  },
} satisfies Record<string, SystemStyleObject>;
