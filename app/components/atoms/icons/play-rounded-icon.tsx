// External Dependencies
import { twMerge } from "tailwind-merge";
// Internal Dependencies
import { IconProps } from "./icons.types";

const PlayRoundedIcon = ({ svgClassName }: IconProps) => {
  const className = twMerge(`stroke-white fill-[#242424]${svgClassName ?? ""}`);

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="20" r="19.5" fillOpacity="0.5" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.6484 20.2701L16 13V27L26.6484 20.2701Z"
        fill="#242424"
      />
    </svg>
  );
};

export default PlayRoundedIcon;
