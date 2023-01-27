// External Dependencies
import { twMerge } from "tailwind-merge";
// Internal Dependencies
import { IconProps } from "./icons.types";

const PlusIcon = ({ svgClassName }: IconProps) => {
  const className = twMerge(`stroke-white ${svgClassName ?? ""}`);

  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M7.5 0V14" />
      <path d="M14.5 7L0.5 7" />
    </svg>
  );
};

export default PlusIcon;
