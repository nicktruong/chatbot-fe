import { HTMLAttributes } from 'react';
import { Handle, HandleProps } from 'reactflow';

import './styles.css';

export const CustomHandle = (
  props: HandleProps & Omit<HTMLAttributes<HTMLDivElement>, 'className'>,
) => {
  return <Handle {...props} className="custom-handle" />;
};
