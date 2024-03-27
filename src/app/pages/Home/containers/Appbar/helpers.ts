import { useTranslation } from 'react-i18next';
import { generatePath, useNavigate, useParams } from 'react-router-dom';

import {
  useGetMe,
  useGetMyBots,
  useAppDispatch,
  useLogoutMutation,
} from '@/hooks';
import { routes } from '@/app/routes';
import { SettingsManager } from '@/utils';
import { StorageKeys, FlowTypeEnum } from '@/enums';
import { setTabIndex, toggleSidebar } from '@/store/home';

import { messages } from './messages';

const settingsManager = SettingsManager.getInstance();

export const usePrepareHook = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const { t } = useTranslation(messages.ns);

  const { data: user } = useGetMe();
  const { data: botsData } = useGetMyBots();
  const hasBot = !!botsData?.length;

  const { mutate } = useLogoutMutation({
    onSuccess: () => {
      settingsManager.removeItem(StorageKeys.ACCESS_TOKEN);
      settingsManager.removeItem(StorageKeys.REFRESH_TOKEN);
      window.location.reload();
    },
  });

  const handleTabsChange = (index: number) => () => {
    dispatch(setTabIndex(index));
  };

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleLogout = () => {
    // TODO: Remove refreshToken if implemented
    // TODO: Clear redux state if persisted
    mutate();
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
