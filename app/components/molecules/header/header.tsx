"use client";
// External dependencies
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Internal dependencies
import { Transcript } from "@lang/es";
import { Menu as MenuUtils } from "@utils/index";
import { scaleMinToPlus } from "@animations/index";
import {} from "@constants/route-path";

import { PlusIcon } from "@components/atoms/icons";
import { WrappedAnimate } from "@components/molecules";
import { UserSelect } from "./user-select";
import { Menu } from "./menu";

const Header = () => {
  const pathname = usePathname();

  const isHome = pathname === "/home";

  return (
    <header className="flex justify-between items-center px-10 md:px-0">
      {/* Logo and button content - desktop */}
      <WrappedAnimate
        animation={scaleMinToPlus}
        initial="initial"
        animate="animate"
        className="flex flex-1 md:flex-initial gap-0 md:gap-10 justify-between lg:gap-20 items-center"
      >
        <div className="flex md:hidden">
          <Menu />
        </div>
        {/* Logo */}
        <div className="flex flex-1 justify-center md:justify-start">
          <Image
            src="/images/liteflix-logo.svg"
            alt="logo"
            // hardcoded values
            width={113}
            height={34}
            priority
          />
        </div>
        <Link
          href={isHome ? "/add-movie" : "/"}
          className={`hidden md:flex gap-2 items-center text-white hover:scale-110 transition-all p-0 tracking-[4px] font-bold mt-[5px] z-0`}
        >
          {isHome ? (
            <>
              <PlusIcon svgClassName="-mt-[3px] stroke-2" />
              {
                Transcript.es.home.menu.options[
                  MenuUtils.OPTIONS_KEY_MAP.ADD_MOVIE.name
                ]
              }
            </>
          ) : (
            Transcript.es.global.goHome
          )}
        </Link>
      </WrappedAnimate>
      {/* User interaction */}
      <WrappedAnimate
        initial="initial"
        animate="animate"
        animation={scaleMinToPlus}
        className="flex gap-10 items-center"
      >
        <div className="hidden md:flex">
          <Menu />
        </div>
        <UserSelect />
      </WrappedAnimate>
    </header>
  );
};

export default Header;
