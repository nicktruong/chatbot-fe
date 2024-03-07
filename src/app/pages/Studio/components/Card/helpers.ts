import { useContext, useEffect } from 'react';

import { useGetEdgeByCardOrNodeId } from '@/hooks';

import { CanvasContext } from '../../contexts';
import { Edge, addEdge } from 'reactflow';

export const usePrepareHook = (cardId: string) => {
  const { data, isFetching } = useGetEdgeByCardOrNodeId({
    id: cardId,
    type: 'card',
  });
  const edgeData = data?.data;

  const { setEdges } = useContext(CanvasContext);

  useEffect(() => {
    if (!edgeData || isFetching) return;

    const edge: Edge = {
      id: edgeData.id,
      type: 'smoothstep',
      source: edgeData.sourceNodeId,
      target: edgeData.targetNodeId,
    };

    setEdges(eds => addEdge({ ...edge, data: edgeData.sourceNodeId }, eds));
  }, [edgeData, isFetching, setEdges]);
};
