import { ExplorerType } from '@studio/constants';

export interface ExplorerState {
  width: number;

  dragging: boolean;

  /**
   * The application may scale to have many "types" of explorer.
   * Currently only support for "flow explorer"
   */
  prevExplorer: ExplorerType;

  currentExplorer: ExplorerType | null;
}
