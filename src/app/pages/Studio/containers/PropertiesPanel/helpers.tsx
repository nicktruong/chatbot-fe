import { Fragment } from 'react';

import { selectPropertiesCardId } from '@/store/studio';
import { useAppSelector, useGetCardFields } from '@/hooks';

import { FieldComponent } from './components';

export const usePrepareHook = () => {
  const cardId = useAppSelector(selectPropertiesCardId);

  const { data: cardFields } = useGetCardFields(cardId);

  const renderFields = () => {
    return cardFields?.map(field => (
      <Fragment key={field.id}>
        <FieldComponent field={field} />
      </Fragment>
    ));
  };

  return { renderFields };
};
