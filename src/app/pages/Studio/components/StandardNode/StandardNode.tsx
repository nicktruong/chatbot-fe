import { IoIosAdd } from 'react-icons/io';
import { Box, Text } from '@chakra-ui/react';
import { NodeProps, Position } from 'reactflow';

import { Node } from '@/interfaces';

import { styles } from './styles';
import { usePrepareHook } from './helpers';

import { Card } from '../Card';
import { CustomHandle } from '../Handle';

export const StandardNode = ({ data: { id, name } }: NodeProps<Node>) => {
  const { cards, onOpenCardTray } = usePrepareHook(id);

  return (
    <Box>
      <CustomHandle
        type="target"
        position={Position.Left}
        style={{ top: 22, left: -10 }}
      />
      <Box sx={styles.container}>
        <Box sx={styles.nodeName}>{name}</Box>
        <Box sx={styles.nodeBody}>
          {cards?.map(card => <Card key={card.id} card={card} />)}
          <Box sx={styles.addCard} onClick={onOpenCardTray}>
            <IoIosAdd style={{ margin: '0 0.5rem', fontSize: '0.875rem' }} />
            <Text>Add Card</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
