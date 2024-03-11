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

  const { mutate } = useCreateCardMutation({
    onSuccess: (_, { nodeId }) => {
      return queryClient.invalidateQueries({
        queryKey: [queryKeys.CARD, nodeId],
      });
    },
  });

  const nodeId = useAppSelector(selectNodeId);
  const cardTrayOpen = useAppSelector(selectCardTrayOpen);

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
    mutate({ cardTypeId: id, nodeId });
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
