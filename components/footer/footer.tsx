import Link from 'next/link';

export function Footer(): JSX.Element {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center text-white text-xs font-bold">
                N
              </div>
              <span className="text-xl font-bold">ナリタイカンパニー株式会社</span>
            </div>
            <p className="text-slate-400 text-sm">
              中小企業の未来を創る、
              <br />
              成長型コンサルティングファーム。
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-6 text-sm text-slate-400"
            aria-label="フッターナビゲーション"
          >
            <Link href="#" className="hover:text-emerald-400 transition">
              ホーム
            </Link>
            <Link href="#" className="hover:text-emerald-400 transition">
              ニュース
            </Link>
            <Link href="#" className="hover:text-emerald-400 transition">
              プライバシーポリシー
            </Link>
            <Link href="#" className="hover:text-emerald-400 transition">
              お問い合わせ
            </Link>
          </nav>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-600 text-sm">
          &copy; 2027 Naritai Company Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
