import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
// import { BsWhatsapp } from "react-icons/bs";

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
        className={`${Transformabold.variable} ${Transformasemi.variable} antialiased overflow-x-hidden`}
      >
        {children}
        <Toaster />
        <span className="fixed md:h-[3.5rem] h-[2.5rem] w-[2.5rem] md:w-[3.5rem] rounded-full bg-white z-[100] bottom-[1rem] right-[1rem] md:bottom-[2rem] md:right-[2rem] flex items-center justify-center"><img src="https://th.bing.com/th/id/OIP.ztn9aYI3yR4V8hd6yMELZAHaHb?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="rounded-full md:h-[3rem] w-[2rem] h-[2rem] md:w-[3rem]" /></span>
      </body>
    </html>
  );
}
