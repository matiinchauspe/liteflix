import { Bebas_Neue } from "@next/font/google";
import "./globals.css";

import { Header } from "@components/molecules";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={bebasNeue.className}>
      <head />
      <body className="flex flex-col p-10 w-full h-[100vh]">
        <Header />
        <main className="flex flex-1">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
