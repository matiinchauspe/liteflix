"use client";

import { motion, Variants, useCycle } from "framer-motion";
import classnames from "classnames";

import { Navigation } from "./navigation";
import { MenuToggle } from "./menu-toggle";

// TODO: refactor this later - add theme context for colors
const sidebarVariants: Variants = {
  open: {
    // clipPath: "circle(1000px at 80% 70px)",
    translateX: "-300px",
    background: "#242424",
    opacity: 0.9,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    // clipPath: "circle(30px at 74% 75px)",
    translateX: "0px",
    background: "#242424",
    opacity: 0.5,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
};

const Menu = () => {
  const [isOpen, setIsOpen] = useCycle(false, true);

  const handleToggle = () => {
    setIsOpen();
  };

  // TODO: refactor this later
  return (
    <>
      {/* NOTE: background page effects */}
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
        }}
        variants={{
          open: {
            backgroundColor: "#242424",
            opacity: 0.7,
            transition: { duration: 0.4 },
          },
          closed: { opacity: 0, transition: { duration: 0.4, delay: 0.4 } },
        }}
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
          className={`absolute top-0 right-0 bottom-0 md:w-[300px]`}
          variants={sidebarVariants}
        />
        {/* nav toggle - open/close menu */}
        {/* TODO: button with add menu-icon.tsx here */}
        <MenuToggle toggle={handleToggle} />
        {/* </motion.div> */}
        <Navigation />
      </motion.nav>
    </>
  );
};

export default Menu;
