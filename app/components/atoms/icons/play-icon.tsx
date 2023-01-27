// External Dependencies
import { twMerge } from "tailwind-merge";
// Internal Dependencies
import { IconProps } from "./icons.types";

const PlayIcon = ({ svgClassName }: IconProps) => {
  const className = twMerge(`stroke-white ${svgClassName ?? ""}`);

  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9423 8.2363L2.625 1.875V14.125L11.9423 8.2363Z"
      />
    </svg>
  );
};

export default PlayIcon;
