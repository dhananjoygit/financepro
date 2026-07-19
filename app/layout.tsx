import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://financepro.com"),

  title: {
    default: "FinancePro | Finance News & Investing Guides",
    template: "%s | FinancePro",
  },

  description:
    "FinancePro delivers trusted finance news, investing guides, personal finance tips and market insights for readers worldwide.",

  keywords: [
    "finance",
    "finance news",
    "investing",
    "stock market",
    "personal finance",
    "economy",
    "money",
    "retirement",
    "credit cards",
    "market analysis",
  ],

  authors: [
    {
      name: "FinancePro",
    },
  ],

  openGraph: {
    title: "FinancePro | Finance News & Investing Guides",
    description:
      "Trusted finance news, investing guides and market insights for modern investors.",
    url: "https://financepro.com",
    siteName: "FinancePro",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FinancePro",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FinancePro | Finance News & Investing Guides",
    description:
      "Trusted finance news, investing guides and market insights for modern investors.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FinancePro",
    url: "https://financepro.com",

    publisher: {
      "@type": "Organization",
      name: "FinancePro",
      url: "https://financepro.com",

      logo: {
        "@type": "ImageObject",
        url: "https://financepro.com/logo.png",
      },
    },

    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://financepro.com/search?q={search_term_string}",

      "query-input":
        "required name=search_term_string",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 text-slate-900">

        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <ThemeProvider>

          <Header />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />

          <ScrollToTop />

        </ThemeProvider>

      </body>
    </html>
  );
}