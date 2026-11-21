import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/config";
import { CrownIcon, ScissorsIcon, ShieldIcon, WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

const HIGHLIGHTS = [
  { icon: CrownIcon, title: "Atendimento premium", text: "Experiência exclusiva do início ao fim" },
  { icon: ScissorsIcon, title: "Profissionais experientes", text: "Técnica apurada e olhar de detalhe" },
  { icon: ShieldIcon, title: "Higiene e qualidade", text: "Produtos e materiais de primeira linha" },
];

/**
 * HERO
 * A imagem (pithero.webp) tem a logo centralizada, então ela fica no topo,
 * totalmente visível, e o texto/CTAs entram logo abaixo, sem cobrir a logo.
 * As bordas da imagem são pretas e se fundem com o fundo da página.
 */
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col overflow-hidden bg-ink"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-x-0 top-0 h-[58vh] lg:h-[66vh]">
        <Image
          src="/pithero.webp"
          alt="Pitbull Cortes - barbearia premium"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-contain"
        />
        {/* Degradês: topo (header), laterais (desktop) e base (preto → transparente) */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink/80 to-transparent" />
        <div className="absolute inset-y-0 left-0 hidden w-1/5 bg-gradient-to-r from-ink to-transparent lg:block" />
        <div className="absolute inset-y-0 right-0 hidden w-1/5 bg-gradient-to-l from-ink to-transparent lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-[12%] bg-gradient-to-t from-ink to-transparent" />
      </div>

      {/* Brilho azul sutil atrás do conteúdo */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(30,144,255,.16),transparent_65%)]" />

      {/* Conteúdo */}
      <div className="relative mx-auto w-full max-w-5xl px-5 pb-14 pt-[56vh] text-center lg:pt-[63vh]">
        <Reveal>
          <span className="eyebrow justify-center before:hidden">
            Barbearia Premium · Guaraituba
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-display text-[2.6rem] uppercase leading-[0.95] tracking-wide sm:text-6xl lg:text-7xl">
            Estilo que <span className="text-brand-gradient">impõe respeito</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Cortes premium com atitude. Agende seu horário e viva a experiência
            Pitbull Cortes.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar pelo WhatsApp"
              className="btn btn-brand w-full sm:w-auto"
            >
              <WhatsAppIcon width={18} height={18} />
              Agendar pelo WhatsApp
            </a>
            <a href="#servicos" className="btn btn-outline w-full sm:w-auto">
              Conhecer Serviços
            </a>
          </div>
        </Reveal>

        {/* Ícones de destaque */}
        <Reveal delay={450}>
          <ul className="mx-auto mt-12 grid max-w-4xl gap-6 border-t border-white/10 pt-8 text-left md:grid-cols-3">
            {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-brand/50 text-brand">
                  <Icon width={22} height={22} />
                </span>
                <span>
                  <span className="block text-sm font-bold uppercase tracking-wider text-white">
                    {title}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-white/60">
                    {text}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
