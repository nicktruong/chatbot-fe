import type { Explorers } from '../../constants';

export interface LeftSidebarProps {
  explorer?: Explorers;
  onToggleExplorer: (explorer: Explorers) => () => void;
}
