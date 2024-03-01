import { Handle } from 'reactflow';

import type { CustomHandleInterface } from './interfaces';

import './styles.css';

export const CustomHandle = ({ type, position }: CustomHandleInterface) => {
  return <Handle type={type} position={position} className="custom-handle" />;
};
