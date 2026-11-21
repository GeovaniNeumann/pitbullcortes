import { WHATSAPP_URL } from "@/lib/config";
import { WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

export default function CtaFinal() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden border-y border-brand/30 bg-ink py-28 lg:py-40"
    >
      {/* Detalhes em azul elétrico */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(30,144,255,.18),transparent_55%),radial-gradient(circle_at_50%_100%,rgba(11,94,215,.35),transparent_55%)]" />
      <div className="absolute left-0 top-0 h-24 w-24 border-l-2 border-t-2 border-brand/70 sm:h-40 sm:w-40" aria-hidden />
      <div className="absolute bottom-0 right-0 h-24 w-24 border-b-2 border-r-2 border-brand/70 sm:h-40 sm:w-40" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <span className="eyebrow justify-center before:hidden">Seu horário está esperando</span>
          <h2 className="font-display text-[2.6rem] uppercase leading-[0.95] tracking-wide sm:text-6xl lg:text-8xl">
            Pronto para <span className="text-brand-gradient">mudar seu visual?</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-6 max-w-xl text-white/65">
            Chame o Flávio agora no WhatsApp e garanta seu horário na Pitbull Cortes.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar agora pelo WhatsApp"
            className="btn btn-brand mt-10 w-full animate-pulse-ring px-6 py-5 text-sm sm:mt-12 sm:w-auto sm:px-10 sm:py-6 sm:text-lg"
          >
            <WhatsAppIcon width={26} height={26} />
            Agendar agora no WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
