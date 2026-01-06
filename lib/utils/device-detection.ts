/**
 * デバイス検出ユーティリティ
 * User-Agentベースの検出と画面サイズベースの検出を提供
 */

export interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  userAgent: string;
}

/**
 * User-Agentからデバイスタイプを判定
 */
export function detectDeviceFromUserAgent(userAgent: string): DeviceInfo {
  const ua = userAgent.toLowerCase();
  const isMobile =
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
  const isTablet = /ipad|android(?!.*mobile)|tablet/i.test(ua);
  const isDesktop = !isMobile && !isTablet;

  return {
    isMobile,
    isTablet,
    isDesktop,
    userAgent: ua,
  };
}

/**
 * 画面幅からデバイスタイプを判定
 */
export function detectDeviceFromViewport(width: number): {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} {
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}

/**
 * デバイス検出の閾値
 */
export const DEVICE_BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1024,
} as const;
