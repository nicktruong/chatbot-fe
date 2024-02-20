import {
  Box,
  Text,
  Stack,
  Input,
  Button,
  Divider,
  Heading,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { MdEmail } from 'react-icons/md';
import { IoKeyOutline } from 'react-icons/io5';

import { routes } from 'app/routes';
import { themes } from 'styles/theme/themes';

import { styles } from './styles';
import { messages } from './messages';

export const Login = () => {
  const { t } = useTranslation(messages.ns);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.containerBg} />

      <Stack sx={styles.stack}>
        <Heading fontSize="3xl">{t(messages.loginToGoChatbot)}</Heading>

        <Divider mt={2} mb={3} />

        <InputGroup>
          <InputLeftElement sx={styles.inputIconContainer}>
            <MdEmail fill={themes.light.colors.gray[400]} size="1.5rem" />
          </InputLeftElement>
          <Input
            type="email"
            sx={styles.input}
            placeholder={t(messages.email)}
          />
        </InputGroup>

        <InputGroup>
          <InputLeftElement sx={styles.inputIconContainer}>
            <IoKeyOutline color={themes.light.colors.gray[400]} size="1.5rem" />
          </InputLeftElement>
          <Input
            type="password"
            sx={styles.input}
            placeholder={t(messages.password)}
          />
        </InputGroup>

        <Button
          height={12}
          variant="outline"
          colorScheme="purple"
          leftIcon={<MdEmail size="1.5rem" />}
        >
          {t(messages.loginWithEmail)}
        </Button>

        <Text fontSize="xs" mt={8} textAlign="center">
          {t(messages.newToGoChatbot)}{' '}
          <Text as={Link} to={routes.signUp} color="purple" fontWeight={700}>
            {t(messages.signUp)}
          </Text>
        </Text>
      </Stack>
    </Box>
  );
};
