import { Presentation, MousePointer2, Users } from 'lucide-react';
import type { Service } from '@/types';

const services: Service[] = [
  {
    icon: 'presentation',
    title: '経営コンサルティング',
    description:
      '中小企業特有の課題に寄り添い、人事制度設計から経営戦略の立案まで、現場に入り込んで伴走支援を行います。',
  },
  {
    icon: 'mouse-pointer-2',
    title: 'Webマーケティング支援',
    description:
      'HP制作からSNS運用、広告運用まで。地方企業の魅力を全国に届けるためのデジタル戦略を一気通貫でサポートします。',
  },
  {
    icon: 'users',
    title: 'HR/採用支援',
    description:
      '「人が採れない」を解決する。採用ブランディングの構築から、定着率向上のための組織開発までを手掛けます。',
  },
];

const iconMap: Record<string, JSX.Element> = {
  presentation: <Presentation className="w-8 h-8" aria-hidden="true" />,
  'mouse-pointer-2': <MousePointer2 className="w-8 h-8" aria-hidden="true" />,
  users: <Users className="w-8 h-8" aria-hidden="true" />,
};

export function ServicesSection(): JSX.Element {
  return (
    <section id="services" className="py-20 bg-emerald-50 bg-pattern">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">SERVICES</h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto" />
          <p className="mt-4 text-slate-500">私たちの事業</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 ease-out hover:-translate-y-0.5"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-6">
                {iconMap[service.icon] ?? null}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
