import { useParams } from 'react-router-dom';

import { useGetAllFlows } from '@/hooks';

export const usePrepareHook = () => {
  const { id, flow } = useParams();

  const { data } = useGetAllFlows(id ?? '');

  const flows =
    data?.data.map(({ flowType, ...data }) => {
      return {
        ...data,
        flowType,
        isActive: flowType?.type === flow?.toUpperCase(),
      };
    }) ?? [];

  return { flows };
};
