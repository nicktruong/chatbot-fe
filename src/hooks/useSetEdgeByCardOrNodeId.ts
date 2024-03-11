import { Edge, addEdge } from 'reactflow';
import { useContext, useEffect } from 'react';

import { CardOrNode, EdgeType } from '@/enums';
import { CanvasContext } from '@studio/contexts';

import { useGetEdgeByCardOrNodeId } from './apiHooks';

export const useSetEdgeByCardOrNodeId = (id: string, type: 'card' | 'node') => {
  const { data: edgeData, isFetching } = useGetEdgeByCardOrNodeId({
    id,
    type: CardOrNode.CARD,
  });

  const { setEdges } = useContext(CanvasContext);

  useEffect(() => {
    if (!edgeData || isFetching) return;

    const edge: Edge = {
      id: edgeData.id,
      type: EdgeType.SMOOTH_STEP,
      target: edgeData.targetNodeId,
      sourceHandle: edgeData.card?.id,
      data: edgeData.card?.id ?? edgeData.sourceNodeId,
    };

    setEdges(eds => addEdge(edge, eds));
  }, [edgeData, isFetching, setEdges]);
};
