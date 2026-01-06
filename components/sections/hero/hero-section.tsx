'use client';

import { useIsMobile } from '@/hooks/use-device';
import { HeroSectionDesktop } from './desktop/hero-section-desktop';
import { HeroSectionMobile } from './mobile/hero-section-mobile';

export function HeroSection(): JSX.Element {
  const isMobile = useIsMobile();

  return isMobile ? <HeroSectionMobile /> : <HeroSectionDesktop />;
}
