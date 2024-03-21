import { useSetEdgeByCardOrNodeId } from '@/hooks/useSetEdgeByCardOrNodeId';

export const usePrepareHook = (nodeId: string) => {
  useSetEdgeByCardOrNodeId(nodeId, 'node');
};
