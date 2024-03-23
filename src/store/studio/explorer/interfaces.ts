import { ExplorerType } from '@studio/constants';

export interface ExplorerState {
  width: number;
  dragging: boolean;
  explorer: ExplorerType;
  currentExplorer: ExplorerType | null;
}
