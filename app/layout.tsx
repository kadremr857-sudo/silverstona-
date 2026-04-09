import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Silverstone AI – Geleneksel İşletmeleri Geleceğin Teknolojisine Bağlıyoruz",
  description:
    "Silverstone AI; Web Tasarım, n8n Otomasyonları ve AI Çözümleri ile iletişim ve iş akışlarınızı geleceğe taşıyan teknoloji ortağınız.",
  keywords: "web tasarım, n8n otomasyon, AI ajanlar, yapay zeka, Silverstone AI, Alanya, Antalya",
  robots: "index, follow",
  openGraph: {
    title: "Silverstone AI – Dijital Dönüşümde Güvenilir Ortağınız",
    description:
      "Web Tasarım, n8n Otomasyonları ve AI Çözümleri ile işletmenizi geleceğe taşıyoruz.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
