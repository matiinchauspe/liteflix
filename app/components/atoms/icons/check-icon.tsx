// External Dependencies
import { twMerge } from "tailwind-merge";
// Internal Dependencies
import { IconProps } from "./icons.types";

const CheckIcon = ({ svgClassName }: IconProps) => {
  const className = twMerge(`stroke-white stroke-2 ${svgClassName ?? ""}`);

  return (
    <svg
      width="14"
      height="11"
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M1 5L5 9L13 1" />
    </svg>
  );
};

export default CheckIcon;
