import { useCallback } from 'react';

import {
  useAppDispatch,
  useAppSelector,
  useGetCardFields,
  useSetEdgeByCardOrNodeId,
} from '@/hooks';
import type { IBotCard } from '@/interfaces';
import { CardTypeEnum, FieldTypeEnum } from '@/enums';
import { selectPropertiesCard, setCard } from '@/store/studio';

export const usePrepareHook = (card: IBotCard) => {
  const dispatch = useAppDispatch();
  const activeCardId = useAppSelector(selectPropertiesCard)?.id;

  useSetEdgeByCardOrNodeId(card.id, 'card');
  const { data: cardFields } = useGetCardFields(card.id);

  const labelMapping = useCallback(() => {
    switch (card.cardType?.type) {
      case CardTypeEnum.EXPRESSION:
        return (
          cardFields?.find(
            field => field.fieldType.type === FieldTypeEnum.LABEL,
          )?.value || 'never'
        );
      case CardTypeEnum.NUMBER:
        return card.cardType.name;
      case CardTypeEnum.TEXT:
        return card.cardType.name;
    }
  }, [cardFields, card.cardType]);

  const handleChangePropertiesPanel = () => {
    dispatch(setCard(card));
  };

  return {
    activeCardId,
    label: labelMapping(),
    onCardClick: handleChangePropertiesPanel,
  };
};
