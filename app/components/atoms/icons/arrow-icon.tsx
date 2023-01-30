// External Dependencies
import { twMerge } from "tailwind-merge";
// Internal Dependencies
import { IconProps } from "./icons.types";

const ArrowIcon = ({ svgClassName }: IconProps) => {
  const className = twMerge(`stroke-white stroke-2 ${svgClassName ?? ""}`);

  return (
    <svg
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M1 1L6.54557 6.54557L12.0911 1" />
    </svg>
  );
};

export default ArrowIcon;
