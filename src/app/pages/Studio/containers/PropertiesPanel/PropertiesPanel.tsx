import { Box, Text } from '@chakra-ui/react';

import { styles } from './styles';
import { usePrepareHook } from './helpers';

export const PropertiesPanel = () => {
  const { renderFields, renderHeadingText } = usePrepareHook();

  return (
    <Box sx={styles.propertiesContent}>
      <Text sx={styles.propertiesHeading}>{renderHeadingText()}</Text>

      {renderFields()}
    </Box>
  );
};
