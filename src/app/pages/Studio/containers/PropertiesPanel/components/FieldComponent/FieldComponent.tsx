import { Field } from '@/interfaces';
import { FieldTypeEnum } from '@/enums';

import { usePrepareHook } from './helpers';

import {
  LabelField,
  MessageField,
  QuestionField,
  ConditionField,
  StoreResultField,
} from '..';

export const FieldComponent = ({ field }: { field: Field }) => {
  const { input, onInputChange, onUpdateField } = usePrepareHook(field);

  switch (field.fieldType.type) {
    case FieldTypeEnum.LABEL:
      return (
        <LabelField
          value={input}
          onChange={onInputChange}
          onUpdateField={onUpdateField}
        />
      );
    case FieldTypeEnum.CONDITION:
      return (
        <ConditionField
          value={input}
          onChange={onInputChange}
          onUpdateField={onUpdateField}
        />
      );
    case FieldTypeEnum.NUMBER_QUESTION:
      return (
        <QuestionField
          value={input}
          onChange={onInputChange}
          onUpdateField={onUpdateField}
        />
      );
    case FieldTypeEnum.STORE_RESULT_IN:
      return (
        <StoreResultField
          value={input}
          onChange={onInputChange}
          onUpdateField={onUpdateField}
        />
      );
    case FieldTypeEnum.MESSAGE_TO_SEND:
      return (
        <MessageField
          value={input}
          onChange={onInputChange}
          onUpdateField={onUpdateField}
        />
      );
    default:
      return <></>;
  }
};
