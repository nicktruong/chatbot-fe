import { useQueryClient } from '@tanstack/react-query';
import { useState, createContext, ChangeEventHandler, useEffect } from 'react';

import { queryKeys } from '@/constants';
import { useUpdateFieldMutation } from '@/hooks';

import type { FieldProviderProps, IFieldContext } from './interfaces';

export const FieldContext = createContext<IFieldContext>({
  value: '',
  onInputChange: () => {},
  onUpdateField: () => {},
});

export const FieldProvider = ({ field, children }: FieldProviderProps) => {
  const queryClient = useQueryClient();

  const [value, setValue] = useState('');

  const { mutate } = useUpdateFieldMutation({
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [queryKeys.FIELD, field.cardId],
      }),
  });

  useEffect(() => {
    // If current input value is empty && there is value fetched from server for this field => update input to have field.value
    setValue(prevValue =>
      prevValue === '' && field.value ? field.value : prevValue,
    );
  }, [field.value]);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value);
  };

  const handleUpdateField = (value: string) => {
    mutate({ fieldId: field.id, value });
  };

  return (
    <FieldContext.Provider
      value={{
        value,
        onInputChange: handleInputChange,
        onUpdateField: handleUpdateField,
      }}
    >
      {children}
    </FieldContext.Provider>
  );
};
