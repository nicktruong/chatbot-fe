import { Fragment } from 'react';
import { Text } from '@chakra-ui/react';

import { selectPropertiesData } from '@/store/studio';
import { useAppSelector, useGetCardFields } from '@/hooks';
import { CardOrNode, GroupTypeEnum, NodeTypeEnum } from '@/enums';

import { styles } from './styles';
import { FieldComponent } from './components';

export const usePrepareHook = () => {
  // TODO: Upgrade PropertiesPanel slice to not only change based on card
  // but rather almost everything in the studio
  const data = useAppSelector(selectPropertiesData);

  const { data: cardFields } = useGetCardFields(data?.data.id);

  const renderHeadingText = () => {
    switch (data?.type) {
      case CardOrNode.NODE:
        switch (data?.data?.nodeType?.type) {
          case NodeTypeEnum.START:
            return 'Start';
          case NodeTypeEnum.CUSTOM:
            return data.data.name;
          case NodeTypeEnum.END:
            return 'End';
        }

        break;

      case CardOrNode.CARD:
        switch (data?.data?.cardType?.groupType) {
          case GroupTypeEnum.TRANSITION:
            return 'Transition';
          case GroupTypeEnum.CAPTURE_INFO:
            return 'Capture Information';
          case GroupTypeEnum.SEND_MESSAGES:
            return 'Send Message to Chatbot User';
        }

        break;

      default:
        return 'Main Workflow Properties';
    }
  };

  const renderFields = () => {
    if (data?.type === CardOrNode.NODE) {
      return <Text sx={styles.desc}>{data.data.nodeType?.desc}</Text>;
    }

    return cardFields?.map(field => (
      <Fragment key={field.id}>
        <FieldComponent field={field} />
      </Fragment>
    ));
  };

  return { renderFields, renderHeadingText };
};
