import { WHATSAPP_URL } from "@/lib/config";
import { WhatsAppIcon } from "./Icons";

/** Botão flutuante fixo (todas as seções) com pulso suave */
export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-50 flex h-14 w-14 animate-pulse-ring items-center justify-center rounded-full bg-brand-gradient text-white shadow-[0_10px_30px_-5px_rgba(0,0,0,.8)] transition-all duration-300 hover:scale-110 hover:bg-none hover:bg-white hover:text-ink sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <WhatsAppIcon width={30} height={30} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-sm bg-ink px-3 py-2 text-xs font-bold uppercase tracking-widest text-brand opacity-0 shadow-deep transition-opacity duration-300 group-hover:opacity-100 md:block">
        Agende pelo WhatsApp
      </span>
    </a>
  );
}
