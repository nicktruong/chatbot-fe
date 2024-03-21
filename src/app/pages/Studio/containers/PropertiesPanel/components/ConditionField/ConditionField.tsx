import { useContext } from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

import { styles } from '../../styles';
import { FieldContext } from '../../contexts';

export const ConditionField = () => {
  const { value, onInputChange, onUpdateField } = useContext(FieldContext);

  return (
    <FormControl sx={styles.fields}>
      <FormLabel sx={styles.labelField}>Condition</FormLabel>
      <Input
        value={value}
        onChange={onInputChange}
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
