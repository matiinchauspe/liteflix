"use client";

import Image from "next/image";

import { Button } from "@components/index";
import { useStyle } from "./header.style";

const Header = () => {
  const classes = useStyle();

  const handleClick = () => {};

  return (
    <header className="bg-gray-500 flex justify-between bg-transparent items-center py-2">
      {/* Logo and button content - desktop */}
      <div className="flex gap-40 items-center">
        {/* Logo */}
        <div>
          <Image
            src="/images/liteflix-logo.svg"
            alt="logo"
            width={113}
            height={34}
          />
        </div>
        {/* Button */}
        <div>
          <Button onClick={handleClick}>+ Agregar pelicula</Button>
        </div>
      </div>
      {/* Menu */}
      <div>Menu</div>
    </header>
  );
};

export default Header;
