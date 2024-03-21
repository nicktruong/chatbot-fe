import { Edge, addEdge } from 'reactflow';
import { useContext, useEffect } from 'react';

import { CardOrNode, EdgeType } from '@/enums';
import { CanvasContext } from '@studio/contexts';

import { useGetEdgeByCardOrNodeId } from './apiHooks';

export const useSetEdgeByCardOrNodeId = (id: string, type: CardOrNode) => {
  const { data: edgeData, isFetching } = useGetEdgeByCardOrNodeId({
    id,
    type,
  });

  const { setEdges } = useContext(CanvasContext);

  useEffect(() => {
    if (!edgeData || isFetching) return;

    const edge: Edge = {
      id: edgeData.id,
      type: EdgeType.SMOOTH_STEP,
      source: edgeData.sourceNodeId,
      target: edgeData.targetNodeId,
      sourceHandle: edgeData.cardId,
      data: edgeData.cardId ?? edgeData.sourceNodeId,
    };

    setEdges(eds => addEdge(edge, eds));
  }, [edgeData, isFetching, setEdges]);
};
