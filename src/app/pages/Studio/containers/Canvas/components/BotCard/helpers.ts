import { useSetEdgeByCardOrNodeId } from '@/hooks/useSetEdgeByCardOrNodeId';

export const usePrepareHook = (cardId: string) => {
  useSetEdgeByCardOrNodeId(cardId, 'card');
};
