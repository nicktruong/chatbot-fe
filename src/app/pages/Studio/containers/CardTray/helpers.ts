import { v4 as uuidv4 } from 'uuid';
import { useQueryClient } from '@tanstack/react-query';

import {
  useAppDispatch,
  useAppSelector,
  useGetCardTypes,
  useCreateCardMutation,
} from '@/hooks';
import {
  selectNodeId,
  closeCardTray,
  selectCardTrayOpen,
} from '@/store/studio';
import { CardType } from '@/interfaces';
import { queryKeys } from '@/constants';
import { GroupTypeEnum } from '@/enums';

export const usePrepareHook = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const nodeId = useAppSelector(selectNodeId);
  const cardTrayOpen = useAppSelector(selectCardTrayOpen);

  const { mutate } = useCreateCardMutation({
    mutationKey: [nodeId],
    onSuccess: (_, { nodeId }) => {
      return queryClient.invalidateQueries({
        queryKey: [queryKeys.CARD, nodeId],
      });
    },
  });

  const { data: cardTypes } = useGetCardTypes();
  const cardGroups = Object.entries(
    cardTypes?.reduce(
      (acc, curr) => {
        acc[curr.groupType] ??= [];
        acc[curr.groupType].push(curr);
        return acc;
      },
      {} as Record<GroupTypeEnum, CardType[]>,
    ) ?? {},
  );

  const handleAddCardToNode = (id: string) => () => {
    dispatch(closeCardTray());
    mutate({ id: uuidv4(), cardTypeId: id, nodeId });
  };

  const mapGroupTypeToString = (groupType: string) => {
    switch (groupType) {
      case GroupTypeEnum.TRANSITION:
        return 'Flow Logic';
      case GroupTypeEnum.CAPTURE_INFO:
        return 'Capture Information';
      case GroupTypeEnum.SEND_MESSAGES:
        return 'Send Messages';
    }
  };

  return {
    cardGroups,
    cardTrayOpen,
    mapGroupTypeToString,
    onAddCardToNode: handleAddCardToNode,
  };
};
