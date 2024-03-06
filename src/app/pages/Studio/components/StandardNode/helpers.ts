import { useAppDispatch } from '@/hooks';
import { openCardTray } from '@/store/studio';

export const usePrepareHook = () => {
  const dispatch = useAppDispatch();

  const handleOpenCardTray = (id: string) => () => {
    dispatch(openCardTray(id));
  };

  return { onOpenCardTray: handleOpenCardTray };
};
