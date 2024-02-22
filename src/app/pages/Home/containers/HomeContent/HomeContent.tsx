import { TabPanel, TabPanels } from '@chakra-ui/react';

import { BotDetail } from '../../components/BotDetail';

export const HomeContent = () => {
  return (
    <TabPanels>
      <TabPanel>
        <BotDetail />
      </TabPanel>
      <TabPanel>Integrations</TabPanel>
      <TabPanel>Conversations</TabPanel>
    </TabPanels>
  );
};
