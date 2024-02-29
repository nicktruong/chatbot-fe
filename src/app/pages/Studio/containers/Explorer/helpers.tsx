import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { MdOutlineStart } from 'react-icons/md';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';

import { colors } from '@/styles';
import { useGetAllFlows } from '@/hooks';

import { styles } from './styles';
import { messages } from './messages';
import type { UsePrepareHookProps } from './interfaces';

import { MAX_EXPLORER_WIDTH, MIN_EXPLORER_WIDTH } from '../../constants';
import { useParams } from 'react-router-dom';
import { FlowTypeEnum } from '@/enums';

export const usePrepareHook = ({
  open,
  onOpen,
  onClose,
}: UsePrepareHookProps) => {
  const { id, flow } = useParams();
  const { data } = useGetAllFlows(id ?? '');
  const flows = data?.data;
  const { t } = useTranslation(messages.ns);
  const [dragging, setDragging] = useState(false);
  const [width, setWidth] = useState(MIN_EXPLORER_WIDTH);
  const resizableContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open && width === 0) setWidth(MIN_EXPLORER_WIDTH);
    else if (!open && width !== 0) setWidth(0);
  }, [open, width]);

  const handleResize = (event: SyntheticEvent<Element, Event>) => {
    const e = event as unknown as MouseEvent;

    const delta = e.pageX - (resizableContentRef.current?.offsetLeft ?? 0);

    if (delta < MIN_EXPLORER_WIDTH / 2) {
      setWidth(0);
    } else if (delta < 216) {
      setWidth(MIN_EXPLORER_WIDTH);
    } else if (delta <= 350) {
      setWidth(delta);
    } else {
      setWidth(MAX_EXPLORER_WIDTH);
    }
  };

  const handleResizeStart = () => {
    setDragging(true);
  };

  const handleResizeStop = () => {
    if (width > 0) onOpen?.();
    if (width === 0) onClose?.();
    setDragging(false);
  };

  const renderFlows = () => {
    const mapFlowTypeToIcon = (flowType?: FlowTypeEnum) => {
      switch (flowType) {
        case FlowTypeEnum.MAIN:
          return (
            <MdOutlineStart
              style={{
                fontSize: '0.875rem',
                color: colors.light.gray.studio[600],
              }}
            />
          );
      }
    };

    return flows?.map(({ id, name, flowType }) => {
      const active = flowType?.type === flow?.toUpperCase();

      return (
        <Box
          key={id}
          sx={styles.flow}
          backgroundColor={active ? 'gray.studio.200' : 'transparent'}
        >
          {mapFlowTypeToIcon(flowType?.type)}
          <Text
            color="black"
            sx={styles.flowName}
            fontWeight={active ? 600 : 400}
          >
            {name}
          </Text>
        </Box>
      );
    });
  };

  return {
    width,
    dragging,
    resizableContentRef,
    t,
    renderFlows,
    onResize: handleResize,
    onResizeStop: handleResizeStop,
    onResizeStart: handleResizeStart,
  };
};
