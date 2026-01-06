import Image from 'next/image';
import type { CultureImage } from '@/types';

const cultureImages: CultureImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'オープンな会議風景',
    caption: 'オープンな会議風景',
    colSpan: 2,
    rowSpan: 2,
  },
  {
    src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    alt: 'オフィス',
    colSpan: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    alt: 'チーム',
    colSpan: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'ランチミーティング',
    caption: 'ランチミーティング',
    colSpan: 2,
  },
];

export function CultureSectionDesktop(): JSX.Element {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-row justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-2">CULTURE</h2>
            <p className="text-emerald-600 font-bold">働く環境と仲間たち</p>
          </div>
          <p className="text-slate-500 text-sm">※写真はイメージです</p>
        </div>

        <div className="grid grid-cols-4 gap-4 h-[500px]">
          {cultureImages.map((image, index) => {
            const colSpanClass =
              image.colSpan === 2 ? 'col-span-2' : 'col-span-1';
            const rowSpanClass = image.rowSpan === 2 ? 'row-span-2' : '';
            return (
              <div
                key={`${image.src}-${index}`}
                className={`${colSpanClass} ${rowSpanClass} rounded-2xl overflow-hidden relative group`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                  sizes={
                    image.colSpan === 2 ? '50vw' : '25vw'
                  }
                />
                {image.caption !== undefined ? (
                  <div className="absolute inset-0 bg-black/30 flex items-end p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                    <span className="text-white font-bold">{image.caption}</span>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
