import { Menu, Item } from 'react-contexify';

import { MENU_ID } from './constants';
import { usePrepareHook } from './helpers';

import 'react-contexify/dist/ReactContexify.css';
import './styles.css';

export const ContextMenu = () => {
  const { onCreateNode } = usePrepareHook();

  return (
    <Menu id={MENU_ID} animation={false}>
      <Item onClick={onCreateNode}>Standard Node</Item>
    </Menu>
  );
};
