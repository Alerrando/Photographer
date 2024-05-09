import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Photographer",
  description: "Photographer site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
