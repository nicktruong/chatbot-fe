import {
  addEdge,
  Connection,
  XYPosition,
  OnNodesChange,
  OnEdgesChange,
  NodeMouseHandler,
} from 'reactflow';
import { useDebouncedCallback } from 'use-debounce';
import { useQueryClient } from '@tanstack/react-query';
import { TriggerEvent, useContextMenu } from 'react-contexify';
import { useCallback, useContext, useEffect, useRef } from 'react';

import {
  setFocus,
  selectFlowId,
  closeCardTray,
  selectPropertiesData,
} from '@/store/studio';
import {
  useGetNodes,
  useAppSelector,
  useAppDispatch,
  useCreateEdgeMutation,
  useDeleteNodeMutation,
  useDeleteEdgeMutation,
  useDeleteCardMutation,
  useChangeNodePositionMutation,
} from '@/hooks';
import { queryKeys } from '@/constants';
import { CanvasContext } from '@studio/contexts';
import { CardOrNode, EdgeType, NodeTypeEnum } from '@/enums';

import { MENU_ID } from './components';
import { DEBOUNCE_TIME } from './constants';

export const usePrepareHook = () => {
  const ref = useRef('');
  const queryClient = useQueryClient();

  const dispatch = useAppDispatch();
  const flowId = useAppSelector(selectFlowId);
  const { data: nodesData, isFetching } = useGetNodes(flowId);

  const { show } = useContextMenu({ id: MENU_ID });
  const propertiesData = useAppSelector(selectPropertiesData);

  const { mutate: createEdge } = useCreateEdgeMutation({});
  const { mutate: deleteNode } = useDeleteNodeMutation({});
  const { mutate: deleteEdge } = useDeleteEdgeMutation({});
  const { mutate: deleteCard } = useDeleteCardMutation({
    mutationKey: [ref.current],
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: [queryKeys.CARD, ref.current],
      });
    },
  });
  const { mutate: updateNodePosition } = useChangeNodePositionMutation({});

  const { nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange } =
    useContext(CanvasContext);

  useEffect(() => {
    if (!nodesData || isFetching) return;

    const nodes = nodesData.map(data => ({
      data,
      id: data.id,
      type: data.nodeType?.type,
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
          ref.current = value.id;

          const focusItem = propertiesData;

          if (
            focusItem?.data?.id !== value.id &&
            focusItem?.type === CardOrNode.CARD
          ) {
            deleteCard(focusItem?.data?.id);
            return;
          }

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

      createEdge({
        cardId,
        sourceNodeId: source ?? '',
        targetNodeId: target ?? '',
      });
    },
    [createEdge, setEdges],
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

  const handleChangePropertiesPanel: NodeMouseHandler = (e, node) => {
    dispatch(setFocus({ ...node, type: CardOrNode.NODE }));
  };

  return {
    edges,
    nodes,
    onConnect: handleConnect,
    onShowMenu: handleShowMenu,
    onEdgesChange: handleEdgesChange,
    onNodesChange: handleNodesChange,
    onCloseCardTray: handleCloseCardTray,
    onChangePropertiesPanel: handleChangePropertiesPanel,
  };
};
