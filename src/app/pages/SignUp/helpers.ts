import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';

import { routes } from 'app/routes';
import { axiosClient } from 'apis/axios';
import { queryKeys } from 'constants/queryKeys';

import { messages } from './messages';
import { SignUpSchema } from './schema';

import type { AxiosError } from 'axios';
import type { SignUpSchemaType } from './schema';

export const usePrepareHook = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(messages.ns);

  const {
    isPending,
    error: serverError,
    mutate,
  } = useMutation<unknown, AxiosError<{ message: string }>, SignUpSchemaType>({
    mutationKey: [queryKeys.SIGN_UP],
    mutationFn: registerData => axiosClient.post('/register', registerData),
    onSuccess: () => {
      navigate(routes.login, { state: { prevRoute: routes.signUp } });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: { role: 'CUSTOMER', name: '', email: '', password: '' },
  });

  const onSubmit = handleSubmit(data => {
    mutate(data);
  });

  return { errors, isPending, serverError, t, register, onSubmit };
};
