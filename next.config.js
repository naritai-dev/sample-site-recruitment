/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // GitHub Pages用の設定
  output: 'export',
  // リポジトリ名: sample-site-recruitment
  // GitHub Pages URL: https://naritai-dev.github.io/sample-site-recruitment
  basePath: process.env.NODE_ENV === 'production' 
    ? (process.env.BASE_PATH || '/sample-site-recruitment')
    : '',
  images: {
    // 静的エクスポート時は画像最適化が無効になるため、unoptimizedを設定
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
    ],
  },
  // 静的エクスポート時はheaders()は使用できないため削除
  // GitHub Pagesではサーバー側のヘッダー設定ができないため、
  // 必要に応じて<meta>タグで対応
};

module.exports = nextConfig;
