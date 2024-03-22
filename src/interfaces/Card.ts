import type { Base, CardType } from '.';

export interface CreateCard {
  nodeId: string;
  cardTypeId: string;
}

export interface IBotCard extends Base {
  position: number;
  cardTypeId: string;
  cardType?: CardType;
}
