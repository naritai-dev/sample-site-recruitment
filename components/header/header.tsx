'use client';

import { useIsMobile } from '@/hooks/use-device';
import { HeaderDesktop } from './desktop/header-desktop';
import { HeaderMobile } from './mobile/header-mobile';

export function Header(): JSX.Element {
  const isMobile = useIsMobile();

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
}
