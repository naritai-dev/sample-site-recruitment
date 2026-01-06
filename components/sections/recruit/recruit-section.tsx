'use client';

import { useIsMobile } from '@/hooks/use-device';
import { RecruitSectionDesktop } from './desktop/recruit-section-desktop';
import { RecruitSectionMobile } from './mobile/recruit-section-mobile';

export function RecruitSection(): JSX.Element {
  const isMobile = useIsMobile();

  return isMobile ? <RecruitSectionMobile /> : <RecruitSectionDesktop />;
}
