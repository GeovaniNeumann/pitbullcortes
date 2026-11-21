import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/config";
import { CheckIcon, WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

const DIFFERENTIALS = [
  "Atendimento individual e com hora marcada",
  "Profissional experiente e atualizado nas tendências",
  "Ambiente masculino, confortável e com personalidade",
  "Acabamento na navalha com precisão",
  "Produtos de qualidade e higiene rigorosa",
];

export default function About() {
  return (
    <section id="sobre" className="bg-grain relative overflow-hidden bg-ink py-24 lg:py-32">
      <div className="mx-auto grid max-w-[90rem] items-center gap-12 px-5 lg:grid-cols-[1.25fr_1fr] lg:gap-12 lg:px-8">
        {/* Somente a imagem, sem molduras ou containers */}
        <Reveal direction="left" className="min-w-0">
          <Image
            src="/pitabout.webp"
            alt="Logo da Pitbull Cortes"
            width={1200}
            height={1200}
            sizes="(max-width: 1024px) 100vw, 40rem"
            className="mx-auto h-auto w-full max-w-xl drop-shadow-[0_10px_40px_rgba(30,144,255,.25)] lg:max-w-[40rem]"
          />
        </Reveal>

        {/* Texto */}
        <div className="min-w-0">
          <Reveal direction="right">
            <span className="eyebrow">Nossa história</span>
            <h2 className="section-title">
              Sobre a <span className="text-brand-gradient">Pitbull Cortes</span>
            </h2>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-white/70">
              <p>
                A Pitbull Cortes nasceu da vontade de entregar mais do que um corte:
                um espaço onde o homem se sente forte, confiante e bem cuidado. Aqui
                a tradição da barbearia clássica encontra o estilo urbano e a
                técnica moderna.
              </p>
              <p>
                Nossa filosofia é simples:{" "}
                <strong className="font-semibold text-brand">atitude e excelência</strong>.
                Cada cliente recebe atenção total, acabamento impecável e um visual
                que realmente impõe respeito.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={220}>
            <ul className="mt-8 space-y-3">
              {DIFFERENTIALS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/85 sm:text-base">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <CheckIcon width={14} height={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right" delay={320}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brand transition-colors hover:text-white"
            >
              <WhatsAppIcon width={20} height={20} />
              <span className="border-b border-brand/50 pb-1 transition-colors group-hover:border-white">
                Fale com o Flávio no WhatsApp
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}