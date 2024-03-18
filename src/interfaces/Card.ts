import type { Base, CardType } from '.';

export interface CreateCard {
  nodeId: string;
  cardTypeId: string;
}

export interface IBotCard extends Base {
  nodeId: string;
  position: number;
  cardTypeId: string;
  cardType?: CardType;
}
