import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Tecnología y Diseño",
  description:
    "Portfolio personal con enfoque tech: proyectos, trayectoria y contacto. Hero con vídeo optimizado y secciones accesibles.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Portfolio | Tecnología y Diseño",
    description:
      "Portfolio personal con enfoque tech: proyectos, trayectoria y contacto.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a href="#inicio" className="skip-link">Saltar al contenido</a>
        <Header />
        {children}
      </body>
    </html>
  );
}
