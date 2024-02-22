import { useTranslation } from 'react-i18next';

import { selectUser } from '@/store/user';
import { storageKeys } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setTabIndex, toggleSidebar } from '@/store/home';

import { messages } from './messages';

export const usePrepareHook = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const { t } = useTranslation(messages.ns);

  const handleTabsChange = (index: number) => () => {
    dispatch(setTabIndex(index));
  };

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleLogout = () => {
    // TODO: Remove refreshToken if implemented
    // TODO: Clear redux state if persisted
    localStorage.removeItem(storageKeys.ACCESS_TOKEN);
    localStorage.removeItem(storageKeys.USER);
    window.location.reload();
  };

  return {
    user,
    t,
    onLogout: handleLogout,
    onTabsChange: handleTabsChange,
    onToggleSidebar: handleToggleSidebar,
  };
};
