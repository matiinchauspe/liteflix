"use client";
// External dependencies
import { motion } from "framer-motion";
// Internal dependencies
import { WrappedAnimateProps } from "./wrapped-animate.types";

const WrappedAnimate = ({
  animation,
  initial,
  animate,
  className = "",
  children,
}: WrappedAnimateProps) => (
  <motion.div
    initial={initial}
    animate={animate}
    variants={animation}
    className={className}
  >
    {children}
  </motion.div>
);

export default WrappedAnimate;
