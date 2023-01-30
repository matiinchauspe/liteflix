"use client";
// External Dependencies
import { AnimatePresence } from "framer-motion";
// Internal Dependencies
import { Transcript } from "@lang/es";
import { useMediaQuery, useDelayedAnimateCycle } from "@hooks/index";
import { InfoProps } from "./info.types";
import { useMovieStore } from "@state/store";

import { AnimatedText } from "@components/molecules";

const Info = ({ title: movieTitle }: InfoProps) => {
  const { movieSelected } = useMovieStore();
  const { visible } = useDelayedAnimateCycle(movieSelected);
  const { isLargest, isLarge, isSmall } = useMediaQuery();

  const textSizesTitle = () => {
    if (isLargest) return "h1";
    if (isSmall) return "h1";
    if (isLarge) return "h2";

    return "h2";
  };

  const title = movieSelected?.title ?? movieTitle;

  return (
    <div className="flex flex-col gap-2">
      <AnimatePresence>
        {visible && (
          <div className="flex gap-2">
            <AnimatedText
              text={Transcript.es.home.infoActions.by}
              color="text-white"
              weight="light"
              variant="body1"
            />
            <AnimatedText
              text={Transcript.es.global.liteflix}
              color="text-white"
              weight="bold"
              variant="body1"
            />
          </div>
        )}
      </AnimatePresence>
      <div className="flex">
        <AnimatePresence>
          {visible && (
            <AnimatedText
              text={title}
              color="text-aquaGreen"
              weight="bold"
              variant={textSizesTitle()}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Info;
