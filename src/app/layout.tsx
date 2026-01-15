import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const instrumentSans = localFont({
  src: [
    {
      path: "/fonts/InstrumentSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/InstrumentSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pedro Bonetti | UX/UI Product Designer e Design Systems",

  description: "Product Designer com 4 anos de experiência em Design Systems e processos de UX. Criação de interfaces escaláveis e centradas no usuário, da pesquisa à entrega.",

  openGraph: {
    title: "Pedro Bonetti | UX/UI Product Designer e Design Systems",
    description: "UX Designer/Product Designer com 4 anos de experiência em Design Systems e processos de UX. Criação de interfaces escaláveis e centradas no usuário, da pesquisa à entrega.",
    url: "https://pedrobonetti.com",
    siteName: "Pedro Bonetti Portfolio",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Pedro Bonetti - UX/UI Product Designer Portfolio",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${instrumentSans.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}