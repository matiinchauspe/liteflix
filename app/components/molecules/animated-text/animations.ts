import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.025,
      delayChildren: 0.5,
    },
  },
};

export const itemVariants: Variants = {
  hidden: {
    y: "200%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};
