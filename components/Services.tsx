import type { ComponentType, SVGProps } from "react";
import { whatsappFor } from "@/lib/config";
import {
  ComboIcon,
  CrownIcon,
  EyeIcon,
  RazorIcon,
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
    name: "Corte com Freestyle",
    description: "Corte com desenhos e detalhes na navalha para um visual único e cheio de personalidade.",
    price: "R$ 40",
    icon: CrownIcon,
  },
  {
    name: "Combo",
    description: "O pacote completo para sair da cadeira com o visual impecável da cabeça ao queixo.",
    price: "R$ 60",
    icon: ComboIcon,
    featured: true,
  },
  {
    name: "Degradê",
    description: "Transição perfeita entre os comprimentos, com acabamento limpo e preciso.",
    price: "R$ 35",
    icon: RazorIcon,
  },
  {
    name: "Corte Social",
    description: "Corte clássico, alinhado e elegante, ideal para o dia a dia e o trabalho.",
    price: "R$ 30",
    icon: ScissorsIcon,
  },
  {
    name: "Sobrancelha e Bigode",
    description: "Acabamento discreto que valoriza o rosto sem perder a naturalidade.",
    price: "R$ 10",
    icon: EyeIcon,
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

        {/*
          Mobile/tablet: 1 coluna.
          Desktop: grade de 6 colunas, cada card ocupa 2 → 3 cards na primeira linha
          e 2 centralizados na segunda (o 4º card começa na coluna 2).
        */}
        <div className="mx-auto mt-16 grid max-w-lg gap-6 lg:max-w-none lg:grid-cols-6">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.name}
              delay={(i % 3) * 120}
              className={`min-w-0 lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""}`}
            >
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
                      Valor
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