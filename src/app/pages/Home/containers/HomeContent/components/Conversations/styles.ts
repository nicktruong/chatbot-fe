import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  container: {
    gap: 4,
    padding: '8',
    display: 'flex',
    paddingTop: '14',
    maxWidth: '820px',
    margin: { lg: '0 auto' },
    flexDirection: { base: 'column', md: 'row' },
  },
  clients: {
    padding: 2,
    flexShrink: 0,
    width: { base: '100%', md: '108px', lg: '200px' },
  },
  conversationsHeading: {
    fontSize: 'xs',
    fontWeight: 500,
    color: 'gray.500',
  },
  conversationsClients: {
    marginTop: 3,
  },
  client: {
    py: 1,
    px: 2,
    mb: 1,
    cursor: 'pointer',
    borderRadius: 'md',
    transition: 'all var(--chakra-transition-duration-normal)',

    _hover: {
      backgroundColor: 'gray.100',
    },
  },
  clientName: {
    fontSize: 'sm',
    fontWeight: 500,
  },
  lastMessage: {
    fontSize: 'xs',
    fontWeight: 500,
    color: 'gray.400',
  },
  card: {
    flexGrow: 1,
  },
  cardHeader: {
    paddingY: '2',
    paddingX: '4',
    fontSize: 'sm',
    display: 'flex',
    color: 'gray.500',
    borderBottom: '1px',
    alignItems: 'center',
    borderColor: 'gray.200',
    backgroundColor: 'gray.50',
    justifyContent: 'space-between',
    borderRadius: '0.3125rem 0.3125rem 0 0',
    fontWeight: 500,
  },
  cardBody: {
    padding: '4',
    overflow: 'auto',
    minHeight: '480px',
    maxHeight: '480px',
  },
  date: {
    fontSize: 'xs',
    fontWeight: 500,
    color: 'gray.500',
    textAlign: 'center',
  },
} satisfies Record<string, SystemStyleObject>;
