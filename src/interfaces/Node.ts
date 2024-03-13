import { NodeTypeEnum } from '@/enums';

import { Base, NodeType } from '.';

export interface CreateNode {
  x: number;
  y: number;
  flowId: string;
  type: NodeTypeEnum;
  id?: string;
}

export interface Node extends Base {
  x: number;
  y: number;
  name: string;
  nodeType: NodeType;
}

export interface ChangedPosition {
  x: number;
  y: number;
  updatedAt: string;
}
