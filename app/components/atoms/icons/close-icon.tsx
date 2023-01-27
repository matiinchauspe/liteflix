// External Dependencies
import { twMerge } from "tailwind-merge";
// Internal Dependencies
import { IconProps } from "./icons.types";

const CloseIcon = ({ svgClassName }: IconProps) => {
  const className = twMerge(`stroke-white ${svgClassName ?? ""}`);

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M1.5147 1.51472L18.4853 18.4853" strokeLinecap="square" />
      <path d="M1.5147 18.4853L18.4853 1.51472" strokeLinecap="square" />
    </svg>
  );
};

export default CloseIcon;
