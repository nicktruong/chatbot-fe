import {
  Box,
  Menu,
  Icon,
  Show,
  Hide,
  Avatar,
  Button,
  Divider,
  TabList,
  MenuItem,
  MenuList,
  MenuButton,
} from '@chakra-ui/react';
import { LuBot } from 'react-icons/lu';
import { PiChats } from 'react-icons/pi';
import { GrIntegration } from 'react-icons/gr';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { HiOutlineMenu, HiOutlineLogout } from 'react-icons/hi';

import { styles } from './styles';
import { messages } from './messages';
import { usePrepareHook } from './helpers';

import { ContentTab } from '../ContentTab';

export const Appbar = () => {
  const { t, onTabsChange } = usePrepareHook();

  return (
    <Box sx={styles.container}>
      <Hide above="md">
        <Icon
          as={HiOutlineMenu}
          sx={styles.menuIcon}
          aria-label="Toggle Menu"
        />
      </Hide>

      <Show breakpoint="(min-width: 540px)">
        <TabList sx={styles.tabList}>
          <ContentTab>{t(messages.details)}</ContentTab>
          <ContentTab>{t(messages.integrations)}</ContentTab>
          <ContentTab>{t(messages.conversations)}</ContentTab>
        </TabList>
      </Show>

      <Box sx={styles.action}>
        <Button
          size="sm"
          colorScheme="blue"
          sx={styles.editBtn}
          rightIcon={<RxOpenInNewWindow />}
        >
          {t(messages.edit)}
        </Button>

        <Divider height="1.75rem" orientation="vertical" />

        <Menu>
          <MenuButton>
            <Avatar name="Dan Abrahmov" size="sm" marginRight="0.5rem" />
          </MenuButton>

          <MenuList>
            {/* TODO: Setup redux slice to change tab content */}
            <Hide breakpoint="(min-width: 540px)">
              <MenuItem
                sx={styles.menuItem}
                onClick={onTabsChange(0)}
                icon={<LuBot fontSize="0.875rem" />}
              >
                {t(messages.details)}
              </MenuItem>

              <MenuItem
                sx={styles.menuItem}
                onClick={onTabsChange(1)}
                icon={
                  <GrIntegration
                    style={{ width: '0.875rem', fontSize: '0.75rem' }}
                  />
                }
              >
                {t(messages.integrations)}
              </MenuItem>

              <MenuItem
                sx={styles.menuItem}
                onClick={onTabsChange(2)}
                icon={<PiChats fontSize="0.875rem" />}
              >
                {t(messages.conversations)}
              </MenuItem>
            </Hide>

            <MenuItem
              sx={{ ...styles.menuItem, ...styles.logout }}
              icon={<HiOutlineLogout fontSize="0.875rem" />}
            >
              {t(messages.logout)}
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};
