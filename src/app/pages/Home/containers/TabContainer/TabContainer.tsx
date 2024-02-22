import { Tabs } from '@chakra-ui/react';

import { styles } from './styles';
import { usePrepareHook } from './helpers';

import { Appbar } from '../Appbar';
import { HomeContent } from '../HomeContent';

export const TabContainer = () => {
  const { tabIndex, onTabsChange } = usePrepareHook();

  return (
    <Tabs
      sx={styles.tabs}
      index={tabIndex}
      variant="unstyled"
      onChange={onTabsChange}
    >
      <Appbar />
      <HomeContent />
    </Tabs>
  );
};
