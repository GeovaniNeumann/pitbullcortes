import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050608", // preto profundo (igual ao fundo da logo)
        brand: {
          DEFAULT: "#1E90FF",
          light: "#5CB3FF",
          dark: "#0B5ED7",
        },
        navy: {
          DEFAULT: "#0B3A8A", // azul profundo (acento secundário)
          light: "#1450B8",
        },
        steel: {
          DEFAULT: "#1B2027", // cinza chumbo azulado
          light: "#2A313B",
          dark: "#0C0F13",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #1B7FE8 0%, #0F66D6 55%, #0A4FB8 100%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(30,144,255,.6), 0 18px 50px -12px rgba(30,144,255,.35)",
        deep: "0 30px 60px -20px rgba(0,0,0,.9)",
      },
      keyframes: {
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(30,144,255,.55)" },
          "70%": { boxShadow: "0 0 0 18px rgba(30,144,255,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(30,144,255,0)" },
        },
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "pulse-ring": "pulseRing 2.2s ease-out infinite",
        "float-y": "floatY 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
