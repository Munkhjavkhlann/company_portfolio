// app/layout.tsx
"use client";

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./globals.css";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const scroll = new LocomotiveScroll({});

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
