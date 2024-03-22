import { CardOrNode } from '@/enums';
import { openCardTray } from '@/store/studio';
import { useAppDispatch, useGetCards, useSetEdgeByCardOrNodeId } from '@/hooks';

export const usePrepareHook = (id: string) => {
  const dispatch = useAppDispatch();

  const handleOpenCardTray = () => {
    dispatch(openCardTray(id));
  };

  useSetEdgeByCardOrNodeId(id, CardOrNode.NODE);
  const { data: cards } = useGetCards(id);

  return { cards, onOpenCardTray: handleOpenCardTray };
};
