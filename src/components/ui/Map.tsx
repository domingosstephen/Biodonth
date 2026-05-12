import { buildMapEmbedUrl } from '@/content/contact';

type MapProps = {
  query: string;
  title?: string;
  className?: string;
  aspectClassName?: string;
};

export function Map({
  query,
  title = 'Mapa com a localização da Biodonth',
  className = '',
  aspectClassName = 'aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[560px]',
}: MapProps) {
  const src = buildMapEmbedUrl(query);

  return (
    <div
      className={`relative ${aspectClassName} border-[1.5px] border-bronze bg-concrete-warm overflow-hidden ${className}`}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allow="fullscreen"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
      />
    </div>
  );
}
