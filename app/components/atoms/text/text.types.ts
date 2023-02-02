import { ReactNode } from 'react'

import { TextVariants, Weights } from "@internal-types/text";

export type TextProps = {
  variant?: TextVariants;
  inline?: boolean;
  weight?: Weights;
  color?: string;
  className?: string;
  children: ReactNode;
}
