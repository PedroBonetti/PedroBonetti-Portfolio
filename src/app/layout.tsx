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
  title: "Pedro Bonetti",
  description: "UX/UI Designer",
  openGraph: {
    title: "Pedro Bonetti",
    description: "UX/UI Designer",
    // url: "https://seusite.com",
    siteName: "Pedro Bonetti - Portfolio",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Pedro Bonetti - Portfolio Preview",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}