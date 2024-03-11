import type { Base } from '.';

import type { FieldType } from './FieldType';

export interface Field extends Base {
  value: string;
  cardId: string;
  fieldTypeId: string;

  fieldType: FieldType;
}

export interface UpdateField {
  value: string;
  fieldId: string;
}
