import { useDebouncedCallback } from 'use-debounce';
import { useCallback, useContext, useEffect } from 'react';
import { TriggerEvent, useContextMenu } from 'react-contexify';
import { Connection, OnNodesChange, XYPosition, addEdge } from 'reactflow';

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
      const options = { ...params, type: 'smoothstep' };
      const newData = options.source;

      setEdges(eds => {
        return addEdge(
          { ...options, data: newData },
          eds.filter(edge => {
            console.log(edge.data === newData);
            return edge.data !== newData;
          }),
        );
      });

      mutate({
        sourceNodeId: options.source ?? '',
        targetNodeId: options.target ?? '',
        cardId: options.sourceHandle ?? undefined,
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
