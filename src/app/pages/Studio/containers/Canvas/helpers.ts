import { useDebouncedCallback } from 'use-debounce';
import { useCallback, useContext, useEffect } from 'react';
import { TriggerEvent, useContextMenu } from 'react-contexify';
import {
  addEdge,
  Connection,
  XYPosition,
  OnNodesChange,
  OnEdgesChange,
} from 'reactflow';

import {
  useGetNodes,
  useAppSelector,
  useAppDispatch,
  useCreateEdgeMutation,
  useDeleteNodeMutation,
  useDeleteEdgeMutation,
  useChangeNodePositionMutation,
} from '@/hooks';
import { EdgeType, NodeTypeEnum } from '@/enums';
import { CanvasContext } from '@studio/contexts';
import { closeCardTray, selectFlowId } from '@/store/studio';

import { MENU_ID } from './components';
import { DEBOUNCE_TIME } from './constants';

export const usePrepareHook = () => {
  const dispatch = useAppDispatch();
  const flowId = useAppSelector(selectFlowId);
  const { data: nodesData, isFetching } = useGetNodes(flowId);

  const { mutate } = useCreateEdgeMutation({});
  const { show } = useContextMenu({ id: MENU_ID });
  const { mutate: deleteNode } = useDeleteNodeMutation({});
  const { mutate: deleteEdge } = useDeleteEdgeMutation({});
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
    DEBOUNCE_TIME,
  );

  const handleNodesChange: OnNodesChange = changes => {
    for (const value of changes) {
      switch (value.type) {
        case 'position':
          if (!value.position) return;

          changeNodePosition(value.id, value.position);
          break;
        case 'remove':
          const node = nodes.find(node => node.id === value.id);

          if (
            [NodeTypeEnum.START, NodeTypeEnum.END].includes(
              node?.type as NodeTypeEnum,
            )
          ) {
            return;
          }

          deleteNode(value.id);
          break;
      }
    }
    onNodesChange(changes);
  };

  const handleConnect = useCallback(
    (params: Connection) => {
      const { source, sourceHandle, target } = params;
      const data = sourceHandle ?? source;

      const connection = {
        ...params,
        data,
        type: EdgeType.SMOOTH_STEP,
      };

      setEdges(edges => {
        // One source only has one edge
        // => Remove edge previously set for this source
        const newEdges = edges.filter(edge => {
          return edge.data !== data;
        });
        return addEdge(connection, newEdges);
      });

      const cardId =
        sourceHandle === source || sourceHandle === null
          ? undefined
          : sourceHandle;

      mutate({
        cardId,
        sourceNodeId: source ?? '',
        targetNodeId: target ?? '',
      });
    },
    [mutate, setEdges],
  );

  const handleEdgesChange: OnEdgesChange = changes => {
    changes.forEach(value => {
      switch (value.type) {
        case 'remove':
          deleteEdge(value.id);
          break;
      }
    });
    onEdgesChange(changes);
  };

  const handleShowMenu = (e: TriggerEvent) => {
    show({
      event: e,
    });
  };

  const handleCloseCardTray = () => {
    dispatch(closeCardTray());
  };

  return {
    edges,
    nodes,
    onConnect: handleConnect,
    onShowMenu: handleShowMenu,
    onEdgesChange: handleEdgesChange,
    onNodesChange: handleNodesChange,
    onCloseCardTray: handleCloseCardTray,
  };
};
