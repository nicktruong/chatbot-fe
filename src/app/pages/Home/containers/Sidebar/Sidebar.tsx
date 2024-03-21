import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
} from '@chakra-ui/react';

import { styles } from './styles';
import { usePrepareHook } from './helpers';

import { SidebarContent } from './components';

export const Sidebar = () => {
  const { sidebarOpen, isSmallerThanMd, onToggleSidebar } = usePrepareHook();

  return !isSmallerThanMd ? (
    <Box sx={styles.container}>
      <Box sx={styles.sidebar}>
        <SidebarContent />
      </Box>
    </Box>
  ) : (
    <Drawer placement="left" isOpen={sidebarOpen} onClose={onToggleSidebar}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody marginTop="10">
          <SidebarContent />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
