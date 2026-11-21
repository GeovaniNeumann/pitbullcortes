/**
 * ============================================================
 *  CONFIGURAÇÕES CENTRAIS DA PITBULL CORTES
 *  Edite aqui: telefone, endereço, horários, redes sociais.
 * ============================================================
 */

export const BRAND = {
  name: "Pitbull Cortes",
  owner: "Flávio",
  phoneDisplay: "(41) 98468-0992",
  phoneDisplayShort: "41 98468-0992",
  whatsappNumber: "5541984680992",
  address: "Rua Enéas Marques, 139 - Guaraituba",
  addressFull: "Rua Enéas Marques, 139 - Bairro Guaraituba",
  // 👉 SUBSTITUA pelos links reais das redes sociais
  instagram: "https://www.instagram.com/pitbullcortes041/",
} as const;

/** Mensagem pré-preenchida enviada ao WhatsApp */
export const WHATSAPP_MESSAGE =
  "Olá Flávio, gostaria de agendar um horário na Pitbull Cortes";

/** Link único usado em TODOS os botões de WhatsApp */
export const WHATSAPP_URL = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

/** Gera link do WhatsApp com mensagem customizada (ex.: por serviço) */
export const whatsappFor = (service: string) =>
  `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    `Olá Flávio, gostaria de agendar: ${service} na Pitbull Cortes`
  )}`;

const MAP_QUERY = encodeURIComponent(
  "Rua Enéas Marques, 139, Guaraituba, Colombo - PR"
);
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;
export const MAPS_VIEW_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

/** 👉 Horários editáveis (placeholder) */
export const HOURS = [
  { day: "Segunda a Sexta", time: "09h às 20h" },
  { day: "Sábado", time: "08h às 18h" },
  { day: "Domingo", time: "Fechado" },
];

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];
