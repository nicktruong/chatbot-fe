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

import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoKeyOutline } from 'react-icons/io5';

import { routes } from 'app/routes';
import { themes } from 'styles/theme/themes';

import { styles } from './styles';
import { messages } from './messages';

export const SignUp = () => {
  const { t } = useTranslation(messages.ns);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.containerBg} />

      <Stack sx={styles.stack}>
        <Heading fontSize="3xl">{t(messages.getStarted)}</Heading>

        <Divider mt={2} mb={3} />

        <InputGroup>
          <InputLeftElement sx={styles.inputIconContainer}>
            <FaUser fill={themes.light.colors.gray[400]} size="1.3rem" />
          </InputLeftElement>
          <Input type="text" sx={styles.input} placeholder={t(messages.name)} />
        </InputGroup>

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
          {t(messages.signUpWithEmail)}
        </Button>

        <Text fontSize="xs" mt={8} textAlign="center">
          {t(messages.alreadyHaveAnAccount)}{' '}
          <Text as={Link} to={routes.login} color="purple" fontWeight={700}>
            {t(messages.login)}
          </Text>
        </Text>
      </Stack>
    </Box>
  );
};
