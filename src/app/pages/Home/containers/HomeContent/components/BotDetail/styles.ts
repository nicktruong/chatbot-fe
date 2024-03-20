import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  noMessagesContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: { md: '80%', base: '100%' },
    padding: { md: '10% 0 0 25%', base: '20% 0 0' },
    alignItems: { base: 'center', md: 'flex-start' },
  },
  noMessagesText: {
    marginTop: '2',
    color: 'gray.600',
    textAlign: 'center',
  },
  container: {
    gap: '12',
    paddingX: '8',
    display: 'flex',
    paddingTop: '14',
    maxWidth: '672px',
    paddingBottom: '8',
    flexDirection: 'column',
    margin: { lg: '0 auto' },
  },
  infoHeader: {
    display: 'flex',
    color: 'gray.500',
    alignItems: 'center',
  },
  infoHeaderText: {
    fontSize: 'sm',
    fontWeight: 500,
    marginRight: '2',
  },
  deleteBtn: {
    color: 'red',
    fontSize: 'sm',
    fontWeight: 400,
    marginLeft: 'auto',
  },
} satisfies Record<string, SystemStyleObject>;
