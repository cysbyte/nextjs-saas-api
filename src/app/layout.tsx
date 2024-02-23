import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RecordModal from "@/components/shared/RecordModal";
import { useEffect } from "react";
import favicon from './favicon.ico'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Minimax AI Voice Generator",
  description: "Minimax AI Voice Generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href={favicon.src} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}