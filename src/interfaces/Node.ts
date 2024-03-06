import { NodeTypeEnum } from '@/enums';

import { Base, Card, NodeType } from '.';

export interface CreateNode {
  x: number;
  y: number;
  id?: string;
  flowId: string;
  type: NodeTypeEnum;
}

export interface Node extends Base {
  x: number;
  y: number;
  name: string;
  cards?: Card[];
  nodeType: NodeType;
}

export interface ChangedPosition {
  x: number;
  y: number;
  updatedAt: string;
}
