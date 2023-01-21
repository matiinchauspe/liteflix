import { motion, Variants } from "framer-motion";

import { MenuItem } from "./menu-item";

const navigationVariants: Variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const Navigation = () => (
  <motion.ul
    className="p-[25px] absolute top-[100px] right-0 w-[300px]"
    variants={navigationVariants}
  >
    {[...Array(5)].map((_, index) => (
      <MenuItem key={index.toString()} />
    ))}
  </motion.ul>
);

export default Navigation;
