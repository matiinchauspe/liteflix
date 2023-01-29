// External Dependencies
import { twMerge } from "tailwind-merge";

// Internal Dependencies
import { InputProps } from "./input.types";

const Input = ({
  placeholder = "Enter text",
  type = "text",
  name = "input",
  className = "",
  ref,
  disabled = false,
  value,
  onChange,
}: InputProps) => {
  const classes = twMerge(
    `bg-transparent py-1 px-5 border-b border-white focus:outline-none 
    focus:border-aquaGreen text-center tracking-[4px] transition-all duration-700 w-[248px] max-w-[100%]
    ${className}`
  );
  return (
    <input
      ref={ref}
      name={name}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      className={classes}
      {...(value && { value })}
      {...(onChange && { onChange })}
    />
  );
};

export default Input;
