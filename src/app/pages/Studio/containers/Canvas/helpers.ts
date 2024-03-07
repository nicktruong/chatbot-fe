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
import { MENU_ID } from '../../components/ContextMenu/constants';

export const usePrepareHook = () => {
  const flowId = useAppSelector(selectFlowId);
  const { data: nodesData, isFetching } = useGetNodes(flowId);

  const { show } = useContextMenu({ id: MENU_ID });
  const { mutate } = useChangeNodePositionMutation({});

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
      mutate({ nodeId, position });
    },
    20,
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
