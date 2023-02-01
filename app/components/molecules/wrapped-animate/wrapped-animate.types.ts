import { Variants } from "framer-motion";

export type WrappedAnimateProps = {
  animation?: Variants;
  initial?: string;
  animate?: string;
  exit?: string;
  className?: string;
  children: React.ReactNode;
}
