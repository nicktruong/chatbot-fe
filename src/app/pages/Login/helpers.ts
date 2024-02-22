import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocation, useNavigate } from 'react-router';

import { routes } from 'app/routes';
import { axiosClient } from 'apis/axios';
import { queryKeys } from 'constants/queryKeys';

import { messages } from './messages';
import { LoginSchema } from './schema';

import type { LoginSchemaType } from './schema';
import type { LoginResponse } from './interfaces';
import type { AxiosError, AxiosResponse } from 'axios';

export const usePrepareHook = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { t } = useTranslation(messages.ns);

  const {
    isPending,
    error: serverError,
    mutate,
  } = useMutation<
    AxiosResponse<LoginResponse>,
    AxiosError<{ message: string }>,
    LoginSchemaType
  >({
    mutationKey: [queryKeys.LOGIN],
    mutationFn: registerData => axiosClient.post('/login', registerData),
    onSuccess: ({ data }) => {
      // TODO: Dispatch data.userInfo to redux
      // TODO: Save refreshToken to cookies when implemented corresponding endpoint
      localStorage.setItem('accessToken', data.accessToken);
      navigate(routes.home);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { role: 'CUSTOMER', email: '', password: '' },
  });

  const onSubmit = handleSubmit(data => {
    mutate(data);
  });

  return {
    errors,
    isPending,
    serverError,
    prevRoute: (state?.prevRoute ?? '') as string,
    t,
    register,
    onSubmit,
  };
};
