import { FormControl, FormLabel, Input } from '@chakra-ui/react';

import { styles } from '../../styles';
import { FieldComponentProps } from '../FieldComponent';

export const MessageField = ({
  value,
  onChange,
  onUpdateField,
}: FieldComponentProps) => {
  return (
    <FormControl sx={styles.fields}>
      <FormLabel sx={styles.labelField}>Message to send</FormLabel>
      <Input
        value={value}
        onChange={onChange}
        sx={styles.studioInput}
        onBlur={e => onUpdateField(e.target.value)}
        onKeyDown={e =>
          e.key === 'Enter' &&
          onUpdateField((e.target as HTMLInputElement).value)
        }
      />
    </FormControl>
  );
};
