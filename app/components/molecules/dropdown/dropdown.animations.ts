import { Variants } from "framer-motion";

export const fadeInOut: Variants = {
  enter: {
    opacity: 1,
    y: 0,
    display: "block",
  },
  exit: {
    y: -5,
    opacity: 0,
    transition: {
      duration: 0.3,
      // delayChildren: 0.3,
      // staggerChildren: 0.1,
      // staggerDirection: -1,
    },
    transitionEnd: {
      display: "none",
    },
  },
};
