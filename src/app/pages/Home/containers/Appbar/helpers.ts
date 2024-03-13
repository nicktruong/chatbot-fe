import { useTranslation } from 'react-i18next';
import { generatePath, useNavigate, useParams } from 'react-router-dom';

import { routes } from '@/app/routes';
import { FlowTypeEnum } from '@/enums';
import { storageKeys } from '@/constants';
import { setTabIndex, toggleSidebar } from '@/store/home';
import { useAppDispatch, useGetMe, useGetMyBots } from '@/hooks';

import { messages } from './messages';

export const usePrepareHook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data: user } = useGetMe();
  const { t } = useTranslation(messages.ns);
  const { data: botsData } = useGetMyBots();
  const hasBot = !!botsData?.length;

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
    window.location.reload();
  };

  const handleNavigateToStudio = () => {
    navigate(
      generatePath(routes.studio, {
        id,
        flow: FlowTypeEnum.MAIN.toLowerCase(),
      }),
    );
  };

  return {
    user,
    hasBot,
    t,
    onLogout: handleLogout,
    onTabsChange: handleTabsChange,
    onToggleSidebar: handleToggleSidebar,
    onNavigateToStudio: handleNavigateToStudio,
  };
};
