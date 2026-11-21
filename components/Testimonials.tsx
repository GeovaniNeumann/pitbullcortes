import { StarIcon } from "./Icons";
import Reveal from "./Reveal";

/** 👉 Substitua pelos depoimentos reais dos clientes */
const TESTIMONIALS = [
  {
    name: "Rafael S.",
    text: "Melhor degradê que já fiz. Atendimento top, ambiente massa e o acabamento é impecável. Já virou minha barbearia fixa.",
  },
  {
    name: "Lucas M.",
    text: "O Flávio não erra. Chego com uma ideia e saio com um visual ainda melhor. Pontualidade e atitude de verdade.",
  },
  {
    name: "Anderson P.",
    text: "Fiz o combo corte + barba e a diferença é gritante. Cuidado em cada detalhe, recomendo demais!",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-steel-dark py-24 lg:py-32" aria-labelledby="depoimentos-title">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,94,215,.2),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Quem passou por aqui</span>
            <h2 id="depoimentos-title" className="section-title">
              O que dizem os <span className="text-brand-gradient">clientes</span>
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-xl gap-6 lg:max-w-none lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="relative h-full border border-white/10 bg-ink p-8 transition-all duration-500 hover:-translate-y-2 hover:border-brand/70 hover:shadow-glow">
                <span
                  aria-hidden
                  className="absolute right-6 top-2 font-display text-8xl leading-none text-brand/15"
                >
                  “
                </span>
                <div className="flex gap-1 text-brand" role="img" aria-label="Avaliação 5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <StarIcon key={k} width={18} height={18} />
                  ))}
                </div>
                <blockquote className="relative mt-5 text-sm leading-relaxed text-white/75">
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient font-display text-lg text-white">
                    {t.name[0]}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-widest">{t.name}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
