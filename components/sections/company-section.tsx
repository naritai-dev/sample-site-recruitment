import type { CompanyInfo } from '@/types';

const companyInfo: CompanyInfo[] = [
  {
    label: '会社名',
    value: 'ナリタイカンパニー株式会社（Naritai Company  Ltd.）',
  },
  {
    label: '代表者',
    value: '代表取締役社長 成田 タイ',
  },
  {
    label: '設立',
    value: '2015年4月1日',
  },
  {
    label: '資本金',
    value: '1,000万円',
  },
  {
    label: '所在地',
    value: '〒150-0000\n東京都渋谷区神南1-1-1 ナリタイビル 5F',
  },
  {
    label: '従業員数',
    value: '45名（2025年1月現在）',
  },
];

export function CompanySection(): JSX.Element {
  return (
    <section id="company" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">COMPANY</h2>
          <p className="text-slate-500 text-sm">会社概要</p>
        </div>

        <div className="border-t border-slate-200">
          {companyInfo.map((info, index) => (
            <div
              key={info.label}
              className={`flex flex-col md:flex-row ${
                index < companyInfo.length - 1 ? 'border-b border-slate-200' : ''
              }`}
            >
              <div className="w-full md:w-1/3 py-4 font-bold text-slate-600">{info.label}</div>
              <div className="w-full md:w-2/3 py-4 text-slate-800 whitespace-pre-line">
                {info.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
