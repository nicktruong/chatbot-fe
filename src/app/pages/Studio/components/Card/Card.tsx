import { Position } from 'reactflow';
import { Box, Text } from '@chakra-ui/react';

import { GroupTypeEnum } from '@/enums';
import { mapCardTypeToIcon } from '@/utils';

import { styles } from './styles';
import { usePrepareHook } from './helpers';
import type { CardProps } from './interfaces';

import { CustomHandle } from '../Handle';

export const Card = ({ card }: CardProps) => {
  usePrepareHook(card.id);

  return (
    <Box key={card.id} sx={styles.card}>
      {mapCardTypeToIcon(card.cardType?.type ?? '')}
      <Text sx={styles.cardContent}>👋 Welcome on **Botpress Studio**!</Text>
      {card.cardType?.groupType === GroupTypeEnum.TRANSITION && (
        <CustomHandle
          id={card.id}
          type="source"
          position={Position.Right}
          style={{ top: card.position * 35 + 65, right: -10 }}
        />
      )}
    </Box>
  );
};
