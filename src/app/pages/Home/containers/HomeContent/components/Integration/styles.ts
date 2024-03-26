import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  container: {
    gap: '12',
    paddingX: '8',
    paddingTop: '14',
    maxWidth: '672px',
    paddingBottom: '8',
    margin: { lg: '0 auto' },
  },
  heading: {
    fontSize: '2xl',
    fontWeight: 600,
  },
  embeddedHeading: {
    marginTop: 4,
    fontWeight: 600,
  },
  codeContainer: {
    padding: 4,
    marginTop: 2,
    paddingRight: 12,
    cursor: 'pointer',
    borderRadius: 'md',
    border: '1px solid',
    position: 'relative',
    borderColor: 'gray.200',

    _hover: {
      '& > #copy-btn': {
        opacity: '1 !important',
        visibility: 'visible !important',
      },
    },
  },
  code: {
    fontWeight: 600,
    overflow: 'hidden',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontFamily: "'Courier New', Courier, monospace",
  },
  codeMultiline: {
    tabSize: '2',
    overflow: 'unset',
    textOverflow: 'unset',
    whiteSpace: 'pre-wrap',
  },
  copyBtn: {
    top: 18,
    right: 22,
    opacity: 0,
    fontSize: 20,
    position: 'absolute',
    visibility: 'hidden',
    transition: 'all var(--chakra-transition-duration-normal)',
  },
} satisfies Record<string, SystemStyleObject>;
