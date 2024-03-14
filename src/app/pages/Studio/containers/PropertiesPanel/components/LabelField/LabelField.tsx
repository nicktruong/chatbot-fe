import { FormControl, FormLabel, Input } from '@chakra-ui/react';

import { styles } from '../../styles';
import type { FieldComponentProps } from '../FieldComponent';

export const LabelField = ({
  value,
  onChange,
  onUpdateField,
}: FieldComponentProps) => {
  return (
    <FormControl sx={styles.fields}>
      <FormLabel sx={styles.labelField}>Label</FormLabel>
      <Input
        value={value}
        sx={styles.studioInput}
        onChange={onChange}
        onBlur={e => onUpdateField(e.target.value)}
        onKeyDown={e =>
          e.key === 'Enter' &&
          onUpdateField((e.target as HTMLInputElement).value)
        }
      />
    </FormControl>
  );
};
