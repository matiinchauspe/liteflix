// External Dependencies
import NextLink from "next/link";
import { twMerge } from "tailwind-merge";
// Internal Dependencies
import { LinkProps } from "./link.types";

const Link = ({ href, children, className = "" }: LinkProps) => {
  const classes = twMerge(`text-white ${className}`);

  return (
    <NextLink href={href} className={classes}>
      {children}
    </NextLink>
  );
};

export default Link;
