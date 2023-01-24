"use client";
// External Dependencies
import { motion, useCycle } from "framer-motion";
// import classnames from "classnames";
// import { useMediaQuery } from "react-responsive";

// Internal Dependencies
import { menuIconTranslate } from "./animations";

import { Navigation } from "./navigation";
import { MenuToggle } from "./menu-toggle";

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
          zIndex: -1,
        }}
        variants={{
          open: {
            backgroundColor: "#242424",
            opacity: 0.85,
            zIndex: 10,
            transition: { duration: 0.4 },
          },
          closed: {
            opacity: 0,
            transition: { duration: 0.4, delay: 0.4 },
          },
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
          className={`absolute top-0 right-0 bottom-0 md:w-[760px] sm:w-[100%] bg-[#242424] z-0`}
          variants={{
            open: {
              translateX: "0px",
              background: "#242424",
              opacity: 0.9,
              transition: {
                delayChildren: 0.4,
                duration: 0.4,
              },
              zIndex: 10,
            },
            closed: {
              translateX: "calc(100% - 760px)",
              background: "#242424",
              opacity: 0,
              transition: {
                duration: 0.4,
                delay: 0.4,
              },
              zIndex: -1,
            },
          }}
          animate={isOpen ? "open" : "closed"}
          initial="closed"
        />
        {/* nav toggle - open/close menu */}
        {/* TODO: button with add menu-icon.tsx here */}
        <motion.div
          variants={menuIconTranslate}
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
