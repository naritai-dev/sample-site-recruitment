'use client';

import { useState, useEffect } from 'react';
import { detectDeviceFromViewport } from '@/lib/utils/device-detection';

export interface UseDeviceReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
  height: number;
  isClient: boolean;
}

/**
 * クライアントサイドでデバイスタイプを検出するフック
 * ハイドレーションエラーを防ぐため、初期レンダリング時はデフォルト値を返す
 */
export function useDevice(): UseDeviceReturn {
  const [deviceInfo, setDeviceInfo] = useState<UseDeviceReturn>(() => {
    // SSR時は常にデフォルト値（PC版）を返す
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      width: 1920,
      height: 1080,
      isClient: false,
    };
  });

  useEffect(() => {
    // クライアントサイドでのみ実行
    const updateDeviceInfo = (): void => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const viewportInfo = detectDeviceFromViewport(width);

      setDeviceInfo({
        ...viewportInfo,
        width,
        height,
        isClient: true,
      });
    };

    // 初回実行
    updateDeviceInfo();

    // リサイズイベントリスナーを追加
    window.addEventListener('resize', updateDeviceInfo);

    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
    };
  }, []);

  return deviceInfo;
}

/**
 * モバイル判定のみを返す簡易フック
 */
export function useIsMobile(): boolean {
  const { isMobile, isClient } = useDevice();
  // クライアントサイドでマウントされるまでfalse（PC版）を返す
  return isClient ? isMobile : false;
}
