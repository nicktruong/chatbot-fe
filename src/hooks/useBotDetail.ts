import { useMemo } from 'react';

import { useGetMyBots } from './apiHooks';

export const useBotDetail = (id: string) => {
  const { data: bots } = useGetMyBots();
  const botDetail = useMemo(() => bots?.find(bot => bot.id === id), [id, bots]);

  return botDetail;
};
