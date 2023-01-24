import { Variants } from "framer-motion";

export const scaleVariants: Variants = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 0.3,
      type: "spring",
      stiffness: 80,
    },
  },
};
