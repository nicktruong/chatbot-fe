import { CardOrNode } from '@/enums';
import { useSetEdgeByCardOrNodeId } from '@/hooks';

export const usePrepareHook = (nodeId: string) => {
  useSetEdgeByCardOrNodeId(nodeId, CardOrNode.NODE);
};
