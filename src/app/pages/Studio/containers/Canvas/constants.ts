import { NodeTypeEnum } from '@/enums';

import { EndNode, StartNode, StandardNode } from './components';

export const nodeTypes = {
  [NodeTypeEnum.END]: EndNode,
  [NodeTypeEnum.START]: StartNode,
  [NodeTypeEnum.CUSTOM]: StandardNode,
};
