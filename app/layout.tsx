import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
