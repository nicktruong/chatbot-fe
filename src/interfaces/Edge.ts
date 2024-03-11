import type { Base, IBotCard } from '.';

export interface CreateEdge {
  cardId?: string;
  sourceNodeId: string;
  targetNodeId: string;
}

export interface CreatedEdge extends Base {
  sourceNodeId: string;
  targetNodeId: string;
}

export interface Edge extends Base {
  card?: IBotCard;
  sourceNodeId: string;
  targetNodeId: string;
}
