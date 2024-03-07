import { openCardTray } from '@/store/studio';
import { useAppDispatch, useGetCards } from '@/hooks';

export const usePrepareHook = (id: string) => {
  const dispatch = useAppDispatch();

  const handleOpenCardTray = () => {
    dispatch(openCardTray(id));
  };

  const { data } = useGetCards(id);

  return { cards: data?.data, onOpenCardTray: handleOpenCardTray };
};
