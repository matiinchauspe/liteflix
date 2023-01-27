import Link from "next/link";
import { motion, Variants } from "framer-motion";

import { MenuItemProps } from "./menu-item.types";

// TODO: move this later
const menuItemVariants: Variants = {
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

const MenuItem = ({ navPath, disable, onClose, children }: MenuItemProps) => {
  const handleClick = () => onClose();

  return (
    <motion.li
      className="flex items-center cursor-pointer list-none mb-[20px] p-2"
      variants={menuItemVariants}
    >
      <Link
        href={navPath}
        className={`text-gray-300 hover:scale-110 transition-all p-0 tracking-[4px] font-light`}
        onClick={handleClick}
      >
        {children}
      </Link>
    </motion.li>
  );
};

export default MenuItem;
