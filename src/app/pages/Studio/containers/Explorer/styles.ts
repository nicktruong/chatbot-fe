import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  explorerContent: {
    zIndex: 10,
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
  flow: {
    gap: 1,
    marginX: 1,
    paddingY: 2,
    paddingX: 2.5,
    display: 'flex',
    cursor: 'pointer',
    borderRadius: 'md',
    alignItems: 'center',
    transition: 'backgroundColor var(--chakra-transition-duration-normal)',

    _hover: {
      backgroundColor: 'gray.studio.200',
    },
  },
  flowName: {
    fontSize: 'xs',
  },
} satisfies Record<string, SystemStyleObject>;
