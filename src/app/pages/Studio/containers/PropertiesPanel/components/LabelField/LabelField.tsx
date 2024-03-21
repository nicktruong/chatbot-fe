import { useContext } from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

import { styles } from '../../styles';
import { FieldContext } from '../../contexts';

export const LabelField = () => {
  const { value, onInputChange, onUpdateField } = useContext(FieldContext);

  return (
    <FormControl sx={styles.fields}>
      <FormLabel sx={styles.labelField}>Label</FormLabel>
      <Input
        value={value}
        sx={styles.studioInput}
        onChange={onInputChange}
        onBlur={e => onUpdateField(e.target.value)}
        onKeyDown={e =>
          e.key === 'Enter' &&
          onUpdateField((e.target as HTMLInputElement).value)
        }
      />
    </FormControl>
  );
};
