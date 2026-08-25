import type { Metadata, Viewport } from "next";
import SiteChrome from "@/components/SiteChrome";
import { SITE } from "@/lib/content";
import { PRIMARY_KEYWORDS } from "@/lib/seo";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14532d",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `Australian Salary After Tax ${SITE.year} — Free Pay Calculator`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [...PRIMARY_KEYWORDS],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: `Australian Salary & Pay After Tax ${SITE.year}`,
    description: SITE.description,
    type: "website",
    locale: "en_AU",
    url: SITE.url,
    siteName: SITE.name,
    images: [{ url: "/icon.svg", width: 512, height: 512, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Australian Salary Calculator ${SITE.year}`,
    description: SITE.description,
    images: ["/icon.svg"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
