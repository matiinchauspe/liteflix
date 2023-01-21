import classnames from "classnames";

import { TextProps } from "./text.types";

const Text = ({
  variant = "h1",
  inline,
  weight = "regular",
  color = "black",
  children,
}: TextProps) => {
  // TODO: Move styles to a separate file later
  return (
    <span
      className={`
        ${inline ? "inline-block" : "block"}
        ${color} 
        ${classnames({
          "text-2xl": variant === "h1",
          "text-xl": variant === "h2",
          "text-lg": variant === "h3",
          "text-base": variant === "body1",
          "text-sm": variant === "body2",
        })}
        ${classnames({
          "font-bold": weight === "bold",
          "font-normal": weight === "regular",
          "font-light": weight === "light",
        })}
      `}
    >
      {children}
    </span>
  );
};

export default Text;
