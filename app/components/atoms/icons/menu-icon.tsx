// External Dependencies
import { twMerge } from "tailwind-merge";
// Internal Dependencies
import { IconProps } from "./icons.types";

const MenuIcon = ({ svgClassName }: IconProps) => {
  const className = twMerge(`stroke-white ${svgClassName ?? ""}`);

  return (
    <svg
      width="27"
      height="14"
      viewBox="0 0 27 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0 1H27" />
      <path d="M0 7H27" />
      <path d="M10 13H27" />
    </svg>
  );
};

export default MenuIcon;
