// External Dependencies
import classnames from "classnames";
import NextLink from "next/link";
import { twMerge } from "tailwind-merge";
// Internal Dependencies
import { LinkProps } from "./link.types";

const Link = ({
  href,
  children,
  className = "",
  disabled = false,
  onClick,
}: LinkProps) => {
  const classes = twMerge(
    `text-white ${classnames({
      "text-gray-400 cursor-default pointer-events-none": disabled,
    })} ${className}`
  );

  return (
    <NextLink href={href} className={classes} {...(onClick && { onClick })}>
      {children}
    </NextLink>
  );
};

export default Link;
