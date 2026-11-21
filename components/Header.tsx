"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/config";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";

/** Header fixo: transparente no topo → preto com blur ao rolar */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body com o menu mobile aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-brand/20 bg-ink/85 py-2 shadow-deep backdrop-blur-xl"
          : "bg-gradient-to-b from-black/70 to-transparent py-4"
      }`}
    >
      {/*
        Mobile: logo na esquerda, hambúrguer na direita (justify-between).
        Desktop (lg+): logo, menu e botão agrupados e centralizados,
        com o MESMO espaçamento entre logo→menu e menu→botão (gap-10 / xl:gap-12).
      */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:justify-center lg:gap-10 lg:px-8 xl:gap-12">
        {/* Logo */}
        <a
          href="#inicio"
          aria-label="Pitbull Cortes - ir para o início"
          className="shrink-0"
        >
          <Image
            src="/pitlogoheader.webp"
            alt="Logo Pitbull Cortes"
            width={160}
            height={64}
            priority
            className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105 sm:h-14"
          />
        </a>

        {/* Navegação desktop */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-5 lg:flex xl:gap-8"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative whitespace-nowrap text-[13px] font-medium uppercase tracking-widest xl:text-sm text-white/80 transition-colors hover:text-brand"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Botão WhatsApp (desktop) + hambúrguer (mobile/tablet) */}
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar no WhatsApp"
            className="btn btn-brand hidden whitespace-nowrap px-5 py-3 text-xs sm:inline-flex"
          >
            <WhatsAppIcon width={16} height={16} />
            Agendar no WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-sm border border-brand/40 text-brand transition-colors hover:bg-brand hover:text-ink lg:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`overflow-y-auto transition-[max-height,opacity,visibility] duration-500 lg:hidden ${
          open ? "visible max-h-[calc(100vh-4.5rem)] opacity-100" : "invisible max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Menu mobile"
          className="mx-auto flex max-w-7xl flex-col px-5 pb-6 pt-4"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 font-display text-2xl uppercase tracking-wider text-white transition-colors hover:text-brand"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-brand mt-6"
          >
            <WhatsAppIcon width={18} height={18} />
            Agendar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
} 