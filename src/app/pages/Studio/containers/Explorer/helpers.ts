import { SyntheticEvent, useEffect, useRef, useState } from 'react';

import type { UsePrepareHookProps } from './interfaces';

import { MAX_EXPLORER_WIDTH, MIN_EXPLORER_WIDTH } from '../../constants';

export const usePrepareHook = ({
  open,
  onOpen,
  onClose,
}: UsePrepareHookProps) => {
  const [dragging, setDragging] = useState(false);
  const [width, setWidth] = useState(MIN_EXPLORER_WIDTH);
  const resizableContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open && width === 0) setWidth(MIN_EXPLORER_WIDTH);
  }, [open]);

  const handleResize = (event: SyntheticEvent<Element, Event>) => {
    const e = event as unknown as MouseEvent;

    const delta = e.pageX - (resizableContentRef.current?.offsetLeft ?? 0);

    if (delta < MIN_EXPLORER_WIDTH / 2) {
      setWidth(0);
    } else if (delta < 216) {
      setWidth(MIN_EXPLORER_WIDTH);
    } else if (delta <= 350) {
      setWidth(delta);
    } else {
      setWidth(MAX_EXPLORER_WIDTH);
    }
  };

  const handleResizeStart = () => {
    setDragging(true);
  };

  const handleResizeStop = () => {
    if (width > 0) onOpen?.();
    if (width === 0) onClose?.();
    setDragging(false);
  };

  return {
    width,
    dragging,
    resizableContentRef,
    onResize: handleResize,
    onResizeStop: handleResizeStop,
    onResizeStart: handleResizeStart,
  };
};
