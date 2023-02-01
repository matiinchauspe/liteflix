import { TextVariants, Weights } from "@internal-types/text";

export type AnimatedCharactersProps = {
  text: string;
  variant?: TextVariants;
  weight?: Weights;
  color?: string;
  className?: string;
}
