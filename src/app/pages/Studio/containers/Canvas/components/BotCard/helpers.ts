import {
  useAppDispatch,
  useAppSelector,
  useGetCardFields,
  useSetEdgeByCardOrNodeId,
} from '@/hooks';
import { FieldTypeEnum } from '@/enums';
import { selectPropertiesCardId, setCardId } from '@/store/studio';

export const usePrepareHook = (cardId: string) => {
  const dispatch = useAppDispatch();
  const activeCardId = useAppSelector(selectPropertiesCardId);

  const { data: cardFields } = useGetCardFields(cardId);
  const label = cardFields?.find(
    field => field.fieldType.type === FieldTypeEnum.LABEL,
  )?.value;

  useSetEdgeByCardOrNodeId(cardId, 'card');

  const handleChangePropertiesPanel = () => {
    dispatch(setCardId(cardId));
  };

  return { label, activeCardId, onCardClick: handleChangePropertiesPanel };
};
