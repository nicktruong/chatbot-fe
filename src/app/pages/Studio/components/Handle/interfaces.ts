import { Position } from 'reactflow';

export interface CustomHandleInterface {
  position: Position;
  type: 'source' | 'target';
}
