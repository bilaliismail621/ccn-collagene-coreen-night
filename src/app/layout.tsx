import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: {
    default: "CCN - Collagene Coreen Night | Masque de nuit au collagene",
    template: "%s | CCN - Collagene Coreen Night",
  },
  description:
    "CCN - Collagene Coreen Night, masque de nuit au collagene, testé dermatologiquement, pour une peau hydratée et repulpée au réveil.",
  openGraph: {
    title: "CCN - Collagene Coreen Night",
    description: "Masque de nuit au collagene, testé dermatologiquement.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-2">
          Aller au contenu
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
