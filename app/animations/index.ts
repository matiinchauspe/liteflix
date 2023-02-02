import { Variants } from "framer-motion";

export const translateYDownToUp: Variants = {
  hidden: {
    y: "200%",
    transition: { duration: 0.4 },
  },
  visible: {
    y: 0,
    transition: { duration: 0.4, type: "spring", stiffness: 50 },
  },
};

export const translateXLeftToRight: Variants = {
  initial: {
    x: "-200%",
    transition: { duration: 0.4 },
  },
  animate: {
    x: 0,
    transition: { type: "spring", duration: 0.4, delay: 0.3 },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.2,
    },
  },
};

export const scaleMinToPlus: Variants = {
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

export const stagger: Variants = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
