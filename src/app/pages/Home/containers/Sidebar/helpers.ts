import { useMediaQuery, useTheme } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { selectSidebarOpen, toggleSidebar } from '@/store/home';

export const usePrepareHook = () => {
  const dispatch = useAppDispatch();
  const sidebarOpen = useAppSelector(selectSidebarOpen);

  const theme = useTheme();
  const md = theme.__breakpoints?.asObject.md;
  const [isSmallerThanMd] = useMediaQuery(`(max-width: ${md ?? '48em'})`);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return {
    sidebarOpen,
    isSmallerThanMd,
    onToggleSidebar: handleToggleSidebar,
  };
};
