import {
  Box,
  Grid,
  Text,
  Button,
  CardBody,
  GridItem,
  CardFooter,
} from '@chakra-ui/react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

import { formatDate } from '@/utils';
import { NoMessagesIcon } from '@/assets';
import { BlankCard } from '@home/components';

import { styles } from './styles';
import { messages } from './messages';
import { usePrepareHook } from './helpers';

export const BotDetail = () => {
  const { lng, botDetail, isPending, t, onDeleteChatbot } = usePrepareHook();

  return (
    <>
      {!botDetail ? (
        <Box sx={styles.noMessagesContainer}>
          <NoMessagesIcon
            width="320px"
            height="150px"
            style={{ flexShrink: 0 }}
          />
          <Text sx={styles.noMessagesText}>
            {t(messages.thisWorkspaceDoesntHaveChatbotsYet)}
          </Text>
        </Box>
      ) : (
        <Box sx={styles.container}>
          <BlankCard>
            <CardBody padding="6">
              <Grid
                gap={3}
                templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }}
              >
                <GridItem colSpan={{ base: 1, sm: 2 }}>
                  <Box sx={styles.infoHeader}>
                    <Text sx={styles.infoHeaderText}>
                      {t(messages.internalName)}
                    </Text>
                    <BsFillQuestionCircleFill />
                  </Box>
                  <Box>
                    <Text fontSize="sm">{botDetail.name}</Text>
                  </Box>
                </GridItem>

                <GridItem>
                  <Box sx={styles.infoHeader}>
                    <Text sx={styles.infoHeaderText}>
                      {t(messages.created)}
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize="sm">
                      {formatDate(botDetail.createdAt, 'relative', lng)}
                    </Text>
                  </Box>
                </GridItem>

                <GridItem>
                  <Box sx={styles.infoHeader}>
                    <Text sx={styles.infoHeaderText}>
                      {t(messages.lastModified)}
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize="sm">
                      {formatDate(botDetail.updatedAt, 'relative', lng)}
                    </Text>
                  </Box>
                </GridItem>

                <GridItem>
                  <Box sx={styles.infoHeader}>
                    <Text sx={styles.infoHeaderText}>
                      {t(messages.lastPublished)}
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize="sm">
                      {botDetail.publishDate
                        ? formatDate(botDetail.publishDate, 'relative', lng)
                        : t(messages.never)}
                    </Text>
                  </Box>
                </GridItem>
              </Grid>
            </CardBody>
          </BlankCard>

          <BlankCard>
            <CardBody padding="6">
              <Text fontSize="lg" color="red">
                {t(messages.deleteChatbot)}
              </Text>

              <Box marginTop="6">
                <Text fontSize="sm">
                  {t(messages.deleteAChatbotIsAnIrreversibleProcess)}
                </Text>
              </Box>
            </CardBody>
            <CardFooter borderTop="1px" borderColor="gray.200">
              <Button
                variant="outline"
                sx={styles.deleteBtn}
                isLoading={isPending}
                loadingText="Deleting"
                onClick={onDeleteChatbot}
              >
                {t(messages.deleteChatbot)}
              </Button>
            </CardFooter>
          </BlankCard>
        </Box>
      )}
    </>
  );
};
