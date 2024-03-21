import { openCardTray } from '@/store/studio';
import { useAppDispatch, useGetCards } from '@/hooks';

export const usePrepareHook = (id: string) => {
  const dispatch = useAppDispatch();

  const handleOpenCardTray = () => {
    dispatch(openCardTray(id));
  };

  const { data: cards } = useGetCards(id);

  return { cards, onOpenCardTray: handleOpenCardTray };
};
