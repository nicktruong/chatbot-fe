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
    color: 'gray.600',
    cursor: 'pointer',
    fontSize: '1.5rem',
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
    fontWeight: 500,
    fontSize: '0.75rem',
  },
  menuItem: {
    fontSize: '0.875rem',
  },
  logout: {
    color: 'red',
  },
} satisfies Record<string, SystemStyleObject>;
