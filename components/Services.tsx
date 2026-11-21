import type { ComponentType, SVGProps } from "react";
import { whatsappFor } from "@/lib/config";
import {
  BeardIcon,
  ComboIcon,
  ScissorsIcon,
  WhatsAppIcon,
} from "./Icons";
import Reveal from "./Reveal";

type Service = {
  name: string;
  description: string;
  price: string; // 👉 edite os preços aqui
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  featured?: boolean;
};

const SERVICES: Service[] = [
  {
    name: "Corte Masculino",
    description: "Corte moderno ou clássico, feito sob medida para o seu estilo e formato de rosto.",
    price: "R$ 00,00",
    icon: ScissorsIcon,
  },
  {
    name: "Barba",
    description: "Modelagem completa com toalha quente, navalha e produtos que cuidam da pele.",
    price: "R$ 00,00",
    icon: BeardIcon,
  },
  {
    name: "Corte + Barba Combo",
    description: "O pacote completo para sair da cadeira com o visual impecável da cabeça ao queixo.",
    price: "R$ 00,00",
    icon: ComboIcon,
    featured: true,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-steel-dark py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">O que fazemos</span>
            <h2 className="section-title">
              Nossos <span className="text-brand-gradient">Serviços</span>
            </h2>
            <p className="mt-5 text-white/60">
              Técnica, precisão e atitude em cada detalhe. Escolha o seu serviço e
              agende direto pelo WhatsApp.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-lg gap-6 lg:max-w-none lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 120}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden border bg-ink p-8 transition-all duration-500 hover:-translate-y-2 hover:border-brand hover:shadow-glow ${
                  s.featured ? "border-brand/60" : "border-white/10"
                }`}
              >
                {s.featured && (
                  <span className="absolute right-0 top-0 bg-navy px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    Mais pedido
                  </span>
                )}
                {/* Brilho no hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/0 blur-3xl transition-colors duration-500 group-hover:bg-brand/20"
                />

                <span className="relative flex h-14 w-14 items-center justify-center border border-brand/50 text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-ink">
                  <s.icon width={28} height={28} />
                </span>

                <h3 className="relative mt-6 font-display text-2xl uppercase tracking-wide">
                  {s.name}
                </h3>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-white/60">
                  {s.description}
                </p>

                <div className="relative mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-white/10 pt-6">
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.25em] text-white/40">
                      A partir de
                    </span>
                    <span className="font-display text-3xl text-brand-gradient">{s.price}</span>
                  </div>
                  <a
                    href={whatsappFor(s.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Agendar ${s.name} pelo WhatsApp`}
                    className="inline-flex items-center gap-2 border border-brand/60 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-brand transition-all duration-300 hover:bg-navy hover:border-navy hover:text-white"
                  >
                    <WhatsAppIcon width={14} height={14} />
                    Agendar
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
