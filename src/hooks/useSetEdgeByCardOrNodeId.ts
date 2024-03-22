import { addEdge } from 'reactflow';
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

    edgeData.forEach(data => {
      const edge = {
        id: data.id,
        type: EdgeType.SMOOTH_STEP,
        source: data.sourceNodeId,
        target: data.targetNodeId,
        data: data.cardId ?? data.sourceNodeId,
        sourceHandle: data.cardId ?? data.sourceNodeId,
      };

      setEdges(eds => addEdge(edge, eds));
    });
  }, [edgeData, isFetching, setEdges]);
};
