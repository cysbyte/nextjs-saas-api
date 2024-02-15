import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RecordModal from "@/components/shared/RecordModal";

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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}