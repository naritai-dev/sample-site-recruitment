import type { Metadata, Viewport } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: '採用情報 | ナリタイカンパニー株式会社',
  description:
    'ナリタイカンパニー株式会社は、あなたの「野心」と「こだわり」を燃料に、企業の成長と個人の自己実現を同時に叶える場所です。2027年度 新卒・中途採用 募集中',
  keywords: ['採用', '新卒採用', '中途採用', 'ナリタイカンパニー株式会社', 'コンサルティング'],
  authors: [{ name: 'ナリタイカンパニー株式会社' }],
  openGraph: {
    title: '採用情報 | ナリタイカンパニー株式会社',
    description:
      'ナリタイカンパニー株式会社は、あなたの「野心」と「こだわり」を燃料に、企業の成長と個人の自己実現を同時に叶える場所です。',
    type: 'website',
    locale: 'ja_JP',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className={notoSansJP.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
