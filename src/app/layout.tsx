import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Particle from "./particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compras IBP",
  description: "Site de compras para o patrimonio IBP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Particle />
      <body className="bg-[#72A66A]">{children}</body>
    </html>
  );
}
