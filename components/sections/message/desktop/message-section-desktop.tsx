'use client';

import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

export function MessageSectionDesktop(): JSX.Element {
  const [contentRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px',
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">MESSAGE</h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto" />
          <p className="mt-4 text-slate-500">代表挨拶</p>
        </div>

        <div
          ref={contentRef}
          className={cn(
            'flex flex-row items-center gap-12 transition-all duration-500 ease-out',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          )}
        >
          <div className="w-1/2 relative">
            <div className="absolute -top-2 -left-2 w-full h-full border border-emerald-50 rounded-lg" />
            <Image
              src="/images/unnamed.jpg"
              alt="代表取締役社長"
              width={800}
              height={600}
              className="relative rounded-lg shadow-sm w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div className="w-1/2">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 border-l border-emerald-500 pl-4">
              「中小企業だからこそできる」
              <br />
              圧倒的な成長環境がここにある。
            </h3>
            <p className="text-slate-600 leading-8 mb-8">
              こんにちは、ナリタイカンパニー株式会社代表の成田です。
              <br />
              <br />
              私たちは「日本の中小企業を元気にする」をミッションに掲げ、コンサルティングとテクノロジーの力でクライアントの課題解決を行っています。
              <br />
              <br />
              大手企業のような完成された歯車ではなく、自らがエンジンとなって組織を動かす経験。それが当社にはあります。「こだわり」を持って仕事に取り組み、昨日の自分を超えていきたい。そんな熱い想いを持った仲間を待っています。
            </p>
            <div className="mt-8">
              <p className="font-bold text-base text-slate-500 mb-2">代表取締役社長</p>
              <div className="font-sans text-2xl font-medium text-slate-900">
                成田 タイ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
