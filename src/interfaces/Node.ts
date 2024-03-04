import { NodeTypeEnum } from '@/enums';

import { Base, NodeType } from '.';

export interface CreateNode {
  x: number;
  y: number;
  flowId: string;
  type: NodeTypeEnum;
}

export interface Node extends Base {
  x: number;
  y: number;
  name: string;
  nodeType: NodeType;
}
