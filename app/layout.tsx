import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans({weight: "600", style: "normal"});

export const metadata: Metadata = {
  title: "Ullas Kunder - Task next webapp",
  description: "build using next.js, react, scss",
  keywords: [
    "ullaskunder",
    "ULLAS KUNDER",
    "SOFTWARE ENGINEEE",
    "DEVELOPER",
    "OPEN SOURCE",
    "JS",
    "WEB DEVELOPMENT",
    "SOLUTIONS"
  ],
  viewport: {
    width: "device-width",
    initialScale: 1.0,
    minimumScale: 1.0,
  },
  authors: [{ name: "Ullas Kunder", url: "https://ullaskunder.tech" }],
  creator: "Ullas Kunder",
  publisher: "Ullas Kunder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
