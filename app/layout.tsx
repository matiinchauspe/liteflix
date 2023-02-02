import React from "react";
import localFont from "@next/font/local";

import "./globals.css";
import "simplebar-react/dist/simplebar.min.css";

import { Header } from "@components/molecules";

const bebasNeue = localFont({
  src: [
    {
      path: "./fonts/Bebas-Neue/BebasNeueRegular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Bebas-Neue/BebasNeueBold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Bebas-Neue/BebasNeueLight.woff",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-bebas-neue",
  fallback: ["sans-serif"],
});

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" className={`${bebasNeue.variable}`}>
    <head />
    <body className="flex flex-col pt-5 md:px-16 lg:px-32 w-full h-[100vh] overflow-x-hidden md:overflow-y-hidden relative bg-grayBlack">
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
    </body>
  </html>
);

export default RootLayout;
