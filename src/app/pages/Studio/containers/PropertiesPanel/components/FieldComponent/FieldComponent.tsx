import { Field } from '@/interfaces';
import { FieldTypeEnum } from '@/enums';

import {
  LabelField,
  MessageField,
  QuestionField,
  ConditionField,
  StoreResultField,
} from '..';

import { FieldProvider } from '../../contexts';

export const FieldComponent = ({ field }: { field: Field }) => {
  const renderField = () => {
    // Note: You may notice that all the following components only differ in the label
    // but all of these may have different implementations in the future
    // E.g. StoreResultField maybe a select, LabelField may have additional logic,...
    switch (field.fieldType.type) {
      case FieldTypeEnum.LABEL:
        return <LabelField />;
      case FieldTypeEnum.CONDITION:
        return <ConditionField />;
      case FieldTypeEnum.QUESTION:
        return <QuestionField />;
      case FieldTypeEnum.STORE_RESULT_IN:
        return <StoreResultField />;
      case FieldTypeEnum.MESSAGE_TO_SEND:
        return <MessageField />;
    }
  };

  return <FieldProvider field={field}>{renderField()}</FieldProvider>;
};
