"use client";

import { IconPlus } from "@tabler/icons";
import Image from "next/image";

import { Transcript } from "@lang/es";
import { OPTIONS_KEY_MAP } from "@constants/menu";

import { Button } from "@components/atoms";
import { UserSelect } from "./user-select";

import { useStyle } from "./header.style";

const Header = () => {
  const classes = useStyle();

  const handleClick = () => {
    // console.log("asdasd");
  };

  return (
    <header className="flex bg-transparent justify-between items-center py-2">
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
          <Button onClick={handleClick}>
            <div className="flex gap-2">
              <IconPlus size={20} stroke={2} />
              {Transcript.es.home.menu.options[OPTIONS_KEY_MAP.ADD_MOVIE]}
            </div>
          </Button>
        </div>
      </div>
      {/* User interaction */}
      <UserSelect />
    </header>
  );
};

export default Header;
