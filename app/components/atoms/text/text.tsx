import classnames from "classnames";
import { twMerge } from "tailwind-merge";

import { TextProps } from "./text.types";

const Text = ({
  variant = "body1",
  inline,
  weight = "regular",
  color = "black",
  className = "",
  children,
}: TextProps) => {
  // TODO: Move styles to a separate file later
  const classes = twMerge(`
    ${inline ? "inline-block" : "block"}
    ${color} 
    ${classnames({
      "text-6xl tracking-[16px]": variant === "h1",
      "text-5xl tracking-[10px]": variant === "h2",
      "text-4xl tracking-[8px]": variant === "h3",
      "text-base tracking-[4px]": variant === "body1",
      "text-sm tracking-[2px]": variant === "body2",
    })}
    ${classnames({
      "font-bold": weight === "bold",
      "font-normal": weight === "regular",
      "font-light": weight === "light",
    })}
    ${className}
  `);
  return <span className={classes}>{children}</span>;
};

export default Text;
