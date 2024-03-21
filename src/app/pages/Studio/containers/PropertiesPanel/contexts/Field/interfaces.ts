import type { ChangeEventHandler, PropsWithChildren } from 'react';

import type { Field } from '@/interfaces';

export interface IFieldContext {
  value: string;
  onUpdateField: (value: string) => void;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
}

export interface FieldProviderProps extends PropsWithChildren {
  field: Field;
}
