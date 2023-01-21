// External Dependencies
import classnames from "classnames";
// Internal Dependencies
import { ButtonProps } from "./button.types";

const Button = ({ variant = "text", onClick, children }: ButtonProps) => {
  const handleClick = () => {
    console.log("clicked!");
    onClick();
  };

  // TODO: Move styles to a separate file later
  return (
    <button
      className={`
        tracking-[4px] h-[56px] max-w-md-[248px]
        ${classnames({
          "md:py-4 md:px-16": variant !== "text",
        })}
        ${classnames({
          "text-grayBlack hover:scale-110 transition-all p-0":
            variant === "text",
          "bg-grayBlack opacity-90 hover:opacity-100 transition-opacity text-white":
            variant === "filled",
          "border-white border-2 bg-grayBlack opacity-30 hover:opacity-50 transition-opacity text-white":
            variant === "outlined",
        })}
      `}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
