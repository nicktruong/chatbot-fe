import { FormControl, FormLabel, Input } from '@chakra-ui/react';

import { styles } from '../../styles';
import { FieldComponentProps } from '../FieldComponent/interfaces';

export const ConditionField = ({
  value,
  onChange,
  onUpdateField,
}: FieldComponentProps) => {
  return (
    <FormControl sx={styles.fields}>
      <FormLabel sx={styles.labelField}>Condition</FormLabel>
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
