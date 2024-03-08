import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { setFlowId } from '@/store/studio';
import { useAppDispatch, useExtractFlowId, useGetAllFlows } from '@/hooks';

export const usePrepareHook = () => {
  // The `flow` parameter will be either
  // - flowType for unique flows like main, end,...
  // - flowId for other flows
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { data } = useGetAllFlows(id);
  const flowId = useExtractFlowId(data);

  const flows = useMemo(
    () =>
      data?.map(params => {
        return {
          ...params,
          isActive: params.id === flowId,
        };
      }),
    [data, flowId],
  );

  useEffect(() => {
    if (flowId) dispatch(setFlowId(flowId));
  }, [flowId, dispatch]);

  return { flows };
};
