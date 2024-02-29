import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { routes } from '@/app/routes';
import { storageKeys } from '@/constants';
import { setTabIndex, toggleSidebar } from '@/store/home';
import { useAppDispatch, useGetMe, useGetMyBots } from '@/hooks';

import { messages } from './messages';

export const usePrepareHook = () => {
  const { data } = useGetMe();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation(messages.ns);
  const { data: botsData } = useGetMyBots();
  const hasBot = !!botsData?.data.length;

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

  const handleNavigateToStudio = () => {
    navigate(routes.studio);
  };

  return {
    hasBot,
    user: data?.data,
    t,
    onLogout: handleLogout,
    onTabsChange: handleTabsChange,
    onToggleSidebar: handleToggleSidebar,
    onNavigateToStudio: handleNavigateToStudio,
  };
};
