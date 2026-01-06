'use client';

import { useIsMobile } from '@/hooks/use-device';
import { CultureSectionDesktop } from './desktop/culture-section-desktop';
import { CultureSectionMobile } from './mobile/culture-section-mobile';

export function CultureSection(): JSX.Element {
  const isMobile = useIsMobile();

  return isMobile ? <CultureSectionMobile /> : <CultureSectionDesktop />;
}
