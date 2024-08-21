import type { Metadata } from "next";
import { Commissioner } from "next/font/google";
import "./globals.css";

const commissioner = Commissioner({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ducky Footprint Calculator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={commissioner.className}>{children}</body>
    </html>
  );
}
