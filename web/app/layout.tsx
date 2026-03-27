import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const baseUrl = "https://www.chcuhr.cz";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "CHCUHR – HR konzultace a implementace",
    template: "%s | CHCUHR",
  },
  description: "Pomáháme firmám budovat lepší pracoviště prostřednictvím praktického, moderního a byznysově orientovaného HR.",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: baseUrl,
    siteName: "CHCUHR",
    title: "CHCUHR – HR konzultace a implementace",
    description: "Pomáháme firmám budovat lepší pracoviště prostřednictvím praktického, moderního a byznysově orientovaného HR.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CHCUHR – HR konzultace a implementace" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CHCUHR – HR konzultace a implementace",
    description: "Pomáháme firmám budovat lepší pracoviště prostřednictvím praktického, moderního a byznysově orientovaného HR.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "G0uyG_Wfu10T-c7G2q7Z3aiqZJYoAIkwMVPsWI7ThqE",
  },
  icons: {
    icon: [{ url: "/favicon-square.png", type: "image/png" }],
    shortcut: "/favicon-square.png",
    apple: "/favicon-square.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CHCUHR",
    url: baseUrl,
    logo: `${baseUrl}/favicon-square.png`,
    description: "HR konzultace a implementace pro malé a střední firmy v České republice.",
    email: "info@chcuhr.cz",
    inLanguage: "cs",
    sameAs: [],
  };

  return (
    <html lang="cs" className={poppins.variable}>
      <body className="antialiased font-[family-name:var(--font-poppins)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
