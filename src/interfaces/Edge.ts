import { Base } from './Base';

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
  cardId: string;
  sourceNodeId: string;
  targetNodeId: string;
}
