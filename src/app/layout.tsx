import CookiebotScript from "@/components/scripts/CookiebotScript";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VisitorIdSetter from "@/components/VisitorIdSetter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Cookiebot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <CookiebotScript />
      <body className="min-h-full flex flex-col">
        <main className="p-4 max-w-7xl mx-auto">{children}</main>
        <VisitorIdSetter />
      </body>
    </html>
  );
}
