import { TbArrowMoveRight } from 'react-icons/tb';

import { CardType } from '@/interfaces';
import { CardTypeEnum, GroupTypeEnum } from '@/enums';
import { closeCardTray, selectCardTrayOpen } from '@/store/studio';
import { useAppDispatch, useAppSelector, useGetCardTypes } from '@/hooks';

export const usePrepareHook = () => {
  const dispatch = useAppDispatch();

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

  const handleAddCardToNode = () => {
    dispatch(closeCardTray());
  };

  const mapGroupTypeToString = (groupType: string) => {
    switch (groupType) {
      case GroupTypeEnum.TRANSITION:
        return 'Flow Logic';
    }
  };

  const mapCardTypeToIcon = (cardType: string) => {
    switch (cardType) {
      case CardTypeEnum.EXPRESSION:
        return <TbArrowMoveRight style={{ color: '#008001', width: '1rem' }} />;
      default:
        break;
    }
  };

  return {
    cardGroups,
    cardTrayOpen,
    mapCardTypeToIcon,
    mapGroupTypeToString,
    onAddCardToNode: handleAddCardToNode,
  };
};
