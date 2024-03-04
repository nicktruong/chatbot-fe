import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { setFlowId } from '@/store/studio';
import { useAppDispatch, useGetAllFlows } from '@/hooks';

export const usePrepareHook = () => {
  // The `flow` parameter will be either
  // - flowType for unique flows like main, end,...
  // - flowId for other flows
  const { id, flow } = useParams();
  const dispatch = useAppDispatch();

  const { data } = useGetAllFlows(id);

  const flows = useMemo(
    () =>
      data?.data.map(({ id, flowType, ...data }) => {
        return {
          ...data,
          id,
          flowType,
          isActive: flowType?.type === flow?.toUpperCase() || id === flow,
        };
      }) ?? [],
    [data, flow],
  );

  useEffect(() => {
    if (!flow || !data) return;

    const flowId = data.data.find(({ flowType, id }) => {
      if (flowType?.type === flow.toUpperCase()) return true;
      if (id === flow) return true;
      return false;
    })?.id;

    dispatch(setFlowId(flowId ?? ''));
  }, [data, flow, dispatch]);

  return { flows };
};
