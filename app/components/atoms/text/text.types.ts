import { TextVariants, Weights } from "@internal-types/text";

export interface TextProps {
  variant?: TextVariants;
  inline?: boolean;
  weight?: Weights;
  color?: string;
  className?: string;
  children: React.ReactNode;
}
