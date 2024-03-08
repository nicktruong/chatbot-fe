import { useDebouncedCallback } from 'use-debounce';
import { useCallback, useContext, useEffect } from 'react';
import { TriggerEvent, useContextMenu } from 'react-contexify';
import { addEdge, Connection, XYPosition, OnNodesChange } from 'reactflow';

import {
  useGetNodes,
  useAppSelector,
  useCreateEdgeMutation,
  useChangeNodePositionMutation,
} from '@/hooks';
import { selectFlowId } from '@/store/studio';
import { CanvasContext } from '@studio/contexts';

import { MENU_ID } from './components';

export const usePrepareHook = () => {
  const flowId = useAppSelector(selectFlowId);
  const { data: nodesData, isFetching } = useGetNodes(flowId);

  const { mutate } = useCreateEdgeMutation({});
  const { show } = useContextMenu({ id: MENU_ID });
  const { mutate: updateNodePosition } = useChangeNodePositionMutation({});

  const { nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange } =
    useContext(CanvasContext);

  useEffect(() => {
    if (!nodesData || isFetching) return;

    const nodes = nodesData.map(data => ({
      data,
      id: data.id,
      type: data.nodeType.type,
      position: { x: data.x, y: data.y },
    }));

    setNodes(nodes);
  }, [nodesData, isFetching, setNodes]);

  // To clean up cached nodes on the canvas
  useEffect(() => () => setNodes([]), [setNodes]);

  const changeNodePosition = useDebouncedCallback(
    (nodeId: string, position: XYPosition) => {
      updateNodePosition({ nodeId, position });
    },
    100,
  );

  const handleNodesChange: OnNodesChange = changes => {
    changes.forEach(value => {
      switch (value.type) {
        case 'position':
          if (!value.position) return;

          changeNodePosition(value.id, value.position);
          break;
      }
    });
    onNodesChange(changes);
  };

  const handleConnect = useCallback(
    (params: Connection) => {
      const { source } = params;
      const connection = { ...params, type: 'smoothstep', data: source };

      setEdges(edges => {
        // One source only has one edge
        // => Remove edge previously set for this source
        const newEdges = edges.filter(edge => edge.data !== source);
        return addEdge(connection, newEdges);
      });

      mutate({
        sourceNodeId: connection.source ?? '',
        targetNodeId: connection.target ?? '',
        cardId: connection.sourceHandle ?? undefined,
      });
    },
    [mutate, setEdges],
  );

  const handleShowMenu = (e: TriggerEvent) => {
    show({
      event: e,
    });
  };

  return {
    edges,
    nodes,
    onEdgesChange,
    onConnect: handleConnect,
    onShowMenu: handleShowMenu,
    onNodesChange: handleNodesChange,
  };
};
