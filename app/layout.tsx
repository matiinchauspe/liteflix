import { Bebas_Neue } from "@next/font/google";
import "./globals.css";

import { Header } from "@components/index";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={bebasNeue.className}>
      <head />
      <body className="p-10 w-full">
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
