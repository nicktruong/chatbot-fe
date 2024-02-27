import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  leftSidebar: {
    zIndex: 10,
    width: '12',
    padding: '1',
    border: '1px',
    height: '100%',
    borderRadius: 'lg',
    position: 'relative',
    borderColor: '#e8e8ec',
    backgroundColor: 'gray.studio.50',
  },
  buttonContainer: {
    padding: '2',
    cursor: 'pointer',
    borderRadius: 'lg',
  },
} satisfies Record<string, SystemStyleObject>;
