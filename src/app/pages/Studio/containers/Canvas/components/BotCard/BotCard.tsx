import { Position } from 'reactflow';
import { Box, Text } from '@chakra-ui/react';

import { GroupTypeEnum } from '@/enums';
import { renderCardTypeToIcon } from '@/utils';

import { styles } from './styles';
import { usePrepareHook } from './helpers';
import type { BotCardProps } from './interfaces';

import { CustomHandle } from '../Handle';

export const BotCard = ({ card }: BotCardProps) => {
  const { label, activeCardId, onCardClick } = usePrepareHook(card);

  return (
    <Box
      key={card.id}
      sx={styles.card}
      onClick={onCardClick}
      outline={activeCardId === card.id ? '1.5px solid' : 'none'}
      outlineColor={activeCardId === card.id ? 'blue.700' : ''}
    >
      {renderCardTypeToIcon(card.cardType?.type ?? '')}
      <Text sx={styles.cardContent}>{label}</Text>
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
