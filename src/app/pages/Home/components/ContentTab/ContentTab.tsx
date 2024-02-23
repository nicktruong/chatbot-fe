import { Tab } from '@chakra-ui/tabs';

import { styles } from './styles';

import type { PropsWithChildren } from 'react';

export const ContentTab = ({ children }: PropsWithChildren) => {
  return <Tab sx={styles.container}>{children}</Tab>;
};
