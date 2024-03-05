export interface CreateEdge {
  cardId?: string;
  sourceNodeId: string;
  targetNodeId: string;
}

export interface CreatedEdge {
  createdAt: string;
  updatedAt: string;
  sourceNodeId: string;
  targetNodeId: string;
}
