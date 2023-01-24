import { Variants } from "framer-motion";

export const menuIconTranslate: Variants = {
  initial: {
    x: "calc(100% - 485px)",
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
    zIndex: 10,
  },
  exit: {
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
};
