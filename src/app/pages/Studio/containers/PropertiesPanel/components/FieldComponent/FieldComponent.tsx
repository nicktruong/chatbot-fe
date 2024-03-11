import { Field } from '@/interfaces';
import { FieldTypeEnum } from '@/enums';

import { usePrepareHook } from './helpers';

import { LabelField, ConditionField } from '..';

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
    default:
      return <></>;
  }
};
