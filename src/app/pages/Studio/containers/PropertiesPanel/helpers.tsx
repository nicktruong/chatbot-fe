import { Fragment } from 'react';

import { selectPropertiesCard } from '@/store/studio';
import { useAppSelector, useGetCardFields } from '@/hooks';

import { GroupTypeEnum } from '@/enums';
import { FieldComponent } from './components';

export const usePrepareHook = () => {
  const card = useAppSelector(selectPropertiesCard);

  const { data: cardFields } = useGetCardFields(card?.id);

  const renderHeadingText = () => {
    switch (card?.cardType?.groupType) {
      case GroupTypeEnum.TRANSITION:
        return 'Transition';
      case GroupTypeEnum.CAPTURE_INFO:
        return 'Capture Information';
    }
  };

  const renderFields = () => {
    return cardFields?.map(field => (
      <Fragment key={field.id}>
        <FieldComponent field={field} />
      </Fragment>
    ));
  };

  return { renderFields, renderHeadingText };
};
