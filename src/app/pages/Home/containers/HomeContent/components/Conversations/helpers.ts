import { useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

import type { Message } from '@/interfaces';
import { useBotDetail, useGetMessages } from '@/hooks';

type MessagesGroups = {
  data: {
    [clientId: string]: Message[];
  };
  clientId: string;
  firstMessageAt: string;
};

type FirstMessageAt = {
  [clientId: string]: string;
};

export const usePrepareHook = () => {
  const { id } = useParams();

  const [activeClientId, setActiveClientId] = useState('');

  const botDetail = useBotDetail(id ?? '');

  const { data } = useGetMessages(id ?? '');
  const messages = useMemo(() => data ?? [], [data]);

  const messagesGroups = useMemo(
    () =>
      messages.reduce<{ [key: string]: MessagesGroups }>((acc, message) => {
        acc[message.clientId] ??= {
          data: {},
          clientId: '',
          firstMessageAt: '',
        };
        const messagesOfClient = acc[message.clientId];

        messagesOfClient.clientId = message.clientId;

        if (
          messagesOfClient.firstMessageAt === '' ||
          messagesOfClient.firstMessageAt > message.createdAt
        ) {
          messagesOfClient.firstMessageAt = message.createdAt;
        }

        const date = message.createdAt.split('T')[0];

        messagesOfClient.data[date] ??= [];

        messagesOfClient.data[date].unshift(message);

        return acc;
      }, {}),
    [messages],
  );

  const clientIds = useMemo(
    () => Object.keys(messagesGroups),
    [messagesGroups],
  );

  useEffect(() => {
    if (clientIds.length > 0) {
      setActiveClientId(prev => (prev === '' ? clientIds[0] : prev));
    }
  }, [clientIds]);

  const firstMessagesAt = useMemo(
    () =>
      Object.entries(messagesGroups).reduce<FirstMessageAt>(
        (acc, [clientId, { firstMessageAt }]) => ({
          ...acc,
          [clientId]: firstMessageAt,
        }),
        {},
      ),
    [messagesGroups],
  );

  const handleViewClientMessages = (clientId: string) => {
    setActiveClientId(clientId);
  };

  return {
    botDetail,
    activeClientId,
    messagesGroups,
    firstMessagesAt,
    onViewClientMessages: handleViewClientMessages,
  };
};
