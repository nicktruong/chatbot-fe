import { Tab } from '@chakra-ui/tabs';
import type { PropsWithChildren } from 'react';

import { styles } from './styles';

export const ContentTab = ({ children }: PropsWithChildren) => {
  return <Tab sx={styles.container}>{children}</Tab>;
};
