import { IoIosAdd } from 'react-icons/io';
import { Box, Text } from '@chakra-ui/react';
import { NodeProps, Position } from 'reactflow';

import { Node } from '@/interfaces';

import { styles } from './styles';
import { usePrepareHook } from './helpers';

import { BotCard } from '../BotCard';
import { CustomHandle } from '../Handle';

export const StandardNode = ({ data: { id, name } }: NodeProps<Node>) => {
  const { cards, isActiveNode, onOpenCardTray } = usePrepareHook(id);

  return (
    <Box>
      <CustomHandle
        type="target"
        position={Position.Left}
        style={{ top: 22, left: -10 }}
      />
      <Box
        sx={{
          ...styles.container,
          outlineColor: isActiveNode
            ? 'blue.700'
            : styles.container.outlineColor,
        }}
      >
        <Box sx={styles.nodeName}>{name}</Box>
        <Box sx={styles.nodeBody}>
          {cards?.map(card => <BotCard key={card.id} card={card} />)}
          <Box sx={styles.addCard} onClick={onOpenCardTray}>
            <IoIosAdd style={{ margin: '0 0.5rem', fontSize: '0.875rem' }} />
            <Text>Add Card</Text>
          </Box>
        </Box>
      </Box>
      <CustomHandle
        id={id}
        type="source"
        position={Position.Right}
        style={{ top: 'unset', bottom: 22, right: -10 }}
      />
    </Box>
  );
};
