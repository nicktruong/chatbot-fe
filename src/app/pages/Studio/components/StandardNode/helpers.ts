import { useAppDispatch } from '@/hooks';
import { openCardTray } from '@/store/studio';

export const usePrepareHook = () => {
  const dispatch = useAppDispatch();

  const handleOpenCardTray = () => {
    dispatch(openCardTray());
  };

  return { onOpenCardTray: handleOpenCardTray };
};
