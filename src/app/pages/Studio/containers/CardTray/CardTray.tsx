import {
  Box,
  Text,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
} from '@chakra-ui/react';
import { MdTextFields } from 'react-icons/md';

import { styles } from './styles';
import { usePrepareHook } from './helpers';

export const CardTray = () => {
  const { cardTrayOpen, onAddCardToNode } = usePrepareHook();

  return (
    <Box sx={styles.container} left={cardTrayOpen ? '0px' : '-500px'}>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem sx={styles.accordionItem}>
          <Box>
            <AccordionButton sx={styles.accordionButton}>
              <AccordionIcon />
              <Box as="span" sx={styles.sendMessages}>
                Send Messages
              </Box>
            </AccordionButton>
          </Box>
          <AccordionPanel padding="2">
            <Box>
              <Box sx={styles.cardType} onClick={onAddCardToNode}>
                <MdTextFields
                  style={{ fontSize: '0.75rem', color: '#008001' }}
                />
                <Text fontSize="xs" fontWeight={500}>
                  Text
                </Text>
              </Box>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
