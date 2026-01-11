import { Briefcase, Code } from 'lucide-react';
import type { JobPosition } from '@/types';

const jobPositions: JobPosition[] = [
  {
    title: '総合職・コンサルタント営業',
    icon: 'briefcase',
    badge: '新卒・中途',
    badgeColor: 'emerald-600',
    description:
      'クライアント企業の経営課題をヒアリングし、解決策を提案します。ただの商品売りではなく、パートナーとして信頼される仕事です。',
    salary: '25.5',
    salaryNote: '※固定残業代（45時間分）を含む。超過分は別途支給。',
    requirements: [
      '成長意欲が高く、自ら考え行動できる方',
      '人とのコミュニケーションを楽しめる方',
    ],
    location: '東京本社（渋谷） ※リモートワーク制度あり',
  },
  {
    title: 'Webマーケター・ディレクター',
    icon: 'code',
    badge: '中途・経験者',
    badgeColor: 'emerald-700',
    description:
      '自社メディアの運営や、クライアントのWeb戦略立案・実行を担当します。数字に基づいたロジカルな思考が求められます。',
    salary: '28.0',
    salaryNote: '※経験・能力を考慮の上決定します。',
    requirements: [
      'Webマーケティングの実務経験（1年以上）',
      'PDCAを回し、数値改善にコミットできる方',
    ],
    location: '東京本社（渋谷） ※フルリモート相談可',
  },
];

const iconMap: Record<string, JSX.Element> = {
  briefcase: <Briefcase className="w-5 h-5" aria-hidden="true" />,
  code: <Code className="w-5 h-5" aria-hidden="true" />,
};

export function RecruitSectionDesktop(): JSX.Element {
  return (
    <section id="recruit" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest text-sm uppercase">
            Join Us
          </span>
          <h2 className="text-4xl font-bold text-slate-800 mt-2 mb-4">
            RECRUITMENT
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto" />
          <p className="mt-4 text-slate-500">募集要項</p>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-2 gap-8 mb-16">
          {jobPositions.map((position) => {
            const badgeBgClass =
              position.badgeColor === 'emerald-700'
                ? 'bg-emerald-700'
                : 'bg-emerald-600';
            const badgeTextClass =
              position.badgeColor === 'emerald-700'
                ? 'text-emerald-700'
                : 'text-emerald-600';
            return (
              <div
                key={position.title}
                className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <div className={`${badgeBgClass} p-4 flex justify-between items-center`}>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {iconMap[position.icon] ?? null} {position.title}
                  </h3>
                  <span
                    className={`bg-white ${badgeTextClass} text-xs px-2 py-1 rounded font-bold`}
                  >
                    {position.badge}
                  </span>
                </div>
                <div className="p-8">
                  <p className="text-slate-600 mb-6">{position.description}</p>

                  <div className="space-y-4">
                    <div className="flex border-b border-slate-100 pb-3">
                      <div className="w-24 shrink-0 text-slate-400 font-bold text-sm">給与</div>
                      <div className="text-slate-800 font-medium">
                        月給 <span className="text-2xl font-bold text-emerald-600">{position.salary}</span>{' '}
                        万円 〜
                        <br />
                        <span className="text-xs text-slate-500">{position.salaryNote}</span>
                      </div>
                    </div>
                    <div className="flex border-b border-slate-100 pb-3">
                      <div className="w-24 shrink-0 text-slate-400 font-bold text-sm">求める人物</div>
                      <div className="text-slate-800 text-sm">
                        {position.requirements.map((req, index) => (
                          <span key={index}>
                            ・{req}
                            {index < position.requirements.length - 1 ? <br /> : null}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-24 shrink-0 text-slate-400 font-bold text-sm">勤務地</div>
                      <div className="text-slate-800 text-sm">{position.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Common Requirements Table */}
        <div className="bg-white rounded-xl shadow-sm p-10">
          <h3 className="text-xl font-bold text-slate-800 mb-6 border-l border-emerald-500 pl-4">
            共通待遇・福利厚生
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-slate-100">
                  <th className="py-4 px-4 bg-slate-50 w-1/4 font-bold text-slate-600 text-sm">
                    昇給・賞与
                  </th>
                  <td className="py-4 px-4 text-slate-800 text-sm">
                    昇給：年2回（4月・10月）※人事考課による
                    <br />
                    賞与：年1回（業績連動決算賞与）
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <th className="py-4 px-4 bg-slate-50 font-bold text-slate-600 text-sm">
                    勤務時間
                  </th>
                  <td className="py-4 px-4 text-slate-800 text-sm">
                    9:30 ～ 18:30（実働8時間・休憩1時間）
                    <br />
                    ※フレックスタイム制あり（コアタイム 11:00～15:00）
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <th className="py-4 px-4 bg-slate-50 font-bold text-slate-600 text-sm">
                    休日・休暇
                  </th>
                  <td className="py-4 px-4 text-slate-800 text-sm">
                    <span className="font-bold text-emerald-600">年間休日125日以上</span>
                    <br />
                    完全週休2日制（土日）、祝日、GW、夏季休暇、年末年始休暇、慶弔休暇、有給休暇（入社半年後に10日付与）、アニバーサリー休暇
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <th className="py-4 px-4 bg-slate-50 font-bold text-slate-600 text-sm">
                    福利厚生
                  </th>
                  <td className="py-4 px-4 text-slate-800 text-sm">
                    社会保険完備、交通費全額支給、書籍購入補助、資格取得支援制度、オフィス内ドリンク無料、PC貸与（Mac/Win選択可）、副業可（規定あり）
                  </td>
                </tr>
                <tr>
                  <th className="py-4 px-4 bg-slate-50 font-bold text-slate-600 text-sm">
                    選考フロー
                  </th>
                  <td className="py-4 px-4 text-slate-800 text-sm">
                    エントリー → 書類選考 → 一次面接（オンライン） → 適性検査 → 最終面接（対面） →
                    内定
                    <br />
                    <span className="text-xs text-slate-500">
                      ※面接回数は変更になる場合があります。
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div id="entry" className="mt-16 text-center">
          <div className="bg-emerald-900 rounded-3xl p-16 relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-500 rounded-full opacity-20 blur-2xl" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-emerald-400 rounded-full opacity-20 blur-2xl" />

            <h3 className="text-4xl font-bold mb-6 relative z-10">
              まずは話を聞いてみませんか？
            </h3>
            <p className="text-emerald-100 mb-8 max-w-xl mx-auto relative z-10">
              履歴書は不要です。カジュアル面談からスタートも可能です。
              <br />
              あなたの「なりたい」姿を教えてください。
            </p>
            <div className="flex flex-row justify-center gap-4 relative z-10">
              <button
                type="button"
                className="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-all duration-200 ease-out shadow-sm hover:shadow-md"
              >
                エントリーフォームへ
              </button>
              <button
                type="button"
                className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-200 ease-out"
              >
                Wantedlyで見る
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
