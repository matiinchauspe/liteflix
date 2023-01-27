import { Variants } from "framer-motion";

export interface WrappedAnimateProps {
  animation?: Variants;
  initial?: string;
  animate?: string;
  exit?: string;
  className?: string;
  children: React.ReactNode;
}
