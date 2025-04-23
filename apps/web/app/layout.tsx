import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Noto_Sans_Thai as FontSans } from "next/font/google";

import { cn } from "../../../packages/ui/src/helpers/cn";

const fontSans = FontSans({
  subsets: ["latin", "thai"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Turborepo Starter Kit",
  description: "Turborepo Starter Kit",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background min-h-dvh font-sans antialiased",
          fontSans.variable,
        )}
      >
        <div className="bg-background relative flex min-h-dvh flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
