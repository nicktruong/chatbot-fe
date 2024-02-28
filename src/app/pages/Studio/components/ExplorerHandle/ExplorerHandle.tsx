import { forwardRef } from 'react';
import { Box } from '@chakra-ui/react';

import { styles } from './styles';
import type { ExplorerHandleProps } from './interfaces';

export const ExplorerHandle = forwardRef<
  HTMLDivElement | null,
  ExplorerHandleProps
>(({ dragging, handleAxis, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      sx={styles.explorerHandle}
      className={`foo handle-${handleAxis}`}
      backgroundColor={dragging ? 'blue.studio.700' : 'transparent'}
      {...props}
    />
  );
});
