import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocation, useNavigate } from 'react-router';

import { routes } from '@/app/routes';
import { storageKeys } from '@/constants';
import { useLoginMutation } from '@/hooks';

import { messages } from './messages';
import { LoginSchema, type LoginSchemaType } from './schema';

export const usePrepareHook = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { t } = useTranslation(messages.ns);

  const {
    isPending,
    error: serverError,
    mutate,
  } = useLoginMutation({
    onSuccess: ({ data }) => {
      // TODO: Save refreshToken to cookies when implemented corresponding endpoint
      localStorage.setItem(storageKeys.ACCESS_TOKEN, data.accessToken);
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
