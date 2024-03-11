import { FormControl, FormLabel, Input } from '@chakra-ui/react';

import { styles } from '../../styles';
import { FieldComponentProps } from '../FieldComponent';

export const QuestionField = ({
  value,
  onChange,
  onUpdateField,
}: FieldComponentProps) => {
  return (
    <FormControl sx={styles.fields}>
      <FormLabel sx={styles.labelField}>Question to ask the user</FormLabel>
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
