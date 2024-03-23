import { Fragment } from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { Box, CardBody, CardHeader, Stack, Text } from '@chakra-ui/react';

import { colors } from '@/styles';
import { BlankCard } from '@home/components';
import { sortDate, formatDate, capFirstChar } from '@/utils';

import { styles } from './styles';
import { usePrepareHook } from './helpers';

import { ChatBubble } from '../ChatBubble';

export const Conversations = () => {
  const {
    botDetail,
    activeClientId,
    messagesGroups,
    firstMessagesAt,
    onViewClientMessages,
  } = usePrepareHook();

  return (
    <Box sx={styles.container}>
      <BlankCard sx={styles.clients}>
        <Text sx={styles.conversationsHeading}>Conversations</Text>
        <Box sx={styles.conversationsClients}>
          {Object.entries(firstMessagesAt)
            .sort(([, date1], [, date2]) => sortDate(date1, date2, 'desc'))
            .map(([clientId, firstMessageAt]) => (
              <Box
                key={clientId}
                sx={styles.client}
                backgroundColor={
                  activeClientId === clientId ? 'gray.100' : 'transparent'
                }
                onClick={() => onViewClientMessages(clientId)}
              >
                <Text sx={styles.clientName}>Webchat</Text>
                <Text sx={styles.lastMessage}>
                  {capFirstChar(formatDate(firstMessageAt, 'relative') ?? '')}
                </Text>
              </Box>
            ))}
        </Box>
      </BlankCard>
      <BlankCard sx={styles.card}>
        <CardHeader sx={styles.cardHeader}>
          <Stack direction="row" spacing={2} alignItems="center">
            <HiOutlineUserCircle
              fontSize="32px"
              color={colors.homeLight.gray[500]}
            />
            <Text>Webchat user</Text>
          </Stack>

          <Text>
            {capFirstChar(
              formatDate(firstMessagesAt[activeClientId], 'relative') ?? '',
            )}
          </Text>
        </CardHeader>
        <CardBody sx={styles.cardBody}>
          <Stack spacing={2}>
            {Object.entries(messagesGroups[activeClientId]?.data ?? {})
              .sort(([date1], [date2]) => sortDate(date1, date2))
              .map(([date, messages]) => (
                <Fragment key={date}>
                  <Text sx={styles.date}>{formatDate(date)}</Text>

                  {messages.map(message => {
                    return (
                      <ChatBubble
                        key={message.id}
                        perspective={
                          message.sender === botDetail?.id ? 'bot' : 'user'
                        }
                      >
                        {message.value}
                      </ChatBubble>
                    );
                  })}
                </Fragment>
              ))}
          </Stack>
        </CardBody>
      </BlankCard>
    </Box>
  );
};
