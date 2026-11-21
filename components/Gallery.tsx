import Image from "next/image";
import { BRAND } from "@/lib/config";
import { ExternalIcon, InstagramIcon } from "./Icons";
import Reveal from "./Reveal";

/**
 * Galeria com fotos reais.
 * Os arquivos ficam na pasta /public:
 *   /public/galeria1.webp
 *   /public/galeria2.webp
 *   /public/galeria3.webp
 * 👉 Para trocar uma foto, substitua o arquivo ou altere o `src`.
 */
const ITEMS = [
  {
    src: "/galeria1.webp",
    label: "Corte com Freestyle",
    alt: "Degradê com riscos freestyle na lateral da cabeça",
    wide: false,
  },
  {
    src: "/galeria2.webp",
    label: "Degradê + Barba",
    alt: "Degradê baixo com barba alinhada",
    wide: false,
  },
  {
    src: "/galeria3.webp",
    label: "Freestyle",
    alt: "Corte com desenho freestyle e degradê na lateral",
    wide: true, // no mobile ocupa as 2 colunas
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="overflow-hidden bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">Nosso trabalho</span>
              <h2 className="section-title">
                <span className="text-brand-gradient">Galeria</span> de cortes
              </h2>
            </div>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand transition-colors hover:text-white"
            >
              <InstagramIcon width={18} height={18} />
              Veja mais no Instagram
              <ExternalIcon width={14} height={14} />
            </a>
          </div>
        </Reveal>

        {/* Mobile: 2 colunas (a 3ª foto ocupa a linha inteira). Desktop: 3 colunas */}
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {ITEMS.map((item, i) => (
            <Reveal
              key={item.src}
              delay={i * 100}
              className={`min-w-0 ${item.wide ? "col-span-2 md:col-span-1" : ""}`}
            >
              <figure
                className={`group relative w-full overflow-hidden border border-white/10 bg-steel-dark ${
                  item.wide ? "aspect-[4/3] md:aspect-[3/4]" : "aspect-[3/4]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover object-[50%_45%] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay com o nome do corte (sempre visível em telas de toque) */}
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/90 via-ink/30 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:p-5 [@media(hover:none)]:opacity-100">
                  <span className="translate-y-4 font-display text-lg uppercase tracking-wide transition-transform duration-500 group-hover:translate-y-0 sm:text-xl [@media(hover:none)]:translate-y-0">
                    {item.label}
                  </span>
                </figcaption>

                {/* Borda azul no hover */}
                <span className="pointer-events-none absolute inset-0 border-2 border-brand opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}