import { Fragment } from 'react';

import { selectPropertiesCard } from '@/store/studio';
import { useAppSelector, useGetCardFields } from '@/hooks';

import { GroupTypeEnum } from '@/enums';
import { FieldComponent } from './components';

export const usePrepareHook = () => {
  // TODO: Upgrade PropertiesPanel slice to not only change based on card
  // but rather almost everything in the studio
  const card = useAppSelector(selectPropertiesCard);

  const { data: cardFields } = useGetCardFields(card?.id);

  const renderHeadingText = () => {
    switch (card?.cardType?.groupType) {
      case GroupTypeEnum.TRANSITION:
        return 'Transition';
      case GroupTypeEnum.CAPTURE_INFO:
        return 'Capture Information';
      case GroupTypeEnum.SEND_MESSAGES:
        return 'Send Message to Chatbot User';
      default:
        return 'Main Workflow Properties';
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
