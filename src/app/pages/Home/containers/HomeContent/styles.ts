import type { SystemStyleObject } from '@chakra-ui/react';

export const styles = {
  tabPanels: { flexGrow: 1, overflow: 'auto' },
  tabPanel: { height: '100%', padding: '0' },
} satisfies Record<string, SystemStyleObject>;
