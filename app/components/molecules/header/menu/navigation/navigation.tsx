import { motion, Variants } from "framer-motion";

import { OPTIONS_KEY_MAP } from "@constants/menu";
import { Transcript } from "@lang/es";

import { MenuItem } from "./menu-item";

const navigationVariants: Variants = {
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

const Navigation = ({ onClose }: any) => (
  <motion.ul
    className="p-20 absolute top-[100px] right-0 sm:w-[100%] md:w-[760px] z-10"
    variants={navigationVariants}
  >
    {Object.keys(OPTIONS_KEY_MAP).map((key: string) => (
      <MenuItem
        key={key}
        navPath={OPTIONS_KEY_MAP[key].path}
        disable={OPTIONS_KEY_MAP[key].disabled}
        onClose={onClose}
      >
        {Transcript.es.home.menu.options[OPTIONS_KEY_MAP[key].name]}
      </MenuItem>
    ))}
  </motion.ul>
);

export default Navigation;
