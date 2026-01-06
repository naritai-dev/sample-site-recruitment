'use client';

import { useIsMobile } from '@/hooks/use-device';
import { MessageSectionDesktop } from './desktop/message-section-desktop';
import { MessageSectionMobile } from './mobile/message-section-mobile';

export function MessageSection(): JSX.Element {
  const isMobile = useIsMobile();

  return isMobile ? <MessageSectionMobile /> : <MessageSectionDesktop />;
}
