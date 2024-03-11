import { useQueryClient } from '@tanstack/react-query';
import { ChangeEventHandler, useEffect, useState } from 'react';

import { Field } from '@/interfaces';
import { queryKeys } from '@/constants';
import { useUpdateFieldMutation } from '@/hooks';

export const usePrepareHook = ({ id, cardId, value }: Field) => {
  const queryClient = useQueryClient();
  const [input, setInput] = useState('');

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input === '' && value) setInput(value);
  }, [value, input]);

  const { mutate } = useUpdateFieldMutation({
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [queryKeys.FIELD, cardId] }),
  });

  const handleUpdateField = (value: string) => {
    mutate({ fieldId: id, value });
  };

  return {
    input,
    onInputChange: handleInputChange,
    onUpdateField: handleUpdateField,
  };
};
