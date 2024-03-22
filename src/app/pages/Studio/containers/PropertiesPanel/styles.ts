import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  propertiesContent: {
    border: '1px',
    height: '100%',
    padding: [3, 2],
    width: '17.75rem',
    borderRadius: 'lg',
    borderColor: 'gray.200',
    backgroundColor: 'gray.50',
  },
  propertiesHeading: {
    fontSize: 'sm',
    fontWeight: 600,
  },
  fields: {
    marginTop: 3,
  },
  labelField: {
    marginY: 2,
    fontSize: 'xs',
    color: 'slate.11',
    display: 'inline-block',
    borderBottom: '1px dashed',
    borderColor: 'slate.7',
  },
  studioInput: {
    paddingX: 2,
    height: '30px',
    fontSize: 'xs',
    fontWeight: 500,
    border: '1px solid',
    borderColor: 'gray.500',
    backgroundColor: 'gray.100',

    _focusVisible: {
      borderColor: 'blue.700',
    },
  },
  desc: {
    marginY: 3,
    fontSize: 'xs',
    fontWeight: 500,
    overflow: 'auto',
    color: 'gray.600',
    maxHeight: '40px',
  },
} satisfies Record<string, SystemStyleObject>;
