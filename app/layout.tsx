import type { Metadata } from "next";
import { Inter, Fredoka, Lilita_One } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const fredoka = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-fredoka"
});
const lilitaOne = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lilita"
});

export const metadata: Metadata = {
  title: "FlipFlap",
  description: "Chop trees, gather wood, expand your island and earn Web3 rewards in the world of FlipFlap!",
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${fredoka.variable} ${lilitaOne.variable}`}>{children}</body>
    </html>
  );
}


