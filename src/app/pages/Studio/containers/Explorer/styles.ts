import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    background: 'gray.studio.100',
  },
  leftBarContainer: {
    gap: '2',
    top: '0',
    left: '0',
    bottom: '0',
    padding: '2',
    height: '100%',
    display: 'flex',
    position: 'fixed',
  },
  leftSidebar: {
    zIndex: 10,
    width: '12',
    padding: '1',
    border: '1px',
    height: '100%',
    borderRadius: 'lg',
    position: 'relative',
    borderColor: 'gray.studio.200',
    backgroundColor: 'gray.studio.50',
  },
  buttonContainer: {
    padding: '2',
    cursor: 'pointer',
    borderRadius: 'lg',
  },
  explorerHandle: {
    top: '0',
    right: '0',
    height: '100%',
    width: '0.3rem',
    borderRadius: 'lg',
    cursor: 'col-resize',
    position: 'absolute',
    transition: 'all var(--chakra-transition-duration-normal)',

    _hover: { backgroundColor: '#0090ff' },
  },
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
    paddingX: 2,
    paddingY: 1.5,
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
