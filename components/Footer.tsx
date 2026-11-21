import Image from "next/image";
import {
  BRAND,
  HOURS,
  MAPS_VIEW_URL,
  NAV_LINKS,
  WHATSAPP_URL,
} from "@/lib/config";
import BackToTop from "./BackToTop";
import { InstagramIcon, WhatsAppIcon } from "./Icons";

const SOCIALS = [
  { label: "Instagram", href: BRAND.instagram, icon: InstagramIcon },
  { label: "WhatsApp", href: WHATSAPP_URL, icon: WhatsAppIcon },
];

const linkCls = "text-white/60 transition-colors duration-300 hover:text-brand";
const titleCls = "mb-5 font-display text-xl uppercase tracking-widest text-brand";

export default function Footer() {
  return (
    <footer className="relative border-t border-brand/30 bg-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-12 pt-20 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Coluna 1 — Marca */}
        <div>
          <Image
            src="/pitlogoheader.webp"
            alt="Logo Pitbull Cortes"
            width={160}
            height={64}
            className="h-16 w-auto object-contain"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Cortes premium com atitude. Estilo que impõe respeito em Guaraituba.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-ink"
              >
                <Icon width={20} height={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Coluna 2 — Navegação rápida */}
        <nav aria-label="Navegação do rodapé">
          <h3 className={titleCls}>Navegação</h3>
          <ul className="space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkCls}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Coluna 3 — Localização */}
        <div>
          <h3 className={titleCls}>Localização</h3>
          <address className="space-y-4 text-sm not-italic text-white/60">
            <p>{BRAND.addressFull}</p>
            <ul className="space-y-1">
              {HOURS.map((h) => (
                <li key={h.day}>
                  <span className="text-white/80">{h.day}:</span> {h.time}
                </li>
              ))}
            </ul>
            <a
              href={MAPS_VIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold text-brand underline-offset-4 hover:underline"
            >
              Ver no mapa →
            </a>
          </address>
        </div>

        {/* Coluna 4 — Contato */}
        <div>
          <h3 className={titleCls}>Contato</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                WhatsApp: {BRAND.phoneDisplayShort} - {BRAND.owner}
              </a>
            </li>
            <li>
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={MAPS_VIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                Como chegar
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra inferior: copyright + créditos + botão "Voltar ao topo" */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-6 px-5 pb-24 pt-6 sm:flex-row sm:justify-between sm:pb-6 lg:px-8">
          <div className="flex flex-col items-center gap-2 text-center text-xs text-white/40 sm:items-start sm:text-left">
            <p>
              © {new Date().getFullYear()} Pitbull Cortes. Todos os direitos reservados.
            </p>
            <p>
              Desenvolvido por{" "}
              <a
                href="https://www.neumannwebsolutions.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/60 transition-colors duration-300 hover:text-brand"
              >
                Neumann Web Solutions
              </a>
            </p>
          </div>
          <div className="sm:mr-24">
            <BackToTop />
          </div>
        </div>
      </div>
    </footer>
  );
}