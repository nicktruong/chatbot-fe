import { useEdgesState, useNodesState } from 'reactflow';
import { PropsWithChildren, createContext } from 'react';

import type { ICanvasContext } from './interfaces';

export const CanvasContext = createContext<ICanvasContext>({
  nodes: [],
  setNodes: () => {},
  onNodesChange: () => {},

  edges: [],
  setEdges: () => {},
  onEdgesChange: () => {},
});

export const CanvasProvider = ({ children }: PropsWithChildren) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  return (
    <CanvasContext.Provider
      value={{
        nodes,
        setNodes,
        onNodesChange,
        edges,
        setEdges,
        onEdgesChange,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};
