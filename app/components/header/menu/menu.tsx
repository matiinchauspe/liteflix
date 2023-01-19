"use client";

import { motion, Variants, useCycle } from "framer-motion";
import classnames from "classnames";

import { Navigation } from "./navigation";
import { MenuToggle } from "./menu-toggle";

// TODO: refactor this later - add theme context for colors
const sidebarVariants: Variants = {
  open: {
    clipPath: "circle(1000px at 80% 70px)",
    background: "#242424",
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    clipPath: "circle(30px at 74% 75px)",
    background: "#fff",
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

  return (
    <motion.nav
      className={`flex justify-end`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div
        className={`opacity-80 absolute top-0 right-0 bottom-0 w-[300px]`}
        variants={sidebarVariants}
      />
      <MenuToggle toggle={handleToggle} />
      <Navigation />
    </motion.nav>
  );
};

export default Menu;
