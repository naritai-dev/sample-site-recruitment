'use client';

import { useDevice } from '@/hooks/use-device';
import type { ReactNode } from 'react';

interface DeviceDetectorProps {
  mobile?: ReactNode;
  tablet?: ReactNode;
  desktop?: ReactNode;
  children?: ReactNode;
}

/**
 * デバイスタイプに応じて異なるコンポーネントを表示するコンポーネント
 */
export function DeviceDetector({
  mobile,
  tablet,
  desktop,
  children,
}: DeviceDetectorProps): JSX.Element | null {
  const { isMobile, isTablet, isDesktop } = useDevice();

  if (isMobile && mobile !== undefined) {
    return <>{mobile}</>;
  }

  if (isTablet && tablet !== undefined) {
    return <>{tablet}</>;
  }

  if (isDesktop && desktop !== undefined) {
    return <>{desktop}</>;
  }

  // フォールバック: モバイル → タブレット → デスクトップの順
  if (mobile !== undefined) {
    return <>{mobile}</>;
  }

  if (tablet !== undefined) {
    return <>{tablet}</>;
  }

  if (desktop !== undefined) {
    return <>{desktop}</>;
  }

  return children !== undefined ? <>{children}</> : null;
}
