import Image from 'next/image';

export function MessageSectionMobile(): JSX.Element {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">MESSAGE</h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto" />
          <p className="mt-4 text-slate-600">代表挨拶</p>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="w-full relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-emerald-100 rounded-lg" />
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="代表取締役社長"
              width={800}
              height={600}
              className="relative rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div className="w-full">
            <h3 className="text-xl font-bold text-slate-800 mb-4 border-l-4 border-emerald-500 pl-4">
              「中小企業だからこそできる」
              <br />
              圧倒的な成長環境がここにある。
            </h3>
            <p className="text-slate-600 leading-7 mb-6 text-sm">
              こんにちは、ナリタイカンパニー株式会社代表の成田です。
              <br />
              <br />
              私たちは「日本の中小企業を元気にする」をミッションに掲げ、コンサルティングとテクノロジーの力でクライアントの課題解決を行っています。
              <br />
              <br />
              大手企業のような完成された歯車ではなく、自らがエンジンとなって組織を動かす経験。それが当社にはあります。「こだわり」を持って仕事に取り組み、昨日の自分を超えていきたい。そんな熱い想いを持った仲間を待っています。
            </p>
            <div className="mt-4">
              <p className="font-bold text-base">代表取締役社長</p>
              <div className="h-10 mt-2 -ml-2 opacity-80 font-sans text-xl text-slate-700">
                成田 タイ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
