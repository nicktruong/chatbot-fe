import {
  Box,
  Text,
  Stack,
  Input,
  Alert,
  Button,
  Divider,
  Heading,
  AlertIcon,
  AlertTitle,
  InputGroup,
  FormControl,
  InputLeftElement,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoKeyOutline } from 'react-icons/io5';

import { themes } from '@/styles';
import { routes } from '@/app/routes';

import { styles } from './styles';
import { messages } from './messages';
import { usePrepareHook } from './helpers';

export const SignUp = () => {
  const { errors, isPending, serverError, t, register, onSubmit } =
    usePrepareHook();

  return (
    <Box sx={styles.container}>
      <Box sx={styles.containerBg} />

      <form
        onSubmit={onSubmit}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Stack sx={styles.stack}>
          <Heading fontSize="3xl">{t(messages.getStarted)}</Heading>

          <Divider mt={2} mb={3} />

          {serverError && (
            <Alert status="error" borderRadius="base">
              <AlertIcon />
              {/* TODO: i18n */}
              <AlertTitle>{serverError.response?.data.message}</AlertTitle>
            </Alert>
          )}

          <FormControl isInvalid={!!errors.name}>
            <InputGroup>
              <InputLeftElement sx={styles.inputIconContainer}>
                <FaUser fill={themes.light.colors.gray[400]} size="1.3rem" />
              </InputLeftElement>
              <Input
                type="text"
                sx={styles.input}
                placeholder={t(messages.name)}
                {...register('name')}
              />
            </InputGroup>

            {errors.name && (
              <FormErrorMessage>{errors.name.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <InputGroup>
              <InputLeftElement sx={styles.inputIconContainer}>
                <MdEmail fill={themes.light.colors.gray[400]} size="1.5rem" />
              </InputLeftElement>
              <Input
                type="email"
                sx={styles.input}
                placeholder={t(messages.email)}
                {...register('email')}
              />
            </InputGroup>

            {errors.email && (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <InputGroup>
              <InputLeftElement sx={styles.inputIconContainer}>
                <IoKeyOutline
                  size="1.5rem"
                  color={themes.light.colors.gray[400]}
                />
              </InputLeftElement>
              <Input
                type="password"
                sx={styles.input}
                placeholder={t(messages.password)}
                {...register('password')}
              />
            </InputGroup>

            {errors.password && (
              <FormErrorMessage>{errors.password.message}</FormErrorMessage>
            )}
          </FormControl>

          <Button
            height={12}
            type="submit"
            variant="outline"
            colorScheme="purple"
            isLoading={isPending}
            loadingText="Submitting"
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
      </form>
    </Box>
  );
};
