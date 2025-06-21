import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "turkish agancy",
  description: "this is beauty site for finding university in turkish",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >

        <HeroHeader />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
