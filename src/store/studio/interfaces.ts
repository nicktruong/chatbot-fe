import { ExplorerType } from '@/app/pages/Studio/constants';

export interface StudioState {
  width: number;
  dragging: boolean;
  explorer: ExplorerType;
  currentExplorer: ExplorerType | null;
}
