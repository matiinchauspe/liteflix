import { useMediaQuery as useMediaQueryLib } from "react-responsive";

import { BreakpointConstants } from "@constants/index";

/**
 * It returns an object with four properties, each of which is a boolean that indicates whether the
 * current screen size matches the corresponding breakpoint
 * @returns An object with 4 properties.
 */
export const useMediaQuery = () => {
  const isLargest = useMediaQueryLib({
    minWidth: BreakpointConstants.SCREEN.LARGEST.MIN,
  });
  const isLarge = useMediaQueryLib({
    minWidth: BreakpointConstants.SCREEN.LARGE.MIN,
    maxWidth: BreakpointConstants.SCREEN.LARGE.MAX,
  });
  const isMedium = useMediaQueryLib({
    minWidth: BreakpointConstants.SCREEN.MEDIUM.MIN,
    maxWidth: BreakpointConstants.SCREEN.MEDIUM.MAX,
  });
  const isSmall = useMediaQueryLib({
    maxWidth: BreakpointConstants.SCREEN.SMALL.MAX,
  });

  return { isLargest, isLarge, isMedium, isSmall };
};
