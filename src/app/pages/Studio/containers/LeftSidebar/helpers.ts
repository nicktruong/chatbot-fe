import { ExplorerType } from '../../constants';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { setExplorer, selectCurrentExplorer } from '@/store/studio';

export const usePrepareHook = () => {
  const dispatch = useAppDispatch();
  const currentExplorer = useAppSelector(selectCurrentExplorer);

  const handleToggleExplorer = (newExplorer: ExplorerType) => () => {
    dispatch(setExplorer(currentExplorer === newExplorer ? null : newExplorer));
  };

  const getBtnColor = (explorerType: ExplorerType) => {
    return currentExplorer === explorerType ? 'gray.600' : 'black';
  };

  const getBtnBgColor = (explorerType: ExplorerType) => {
    return currentExplorer === explorerType ? 'gray.200' : 'transparent';
  };

  return {
    getBtnColor,
    getBtnBgColor,
    onToggleExplorer: handleToggleExplorer,
  };
};
