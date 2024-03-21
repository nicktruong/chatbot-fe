import { Dispatch, SetStateAction } from 'react';
import { Edge, EdgeChange, Node, NodeChange } from 'reactflow';

type OnChange<ChangesType> = (changes: ChangesType[]) => void;

export interface ICanvasContext {
  onNodesChange: OnChange<NodeChange>;
  nodes: Node<any, string | undefined>[];
  setNodes: Dispatch<SetStateAction<Node<any, string | undefined>[]>>;

  edges: Edge<string>[];
  onEdgesChange: OnChange<EdgeChange>;
  setEdges: Dispatch<SetStateAction<Edge<string>[]>>;
}
