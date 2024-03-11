import { Connection, addEdge } from 'reactflow';
import { useCallback, useContext, useEffect } from 'react';
import { TriggerEvent, useContextMenu } from 'react-contexify';

import { selectFlowId } from '@/store/studio';
import { useAppSelector, useGetNodes } from '@/hooks';

import { CanvasContext } from '../../contexts';
import { MENU_ID } from '../../components';

export const usePrepareHook = () => {
  const flowId = useAppSelector(selectFlowId);
  const { data } = useGetNodes(flowId);
  const nodesData = data?.data;
  const { show } = useContextMenu({ id: MENU_ID });

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
    onNodesChange,
    onConnect: handleConnect,
    onShowMenu: handleShowMenu,
  };
};
