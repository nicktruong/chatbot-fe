import type { Base, CardType } from '.';

export interface CreateCard {
  id: string;
  nodeId: string;
  cardTypeId: string;
}

export interface IBotCard extends Base {
  position: number;
  cardTypeId: string;
  cardType?: CardType;
}
