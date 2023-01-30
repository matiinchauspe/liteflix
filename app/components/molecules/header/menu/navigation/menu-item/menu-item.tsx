// External Dependencies
import { motion } from "framer-motion";
// Internal Dependencies
import { translateYItem } from "../../menu.animations";
import { MenuItemProps } from "./menu-item.types";

const MenuItem = ({ children }: MenuItemProps) => (
  <motion.li
    className="flex items-center list-none mb-[20px] p-2"
    variants={translateYItem}
  >
    {children}
  </motion.li>
);

export default MenuItem;
