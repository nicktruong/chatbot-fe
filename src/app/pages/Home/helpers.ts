import { selectTabIndex, setTabIndex } from 'store/home';
import { useAppDispatch, useAppSelector } from 'hooks/redux';

export const usePrepareHook = () => {
  const dispatch = useAppDispatch();
  const tabIndex = useAppSelector(selectTabIndex);

  const handleTabsChange = (index: number) => {
    dispatch(setTabIndex(index));
  };

  return { tabIndex, onTabsChange: handleTabsChange };
};
