"use client";
// External Dependencies
import { motion, useCycle } from "framer-motion";
// Internal Dependencies
import {
  translateXClose,
  fadeInOutBackground,
  translateXBackground,
} from "./menu.animations";
import { useMediaQuery } from "@hooks/useMediaQuery";

import { Navigation } from "./navigation";
import { MenuToggle } from "./menu-toggle";

const Menu = () => {
  const [isOpen, setIsOpen] = useCycle(false, true);
  const { isLargest, isLarge, isMedium } = useMediaQuery();

  const handleToggle = () => {
    setIsOpen();
  };

  const translateMenuIcon = () => {
    if (isLarge || isLargest) {
      return translateXClose.largeScreen;
    }
    if (isMedium) return translateXClose.mediumScreen;

    return translateXClose.smallScreen;
  };

  return (
    <>
      {/* NOTE: background page effects */}
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
        }}
        variants={fadeInOutBackground}
        animate={isOpen ? "open" : "closed"}
      />
      {/* NOTE: nav */}
      <motion.nav
        className="flex justify-end"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        {/* nav background */}
        <motion.div
          className={`absolute top-0 right-0 bottom-0 w-[100%] md:w-[760px] bg-[#242424] z-0`}
          variants={translateXBackground}
          animate={isOpen ? "open" : "closed"}
          initial="closed"
        />
        {/* nav toggle - open/close menu */}
        <motion.div
          variants={translateMenuIcon()}
          initial="exit"
          animate={isOpen ? "initial" : "exit"}
        >
          <MenuToggle toggle={handleToggle} opened={isOpen} />
        </motion.div>
        {/* </motion.div> */}
        <Navigation onClose={handleToggle} />
      </motion.nav>
    </>
  );
};

export default Menu;
