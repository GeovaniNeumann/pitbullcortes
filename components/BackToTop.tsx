"use client";

import { ArrowUpIcon } from "./Icons";

/** Botão "Voltar ao topo" – fica dentro da barra inferior do footer (sem posição flutuante) */
export default function BackToTop() {
  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Voltar ao topo"
      className="group inline-flex items-center gap-3 border border-brand/60 bg-ink px-4 py-3 text-xs font-bold uppercase tracking-widest text-brand transition-all duration-300 hover:-translate-y-1 hover:bg-brand hover:text-ink hover:shadow-glow"
    >
      Voltar ao topo
      <ArrowUpIcon
        width={18}
        height={18}
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
      />
    </button>
  );
}