import { BRAND } from "@/lib/config";
import { ExternalIcon, ImageIcon, InstagramIcon } from "./Icons";
import Reveal from "./Reveal";

/**
 * Galeria com placeholders.
 * 👉 Para usar fotos reais: coloque em /public/galeria/ e troque cada item
 *    por <Image src="/galeria/corte-1.webp" ... fill className="object-cover" />
 */
const ITEMS = [
  { label: "Barba Modelada" },
  { label: "Corte Clássico" },
  { label: "Corte + Barba" },
  { label: "Acabamento na Navalha" },
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

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.label} delay={i * 100}>
              <figure
                className="group relative aspect-[4/5] w-full overflow-hidden border border-white/10 bg-gradient-to-br from-steel to-steel-dark"
                aria-label={`${item.label} (imagem de exemplo)`}
              >
                {/* Placeholder visual */}
                <div className="absolute inset-0 flex items-center justify-center text-white/10 transition-transform duration-700 group-hover:scale-110">
                  <ImageIcon width={64} height={64} />
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,144,255,.12),transparent_55%)]" />

                {/* Overlay no hover */}
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/90 via-ink/50 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [@media(hover:none)]:opacity-100">
                  <span className="translate-y-4 font-display text-xl uppercase tracking-wide transition-transform duration-500 group-hover:translate-y-0 [@media(hover:none)]:translate-y-0">
                    {item.label}
                  </span>
                </figcaption>
                <span className="absolute inset-0 border-2 border-brand opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
