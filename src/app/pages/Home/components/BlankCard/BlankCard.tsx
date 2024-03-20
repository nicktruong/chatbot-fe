import { Card, CardProps } from '@chakra-ui/react';

import { styles } from './styles';

export const BlankCard = ({ children, sx, ...props }: CardProps) => {
  return (
    <Card sx={{ ...sx, ...styles.card }} {...props}>
      {children}
    </Card>
  );
};
