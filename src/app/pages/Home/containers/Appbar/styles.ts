import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  container: {
    display: 'flex',
    padding: '0.5rem',
    alignItems: 'center',
    borderRadius: '0.25rem',
    backgroundColor: 'white',
    border: '1px solid #e5e5e5',
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
