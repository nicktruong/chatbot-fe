import { useTranslation } from 'react-i18next';

import { setTabIndex } from 'store/home';
import { useAppDispatch } from 'hooks/redux';

import { messages } from './messages';

export const usePrepareHook = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(messages.ns);

  const handleTabsChange = (index: number) => () => {
    dispatch(setTabIndex(index));
  };

  return { t, onTabsChange: handleTabsChange };
};
