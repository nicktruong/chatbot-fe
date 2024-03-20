import type { PropsWithChildren } from 'react';

export interface ChatBubbleProps extends PropsWithChildren {
  perspective: 'user' | 'bot';
}
