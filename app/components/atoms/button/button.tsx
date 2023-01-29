// External Dependencies
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
// Internal Dependencies
import { ButtonProps } from "./button.types";

const Button = ({
  variant = "text",
  onClick,
  className,
  disabled,
  children,
}: ButtonProps) => {
  const classes = twMerge(`
    tracking-[4px] h-[56px] max-w-[248px]
    ${classnames({
      "md:py-4 md:px-16": variant !== "text",
    })}
    ${classnames({
      "text-grayBlack hover:scale-110 transition-all p-0": variant === "text",
      "bg-grayBlack opacity-90 hover:opacity-100 transition-opacity text-white":
        variant === "filled",
      "border-white border bg-grayBlack opacity-50 hover:opacity-70 transition-opacity text-white":
        variant === "outlined",
      "opacity-60 cursor-default pointer-events-none": disabled,
    })}
    ${className}
  `);
  // TODO: Move styles to a separate file later
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
