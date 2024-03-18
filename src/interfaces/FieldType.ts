import type { Base } from '.';

import type { FieldTypeEnum } from '@/enums';

export interface FieldType extends Base {
  question: string;
  type: FieldTypeEnum;
}
