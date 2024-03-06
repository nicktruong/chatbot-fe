import { ExplorerType } from '@/app/pages/Studio/constants';

export interface ExplorerState {
  width: number;
  dragging: boolean;
  explorer: ExplorerType;
  currentExplorer: ExplorerType | null;
}
