import {
  Box,
  Text,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
} from '@chakra-ui/react';

import { styles } from './styles';
import { usePrepareHook } from './helpers';

export const CardTray = () => {
  const {
    cardGroups,
    cardTrayOpen,
    onAddCardToNode,
    mapCardTypeToIcon,
    mapGroupTypeToString,
  } = usePrepareHook();

  return (
    <Box sx={styles.container} left={cardTrayOpen ? '100%' : '-100%'}>
      <Accordion defaultIndex={[0]} allowMultiple>
        {Object.entries(cardGroups ?? {})?.map(([groupType, cardTypes]) => (
          <AccordionItem key={groupType} sx={styles.accordionItem}>
            <Box>
              <AccordionButton sx={styles.accordionButton}>
                <AccordionIcon />
                <Box as="span" sx={styles.sendMessages}>
                  {mapGroupTypeToString(groupType)}
                </Box>
              </AccordionButton>
            </Box>
            <AccordionPanel padding="2">
              <Box>
                {cardTypes.map(cardType => (
                  <Box
                    key={cardType.id}
                    sx={styles.cardType}
                    onClick={onAddCardToNode}
                  >
                    {mapCardTypeToIcon(cardType.type)}
                    <Text fontSize="xs" fontWeight={500}>
                      {cardType.name}
                    </Text>
                  </Box>
                ))}
              </Box>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};
