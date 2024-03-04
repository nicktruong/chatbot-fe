import { useDebouncedCallback } from 'use-debounce';
import { useCallback, useContext, useEffect } from 'react';
import { TriggerEvent, useContextMenu } from 'react-contexify';
import { Connection, OnNodesChange, XYPosition, addEdge } from 'reactflow';

import {
  useGetNodes,
  useAppSelector,
  useChangeNodePositionMutation,
} from '@/hooks';
import { selectFlowId } from '@/store/studio';

import { CanvasContext } from '../../contexts';
import { MENU_ID } from '../../components';

export const usePrepareHook = () => {
  const flowId = useAppSelector(selectFlowId);
  const { data } = useGetNodes(flowId);
  const nodesData = data?.data;

  const { show } = useContextMenu({ id: MENU_ID });
  const { mutate } = useChangeNodePositionMutation({});

  const { nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange } =
    useContext(CanvasContext);

  useEffect(() => {
    if (!nodesData) return;

    const nodes = nodesData.map(data => ({
      id: data.id,
      data: { value: null },
      type: data.nodeType.type,
      position: { x: data.x, y: data.y },
    }));

    setNodes(nodes);
  }, [nodesData, setNodes]);

  useEffect(() => {
    if (!nodesData) return;

    const nodes = nodesData.map(data => ({
      id: data.id,
      data: { value: null },
      type: data.nodeType.type,
      position: { x: data.x, y: data.y },
    }));

    setNodes(nodes);
  }, [nodesData, setNodes]);

  const changeNodePosition = useDebouncedCallback(
    (nodeId: string, position?: XYPosition) => {
      if (!position) {
        return;
      }

      mutate({ nodeId, position });
    },
    100,
  );

  const handleNodesChange: OnNodesChange = changes => {
    changes.forEach(value => {
      switch (value.type) {
        case 'position':
          changeNodePosition(value.id, value.position);
          break;
      }
    });
    onNodesChange(changes);
  };

  const handleConnect = useCallback(
    (params: Connection) =>
      setEdges(eds => addEdge({ ...params, type: 'smoothstep' }, eds)),
    [setEdges],
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
