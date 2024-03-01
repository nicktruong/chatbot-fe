import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SyntheticEvent, useMemo, useRef } from 'react';

import {
  setWidth,
  setDragging,
  setExplorer,
  selectExplorerWidth,
  selectCurrentExplorer,
  selectExplorerDragging,
} from '@/store/studio';
import { useAppDispatch, useAppSelector, useGetMyBots } from '@/hooks';

import { messages } from './messages';

import {
  ExplorerType,
  MAX_EXPLORER_WIDTH,
  MIN_EXPLORER_WIDTH,
} from '../../constants';

export const usePrepareHook = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { t } = useTranslation(messages.ns);

  const { data } = useGetMyBots();
  const botDetail = useMemo(
    () => data?.data.find(bot => bot.id === id),
    [id, data],
  );

  const width = useAppSelector(selectExplorerWidth);
  const dragging = useAppSelector(selectExplorerDragging);
  const currentExplorer = useAppSelector(selectCurrentExplorer);
  const open =
    currentExplorer && Object.values(ExplorerType).includes(currentExplorer);

  const resizableContentRef = useRef<HTMLDivElement | null>(null);

  const handleResize = (event: SyntheticEvent<Element, Event>) => {
    const e = event as unknown as MouseEvent;

    const delta = e.pageX - (resizableContentRef.current?.offsetLeft ?? 0);

    if (delta < MIN_EXPLORER_WIDTH / 2) {
      dispatch(setWidth(0));
    } else if (delta < 216) {
      dispatch(setWidth(MIN_EXPLORER_WIDTH));
    } else if (delta <= 350) {
      dispatch(setWidth(delta));
    } else {
      dispatch(setWidth(MAX_EXPLORER_WIDTH));
    }
  };

  const handleCloseExplorer = () => {
    dispatch(setExplorer(null));
  };

  const handleResizeStart = () => {
    dispatch(setDragging(true));
  };

  const handleResizeStop = () => {
    dispatch(setDragging(false));
  };

  return {
    open,
    width,
    dragging,
    botDetail,
    resizableContentRef,
    t,
    onResize: handleResize,
    onResizeStop: handleResizeStop,
    onResizeStart: handleResizeStart,
    onCloseExplorer: handleCloseExplorer,
  };
};
