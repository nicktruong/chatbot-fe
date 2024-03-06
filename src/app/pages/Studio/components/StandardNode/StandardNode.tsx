import { IoIosAdd } from 'react-icons/io';
import { Box, Text } from '@chakra-ui/react';
import { NodeProps, Position } from 'reactflow';

import { Node } from '@/interfaces';
import { mapCardTypeToIcon } from '@/utils';

import { styles } from './styles';
import { usePrepareHook } from './helpers';

import { CustomHandle } from '../Handle';

export const StandardNode = ({
  data: { id, name, cards },
}: NodeProps<Node>) => {
  const { onOpenCardTray } = usePrepareHook();

  return (
    <Box>
      <CustomHandle position={Position.Top} type="target" />
      <Box sx={styles.container}>
        <Box sx={styles.nodeName}>{name}</Box>
        <Box sx={styles.nodeBody}>
          {cards.map(card => (
            <Box key={card.id} sx={styles.card}>
              {mapCardTypeToIcon(card.cardType?.type ?? '')}
              <Text sx={styles.cardContent}>
                👋 Welcome on **Botpress Studio**!
              </Text>
            </Box>
          ))}
          <Box sx={styles.addCard} onClick={onOpenCardTray(id)}>
            <IoIosAdd style={{ margin: '0 0.5rem', fontSize: '0.875rem' }} />
            <Text>Add Card</Text>
          </Box>
        </Box>
      </Box>
      <CustomHandle position={Position.Right} type="source" />
    </Box>
  );
};
