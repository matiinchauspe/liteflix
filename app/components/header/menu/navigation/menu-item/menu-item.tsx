import { motion, Variants } from "framer-motion";

const menuItemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const MenuItem = () => {
  return (
    <motion.li
      className="flex items-center cursor-pointer list-none mb-[20px]"
      variants={menuItemVariants}
    >
      <span className="icon-placeholder border-2" />
      <span className="text-placeholder border-2" />
    </motion.li>
  );
};

export default MenuItem;
