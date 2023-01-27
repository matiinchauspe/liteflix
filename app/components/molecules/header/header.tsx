// External dependencies
import Image from "next/image";
import Link from "next/link";
// Internal dependencies
import { Transcript } from "@lang/es";
import { OPTIONS_KEY_MAP } from "@constants/menu";
import { scaleVariants } from "./animations";

import { Text } from "@components/atoms";
import { PlusIcon } from "@components/atoms/icons";
import { WrappedAnimate } from "@components/molecules";
import { UserSelect } from "./user-select";
import { Menu } from "./menu";

const Header = () => (
  <header className="flex justify-between items-center">
    {/* Logo and button content - desktop */}
    <WrappedAnimate
      animation={scaleVariants}
      initial="initial"
      animate="animate"
      className="flex gap-10 xs:justify-between lg:gap-20 items-center"
    >
      <div className="flex md:hidden">
        <Menu />
      </div>
      {/* Logo */}
      <Image
        src="/images/liteflix-logo.svg"
        alt="logo"
        // hardcoded values
        width={113}
        height={34}
        priority
      />
      <Link
        href="/add-movie"
        className={`hidden md:flex gap-2 items-center text-gray-300 hover:scale-110 transition-all p-0 tracking-[4px] font-light mt-[5px] z-0`}
      >
        <PlusIcon svgClassName="-mt-[3px]" />
        <Text variant="body1" color="text-white">
          {Transcript.es.home.menu.options[OPTIONS_KEY_MAP.ADD_MOVIE.name]}
        </Text>
      </Link>
    </WrappedAnimate>

    {/* User interaction */}
    <WrappedAnimate
      initial="initial"
      animate="animate"
      animation={scaleVariants}
      className="flex gap-10 items-center"
    >
      <div className="hidden md:flex">
        <Menu />
      </div>
      <UserSelect />
    </WrappedAnimate>
  </header>
);

export default Header;
