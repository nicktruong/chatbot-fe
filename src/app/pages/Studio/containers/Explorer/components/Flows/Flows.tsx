import { Box, Text } from '@chakra-ui/react';
import { MdOutlineStart } from 'react-icons/md';

import { colors } from '@/styles';
import { FlowTypeEnum } from '@/enums';

import { styles } from './styles';
import { usePrepareHook } from './helpers';

const FlowIcon = ({ flowType }: { flowType?: FlowTypeEnum }) => {
  switch (flowType) {
    case FlowTypeEnum.MAIN:
      return (
        <MdOutlineStart
          style={{
            fontSize: '0.875rem',
            color: colors.studioLight.gray[600],
          }}
        />
      );
    default:
      return null;
  }
};

export const Flows = () => {
  const { flows } = usePrepareHook();

  return (
    <>
      {flows?.map(({ id, name, isActive, flowType }) => {
        return (
          <Box
            key={id}
            sx={styles.flow}
            backgroundColor={isActive ? 'gray.200' : 'transparent'}
          >
            <FlowIcon flowType={flowType?.type} />
            <Text
              color="black"
              sx={styles.flowName}
              fontWeight={isActive ? 600 : 400}
            >
              {name}
            </Text>
          </Box>
        );
      })}
    </>
  );
};
