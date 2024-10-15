import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainNavigation from "@/components/MainNavigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <MainNavigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
