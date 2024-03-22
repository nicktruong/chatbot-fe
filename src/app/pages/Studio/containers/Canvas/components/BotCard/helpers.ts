import { MouseEventHandler, useCallback } from 'react';

import {
  useAppDispatch,
  useAppSelector,
  useGetCardFields,
  useSetEdgeByCardOrNodeId,
} from '@/hooks';
import type { IBotCard } from '@/interfaces';
import { selectPropertiesData, setFocus } from '@/store/studio';
import { CardOrNode, CardTypeEnum, FieldTypeEnum } from '@/enums';

export const usePrepareHook = (card: IBotCard) => {
  const dispatch = useAppDispatch();
  const activeCardId = useAppSelector(selectPropertiesData)?.data.id;

  useSetEdgeByCardOrNodeId(card.id, CardOrNode.CARD);
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
        return (
          cardFields?.find(
            field => field.fieldType.type === FieldTypeEnum.MESSAGE_TO_SEND,
          )?.value || card.cardType.name
        );
    }
  }, [cardFields, card.cardType]);

  const handleChangePropertiesPanel: MouseEventHandler = e => {
    e.stopPropagation();
    dispatch(setFocus({ data: card, type: CardOrNode.CARD }));
  };

  return {
    activeCardId,
    label: labelMapping(),
    onCardClick: handleChangePropertiesPanel,
  };
};
