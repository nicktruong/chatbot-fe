import { NodeTypeEnum } from '@/enums';

import { StartNode, StandardNode, EndNode } from '../../components';

export const nodeTypes = {
  [NodeTypeEnum.END]: EndNode,
  [NodeTypeEnum.START]: StartNode,
  [NodeTypeEnum.CUSTOM]: StandardNode,
};
