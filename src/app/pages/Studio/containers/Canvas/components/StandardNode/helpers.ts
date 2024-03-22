import { v4 as uuidv4 } from 'uuid';
import { useMutationState } from '@tanstack/react-query';

import {
  useGetCards,
  useAppDispatch,
  useAppSelector,
  useSetEdgeByCardOrNodeId,
} from '@/hooks';
import { CardOrNode } from '@/enums';
import { queryKeys } from '@/constants';
import type { CreateCard, IBotCard } from '@/interfaces';
import { openCardTray, selectPropertiesData } from '@/store/studio';

export const usePrepareHook = (id: string) => {
  const dispatch = useAppDispatch();
  const isActiveNode = useAppSelector(selectPropertiesData)?.data.id === id;

  const handleOpenCardTray = () => {
    dispatch(openCardTray(id));
  };

  const cardsToBeCreated = useMutationState<CreateCard>({
    select: mutation => mutation.state.variables as CreateCard,
    filters: { mutationKey: [queryKeys.CREATE_CARD, id], status: 'pending' },
  });

  useSetEdgeByCardOrNodeId(id, CardOrNode.NODE);
  const { data: cards } = useGetCards(id);

  const newDate = new Date().toISOString();
  const optimisticCards: IBotCard[] = [
    ...(cards ?? []),
    ...cardsToBeCreated.map(card => ({
      id: uuidv4(),
      createdAt: newDate,
      updatedAt: newDate,
      cardTypeId: card.cardTypeId,
      position: cards?.at(-1)?.position ?? 0,
    })),
  ];

  return {
    isActiveNode,
    cards: optimisticCards,
    onOpenCardTray: handleOpenCardTray,
  };
};
