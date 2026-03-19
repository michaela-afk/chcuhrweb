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

export const metadata: Metadata = {
  title: "CHCUHR – HR konzultace a implementace",
  description: "Pomáháme firmám budovat lepší pracoviště prostřednictvím praktického, moderního a byznysově orientovaného HR.",
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
  return (
    <html lang="cs" className={poppins.variable}>
      <body className="antialiased font-[family-name:var(--font-poppins)]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
