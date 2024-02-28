import { useCallback, useState } from 'react';
import { Connection, addEdge, useEdgesState, useNodesState } from 'reactflow';

import { Explorers } from './constants';

// TODO: Declare interfaces for nodes, edges, and integrate APIs
const initialNodes: any[] = [];
const initialEdges: any[] = [];

export const usePrepareHook = () => {
  const [explorer, setExplorer] = useState<Explorers | undefined>(
    Explorers.FLOW,
  );
  const [oldExplorer, setOldExplorer] = useState<Explorers | undefined>(
    explorer,
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const handleConnect = useCallback(
    (params: Connection) => setEdges(eds => addEdge(params, eds)),
    [setEdges],
  );

  const handleOpenExplorer = (explorer?: Explorers) => () => {
    setExplorer(explorer ?? oldExplorer);
  };

  const handleCloseExplorer = (explorer?: Explorers) => () => {
    setOldExplorer(explorer);
    setExplorer(undefined);
  };

  const handleToggleExplorer = (newExplorer?: Explorers) => () => {
    if (explorer === newExplorer) {
      setOldExplorer(explorer);
    }

    setExplorer(oldExplorer =>
      oldExplorer === newExplorer ? undefined : newExplorer,
    );
  };

  return {
    edges,
    nodes,
    explorer,
    onEdgesChange,
    onNodesChange,
    onConnect: handleConnect,
    onOpenExplorer: handleOpenExplorer,
    onCloseExplorer: handleCloseExplorer,
    onToggleExplorer: handleToggleExplorer,
  };
};
