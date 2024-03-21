import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useReactFlow } from 'reactflow';
import { ItemParams } from 'react-contexify';

import { NodeTypeEnum } from '@/enums';
import { selectFlowId } from '@/store/studio';
import { CanvasContext } from '@studio/contexts';
import { useAppSelector, useCreateNodeMutation } from '@/hooks';

export const usePrepareHook = () => {
  const flowId = useAppSelector(selectFlowId);
  const { mutate } = useCreateNodeMutation({});
  const { setNodes } = useContext(CanvasContext);
  const { screenToFlowPosition } = useReactFlow();

  const handleCreateNode = ({ event }: ItemParams) => {
    const { x, y } = (event.target as HTMLElement)?.getBoundingClientRect();
    const position = screenToFlowPosition({ x, y });

    const id = uuidv4();

    setNodes(nodes => [
      ...nodes,
      {
        id,
        position,
        type: NodeTypeEnum.CUSTOM,
        data: { id, name: 'Standard Node 1' },
      },
    ]);

    mutate({ id, flowId, type: NodeTypeEnum.CUSTOM, ...position });
  };

  return { onCreateNode: handleCreateNode };
};
