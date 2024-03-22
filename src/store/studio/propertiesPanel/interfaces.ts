import { Node } from 'reactflow';

import { CardOrNode } from '@/enums';
import type { IBotCard, Node as NodeData } from '@/interfaces';

export type PropertiesData =
  | ({ data: IBotCard } & { type: CardOrNode.CARD })
  | (Node<NodeData> & { type: CardOrNode.NODE });

export interface PropertiesState {
  data?: PropertiesData;
}
