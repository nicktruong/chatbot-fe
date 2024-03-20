import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  container: {
    paddingY: '2',
    paddingX: '4',
    fontSize: 'sm',
    fontWeight: '500',
    borderRadius: '3xl',
    width: 'fit-content',
  },
  bot: {
    backgroundColor: 'gray.200',
    borderBottomLeftRadius: 'md',
  },
  user: {
    color: 'white',
    marginLeft: 'auto',
    backgroundColor: 'blue.600',
    borderBottomRightRadius: 'md',
  },
} satisfies Record<string, SystemStyleObject>;
