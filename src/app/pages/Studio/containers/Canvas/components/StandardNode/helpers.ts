import { useMutationState } from '@tanstack/react-query';

import {
  useGetCards,
  useAppDispatch,
  useAppSelector,
  useGetCardTypes,
  useSetEdgeByCardOrNodeId,
} from '@/hooks';
import { queryKeys } from '@/constants';
import type { CreateCard, IBotCard } from '@/interfaces';
import { CardOrNode, CardTypeEnum, GroupTypeEnum } from '@/enums';
import { openCardTray, selectPropertiesData } from '@/store/studio';

export const usePrepareHook = (id: string) => {
  const dispatch = useAppDispatch();
  const isActiveNode = useAppSelector(selectPropertiesData)?.data.id === id;

  const { data: cardTypes } = useGetCardTypes();

  const handleOpenCardTray = () => {
    dispatch(openCardTray(id));
  };

  const cardsToBeCreated = useMutationState<CreateCard>({
    select: mutation => mutation.state.variables as CreateCard,
    filters: { mutationKey: [queryKeys.CREATE_CARD, id], status: 'pending' },
  });

  const cardsToBeDeleted = useMutationState<string>({
    select: mutation => mutation.state.variables as string,
    filters: { mutationKey: [queryKeys.DELETE_CARD, id], status: 'pending' },
  });

  useSetEdgeByCardOrNodeId(id, CardOrNode.NODE);
  const { data } = useGetCards(id);

  const cards = data?.filter(card => !cardsToBeDeleted.includes(card.id));

  const newDate = new Date().toISOString();
  const optimisticCards: IBotCard[] = [
    ...(cards ?? []),
    ...cardsToBeCreated
      .filter(card => !cardsToBeDeleted.includes(card.id))
      .map(card => {
        const cardType = cardTypes?.find(type => type.id === card.cardTypeId);

        return {
          id: card.id,
          cardType: {
            name: cardType?.name ?? '',
            desc: cardType?.desc ?? '',
            type: cardType?.type ?? CardTypeEnum.DEFAULT,
            groupType: cardType?.groupType ?? GroupTypeEnum.DEFAULT,
          },
          createdAt: newDate,
          updatedAt: newDate,
          cardTypeId: card.cardTypeId,
          position: cards?.at(-1)?.position ?? 0,
        } as IBotCard;
      }),
  ];

  return {
    isActiveNode,
    cards: optimisticCards,
    onOpenCardTray: handleOpenCardTray,
  };
};
