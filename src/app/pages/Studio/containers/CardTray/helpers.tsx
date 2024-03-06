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
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [queryKeys.NODE] });
    },
  });

  const nodeId = useAppSelector(selectNodeId);
  const cardTrayOpen = useAppSelector(selectCardTrayOpen);

  const { data } = useGetCardTypes();
  const cardTypes = data?.data;
  const cardGroups = cardTypes?.reduce(
    (acc, curr) => {
      acc[curr.groupType] ??= [];
      acc[curr.groupType].push(curr);
      return acc;
    },
    {} as Record<GroupTypeEnum, CardType[]>,
  );

  const handleAddCardToNode = (id: string) => () => {
    dispatch(closeCardTray());
    mutate({ cardTypeId: id, nodeId });
  };

  const mapGroupTypeToString = (groupType: string) => {
    switch (groupType) {
      case GroupTypeEnum.TRANSITION:
        return 'Flow Logic';
    }
  };

  return {
    cardGroups,
    cardTrayOpen,
    mapGroupTypeToString,
    onAddCardToNode: handleAddCardToNode,
  };
};
