import { useAppDispatch, useAppSelector } from '@/hooks';
import { closeCardTray, selectCardTrayOpen } from '@/store/studio';

export const usePrepareHook = () => {
  const dispatch = useAppDispatch();

  const cardTrayOpen = useAppSelector(selectCardTrayOpen);

  const handleAddCardToNode = () => {
    dispatch(closeCardTray());
  };

  return { cardTrayOpen, onAddCardToNode: handleAddCardToNode };
};
