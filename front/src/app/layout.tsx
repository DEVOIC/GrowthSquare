import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

const Transformabold = localFont({
  src: "./fonts/TransformaSans_Trial-Bold-BF660ca8e06490f.otf",  variable: "--font-transforma",
  weight: "100 700",
});
const Transformasemi = localFont({
  src: "./fonts/TransformaMix_Trial-SemiBold-BF660ca8e1a26a1.otf",
  variable: "--font-transforma-SemiBold",
  weight: "100 500",
});

export const metadata: Metadata = {
  title: "GrowthSquare",
  description: "Website for GrowthSquare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Transformabold.variable} ${Transformasemi.variable} antialiased `}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
