import { useContext } from 'react';
import { useReactFlow } from 'reactflow';
import { nanoid } from '@reduxjs/toolkit';
import { ItemParams } from 'react-contexify';

import { NodeTypeEnum } from '@/enums';
import { selectFlowId } from '@/store/studio';
import { useAppSelector, useCreateNodeMutation } from '@/hooks';

import { CanvasContext } from '../../contexts';

export const usePrepareHook = () => {
  const flowId = useAppSelector(selectFlowId);
  const { mutate } = useCreateNodeMutation({});
  const { setNodes } = useContext(CanvasContext);
  const { screenToFlowPosition } = useReactFlow();

  const handleCreateNode = ({ event }: ItemParams) => {
    const { x, y } = (event.target as HTMLElement)?.getBoundingClientRect();
    const position = screenToFlowPosition({ x, y });

    setNodes(nodes => [
      ...nodes,
      {
        position,
        id: nanoid(),
        data: { value: null },
        type: NodeTypeEnum.CUSTOM,
      },
    ]);

    mutate({ flowId, type: NodeTypeEnum.CUSTOM, ...position });
  };

  return { onCreateNode: handleCreateNode };
};
