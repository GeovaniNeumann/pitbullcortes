import {
  BRAND,
  HOURS,
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_URL,
  WHATSAPP_URL,
} from "@/lib/config";
import { ClockIcon, PinIcon, WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Location() {
  return (
    <section id="localizacao" className="overflow-hidden bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <span className="eyebrow">Venha nos visitar</span>
          <h2 className="section-title">
            Onde <span className="text-brand-gradient">estamos</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          {/* Informações */}
          <Reveal direction="left" className="min-w-0 lg:col-span-2">
            <div className="flex h-full flex-col gap-8">
              <div className="border-l-4 border-brand bg-steel-dark p-6">
                <div className="flex items-start gap-4">
                  <PinIcon width={28} height={28} className="mt-1 shrink-0 text-brand" />
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand">Endereço</h3>
                    <p className="mt-2 font-display text-2xl uppercase leading-tight tracking-wide">
                      Rua Enéas Marques, 139
                      <br />
                      Guaraituba
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-navy bg-steel-dark p-6">
                <div className="flex items-start gap-4">
                  <ClockIcon width={28} height={28} className="mt-1 shrink-0 text-brand" />
                  <div className="w-full">
                    <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand">
                      Horário de funcionamento
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm">
                      {HOURS.map((h) => (
                        <li key={h.day} className="flex justify-between gap-4 border-b border-white/10 pb-2 last:border-0">
                          <span className="text-white/70">{h.day}</span>
                          <span className="font-semibold">{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Como chegar - abrir no Google Maps"
                  className="btn btn-outline flex-1"
                >
                  <PinIcon width={18} height={18} />
                  Como chegar
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Agendar no WhatsApp"
                  className="btn btn-brand flex-1"
                >
                  <WhatsAppIcon width={18} height={18} />
                  Agendar
                </a>
              </div>
            </div>
          </Reveal>

          {/* Mapa */}
          <Reveal direction="right" className="min-w-0 lg:col-span-3">
            <div className="relative h-full min-h-[360px] border border-brand/40 p-2 shadow-deep">
              <iframe
                title={`Mapa - ${BRAND.name}`}
                src={MAPS_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full min-h-[360px] w-full grayscale invert-[.92] contrast-[.9] transition-all duration-500 hover:grayscale-0 hover:invert-0 hover:contrast-100"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}