import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

// Fonte display (títulos) e fonte do corpo
const display = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// 👉 Troque pelo domínio real quando publicar (usado no og:image)
const SITE_URL = "https://www.pitbullcortes.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Pitbull Cortes | Barbearia Premium em Guaraituba",
  description:
    "Barbearia Pitbull Cortes - Cortes premium, barba e estilo com atitude. Agende pelo WhatsApp: (41) 98468-0992. Rua Enéas Marques, 139 - Guaraituba.",
  keywords: [
    "barbearia",
    "Pitbull Cortes",
    "corte masculino",
    "barba",
    "degradê navalhado",
    "Guaraituba",
  ],
  icons: { icon: "/pitlogoheader.webp", apple: "/pitlogoheader.webp" },
  openGraph: {
    title: "Pitbull Cortes | Barbearia Premium em Guaraituba",
    description:
      "Cortes premium com atitude. Agende seu horário pelo WhatsApp e viva a experiência Pitbull Cortes.",
    images: [{ url: "/pithero.webp", width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pitbull Cortes | Barbearia Premium em Guaraituba",
    images: ["/pithero.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050608",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // habilita safe-area em celulares com notch
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
