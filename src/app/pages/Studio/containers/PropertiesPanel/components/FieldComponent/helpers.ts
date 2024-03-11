import { ChangeEventHandler, useEffect, useState } from 'react';

import { Field } from '@/interfaces';
import { useUpdateFieldMutation } from '@/hooks';

export const usePrepareHook = ({ id, cardId, value }: Field) => {
  const [input, setInput] = useState('');

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input === '' && value) setInput(value);
  }, [value, input]);

  const { mutate } = useUpdateFieldMutation({});

  const handleUpdateField = (value: string) => {
    mutate({ fieldId: id, value });
  };

  return {
    input,
    onInputChange: handleInputChange,
    onUpdateField: handleUpdateField,
  };
};
