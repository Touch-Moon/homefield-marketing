import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Homefield Marketing — Grow Your Business",
    template: "%s | Homefield Marketing",
  },
  description:
    "Home-grown on the Canadian prairies, Homefield Marketing helps local prairie businesses grow with proven marketing solutions.",
  metadataBase: new URL("https://homefieldmarketing.ca"),
  openGraph: {
    siteName: "Homefield Marketing",
    type: "website",
    locale: "en_CA",
  },
  // Prevents iOS from auto-zooming on form inputs
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        {/* Preconnect to image CDNs used by project portfolio images */}
        <link rel="preconnect" href="https://homefieldmarketing-v1770048921.websitepro-cdn.com" />
        <link rel="preconnect" href="https://homefieldmarketing.ca" />
      </head>
      <body className={`${montserrat.variable} ${openSans.variable}`}>
        {/* Skip navigation — visually hidden until focused via keyboard */}
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
