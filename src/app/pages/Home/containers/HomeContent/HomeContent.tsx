import { TabPanel, TabPanels } from '@chakra-ui/react';

import { styles } from './styles';

import { BotDetail, Conversations, Integration } from './components';

export const HomeContent = () => {
  return (
    <TabPanels sx={styles.tabPanels}>
      <TabPanel sx={styles.tabPanel}>
        <BotDetail />
      </TabPanel>
      <TabPanel sx={styles.tabPanel}>
        <Integration />
      </TabPanel>
      <TabPanel sx={styles.tabPanel}>
        <Conversations />
      </TabPanel>
    </TabPanels>
  );
};
