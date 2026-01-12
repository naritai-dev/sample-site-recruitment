import Link from 'next/link';

export function HeaderDesktop(): JSX.Element {
  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-md flex items-center justify-center text-white font-bold text-xl">
            N
          </div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">
            ナリタイカンパニー株式会社
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="flex items-center gap-8" aria-label="メインナビゲーション">
          <Link
            href="#about"
            className="text-slate-600 hover:text-emerald-600 font-medium transition-colors duration-200 ease-out"
          >
            会社について
          </Link>
          <Link
            href="#services"
            className="text-slate-600 hover:text-emerald-600 font-medium transition-colors duration-200 ease-out"
          >
            事業内容
          </Link>
          <Link
            href="#recruit"
            className="text-slate-600 hover:text-emerald-600 font-medium transition-colors duration-200 ease-out"
          >
            募集要項
          </Link>
          <Link
            href="#company"
            className="text-slate-600 hover:text-emerald-600 font-medium transition-colors duration-200 ease-out"
          >
            会社概要
          </Link>
          <Link
            href="#entry"
            className="bg-emerald-600 text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-700 transition-all duration-200 ease-out shadow-sm hover:shadow-md"
          >
            エントリー
          </Link>
        </nav>
      </div>
    </header>
  );
}
