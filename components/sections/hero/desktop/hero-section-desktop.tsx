import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export function HeroSectionDesktop(): JSX.Element {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden clip-path-slant bg-slate-900">
      {/* Background Image with Overlay */}
      <Image
        src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="オフィスで会議をするチーム（2人の男性と4人の女性）"
        fill
        className="object-cover opacity-60"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/50 to-slate-900/40" />

      <div className="relative z-10 container mx-auto px-6 text-left flex items-center justify-between">
        <div className="w-2/3">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-sm font-semibold mb-6 animate-pulse">
            2027年度 新卒・中途採用 募集中
          </span>
          <h1 className="text-7xl font-black text-white leading-tight mb-6 tracking-wide">
            <span className="text-emerald-400">「なりたい」</span>自分に、
            <br />
            最短距離で駆け上がれ。
          </h1>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
            ナリタイカンパニー株式会社は、あなたの「野心」と「こだわり」を燃料に、
            <br />
            企業の成長と個人の自己実現を同時に叶える場所です。
          </p>
          <div className="flex flex-row gap-4 justify-start">
            <Link
              href="#recruit"
              className="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition flex items-center justify-center gap-2"
            >
              募集職種を見る <ArrowDown className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              href="#about"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-900 transition"
            >
              私たちについて
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
