import type { Metadata } from "next";
import "./globals.css";
import { Inter as NunitoSans } from "next/font/google";
import { cn } from "@/shared/ui/utils";
import { AppProvider } from "./_providers/app-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const fontSans = NunitoSans ({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )} */}
      <body
        className={cn(
          "flex font-sans antialiased bg-white bg-slate-50",
          fontSans.variable,
        )}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
