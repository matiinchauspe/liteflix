import { Variants } from "framer-motion";

export const translateXClose = {
  largeScreen: <Variants>{
    initial: {
      x: "calc(100% - 400px)", // lg = 485px - 128px(px-32)
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
  },
  mediumScreen: <Variants>{
    initial: {
      x: "calc(100% - 460px)",
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
  },
  smallScreen: <Variants>{
    initial: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.4,
      },
      zIndex: 10,
    },
    exit: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.4,
      },
    },
  },
};

export const fadeInOutBackground: Variants = {
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
};

export const translateXBackground: Variants = {
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
};

export const staggerAndVisibility: Variants = {
  open: {
    visibility: "visible",
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    visibility: "hidden",
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const translateYItem: Variants = {
  open: {
    y: 0,
    visibility: "visible",
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    y: 50,
    visibility: "hidden",
    transition: {
      duration: 0.4,
    },
  },
};
