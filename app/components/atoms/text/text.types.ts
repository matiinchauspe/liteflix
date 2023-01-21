type Variants = "h1" | "h2" | "h3" | "body1" | "body2";
type Weights = "light" | "regular" | "bold";

export interface TextProps {
  variant?: Variants;
  inline?: boolean;
  weight?: Weights;
  color?: string;
  children: React.ReactNode;
}
