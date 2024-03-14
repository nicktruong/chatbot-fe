import { Edge, addEdge } from 'reactflow';
import { useContext, useEffect } from 'react';

import { CardOrNode, EdgeType } from '@/enums';
import { useGetEdgeByCardOrNodeId } from '@/hooks';

import { CanvasContext } from '../../contexts';

export const usePrepareHook = (cardId: string) => {
  const { data, isFetching } = useGetEdgeByCardOrNodeId({
    id: cardId,
    type: CardOrNode.CARD,
  });
  const edgeData = data?.data;

  const { setEdges } = useContext(CanvasContext);

  useEffect(() => {
    if (!edgeData || isFetching) return;

    const edge: Edge = {
      id: edgeData.id,
      type: EdgeType.SMOOTH_STEP,
      source: edgeData.sourceNodeId,
      target: edgeData.targetNodeId,
    };

    setEdges(eds => addEdge({ ...edge, data: edgeData.sourceNodeId }, eds));
  }, [edgeData, isFetching, setEdges]);
};
