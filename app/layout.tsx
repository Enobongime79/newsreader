import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Inter_Tight, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  weight: '400',
  subsets: ['latin'],
});

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
})

const inter = Inter({
  weight: '400',
});

const spaceGrotesk = Space_Grotesk({
  weight: '400',
});

export const metadata: Metadata = {
  title: "Readerly",
  description: "Next generation of reader apps",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
