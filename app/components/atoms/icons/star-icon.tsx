// External Dependencies
import { twMerge } from "tailwind-merge";
// Internal Dependencies
import { IconProps } from "./icons.types";

const StarIcon = ({ svgClassName }: IconProps) => {
  const className = twMerge(`fill-aquaGreen ${svgClassName ?? ""}`);

  return (
    <svg
      // width="12"
      // height="11"
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M5.81064 0.557022C5.87212 0.376184 6.12788 0.376184 6.18936 0.557023L7.34407 3.95378C7.37132 4.03393 7.44608 4.08825 7.53073 4.08939L11.1181 4.13794C11.309 4.14052 11.3881 4.38377 11.2351 4.49812L8.36141 6.64597C8.2936 6.69666 8.26505 6.78454 8.29011 6.8654L9.3525 10.2922C9.40905 10.4746 9.20214 10.6249 9.04611 10.5148L6.11536 8.44545C6.0462 8.39662 5.9538 8.39662 5.88464 8.44545L2.95389 10.5148C2.79786 10.6249 2.59095 10.4746 2.6475 10.2922L3.70989 6.8654C3.73495 6.78454 3.7064 6.69666 3.63859 6.64597L0.764906 4.49812C0.611916 4.38377 0.690952 4.14052 0.881936 4.13794L4.46927 4.08939C4.55392 4.08825 4.62868 4.03393 4.65593 3.95378L5.81064 0.557022Z" />
    </svg>
  );
};

export default StarIcon;
