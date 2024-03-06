import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  explorerContent: {
    border: '1px',
    height: '100%',
    borderRadius: 'lg',
    borderColor: 'gray.studio.200',
    backgroundColor: 'gray.studio.50',
  },
  explorerHeader: {
    padding: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  explorerHeaderText: {
    fontSize: 'sm',
    fontWeight: 500,
  },
  infoAndAction: {
    paddingX: 3,
    paddingY: 2,
  },
  projectName: {
    fontSize: 'xs',
    fontWeight: 600,
  },
  flows: {
    marginTop: 1,
  },
} satisfies Record<string, SystemStyleObject>;
