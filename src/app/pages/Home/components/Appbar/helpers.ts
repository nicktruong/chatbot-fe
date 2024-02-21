import { useTranslation } from 'react-i18next';

import { messages } from './messages';

export const usePrepareHook = () => {
  const { t } = useTranslation(messages.ns);

  return { t };
};
