import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "FinancePro",
  description: "Trusted Finance News & Investing Guides",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-100 text-slate-900 antialiased">
        <Header />

        <div className="min-h-screen">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}