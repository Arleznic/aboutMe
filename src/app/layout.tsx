import type { Metadata } from "next";
import { Inter, Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | Nicolas Mogollon",
  description: "Personal website of Nicolas Mogollon. See what I am working on.",
  icons: {
    icon: [
      { url: "/sites/aboutme/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${karla.variable} ${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
