import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { routes } from '@/app/routes';
import { useSignUpMutation } from '@/hooks';

import { messages } from './messages';
import { SignUpSchema } from './schema';

import type { SignUpSchemaType } from './schema';

export const usePrepareHook = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(messages.ns);

  const {
    isPending,
    error: serverError,
    mutate,
  } = useSignUpMutation({
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
