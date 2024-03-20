import { TabPanel, TabPanels } from '@chakra-ui/react';

import { styles } from './styles';

import { BotDetail, Conversations } from './components';

export const HomeContent = () => {
  return (
    <TabPanels sx={styles.tabPanels}>
      <TabPanel sx={styles.tabPanel}>
        <BotDetail />
      </TabPanel>
      <TabPanel sx={styles.tabPanel}>Integrations</TabPanel>
      <TabPanel sx={styles.tabPanel}>
        <Conversations />
      </TabPanel>
    </TabPanels>
  );
};
