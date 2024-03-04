import { Base, NodeType } from '.';

export interface Node extends Base {
  x: number;
  y: number;
  name: string;
  nodeType: NodeType;
}
