import { useMediaQuery as useMediaQueryLib } from "react-responsive";

import { SCREEN } from "@constants/breakpoints";

export const useMediaQuery = () => {
  const isLargest = useMediaQueryLib({ minWidth: SCREEN.LARGEST.MIN });
  const isLarge = useMediaQueryLib({
    minWidth: SCREEN.LARGE.MIN,
    maxWidth: SCREEN.LARGE.MAX,
  });
  const isMedium = useMediaQueryLib({
    minWidth: SCREEN.MEDIUM.MIN,
    maxWidth: SCREEN.MEDIUM.MAX,
  });
  const isSmall = useMediaQueryLib({ maxWidth: SCREEN.SMALL.MAX });

  return { isLargest, isLarge, isMedium, isSmall };
};
