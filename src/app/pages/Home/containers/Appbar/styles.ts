import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  container: {
    border: '1px',
    display: 'flex',
    padding: '0.5rem',
    alignItems: 'center',
    borderColor: 'gray.200',
    borderRadius: '0.25rem',
    backgroundColor: 'white',
  },
  menuIcon: {
    fontSize: '2xl',
    color: 'gray.600',
    cursor: 'pointer',
    marginRight: '1rem',
  },
  tabList: {
    gap: '0.5rem',
    marginRight: '0.5rem',
  },
  action: {
    gap: '1rem',
    display: 'flex',
    marginLeft: 'auto',
    alignItems: 'center',
  },
  editBtn: {
    fontSize: 'xs',
    fontWeight: 500,
  },
  menuItem: {
    fontSize: 'sm',
  },
  logout: {
    color: 'red',
  },
} satisfies Record<string, SystemStyleObject>;
