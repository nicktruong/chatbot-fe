import { useParams } from 'react-router-dom';

import { Flow } from '@/interfaces';

export const useExtractFlowId = (flows?: Flow[]) => {
  const { flow } = useParams();

  return flows?.find(({ flowType, id }) => {
    return flowType?.type === flow?.toUpperCase() || id === flow;
  })?.id;
};
