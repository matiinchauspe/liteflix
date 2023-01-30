"use client";
// External dependencies
import { motion, AnimatePresence } from "framer-motion";
// Internal dependencies
import { Transcript } from "@lang/es";
import { translateXLeftToRight } from "@animations/index";
import { useDelayedAnimateCycle } from "@hooks/index";
import { useMovieStore } from "@state/store";

import { Button, Text } from "@components/atoms";
import { PlayIcon, PlusIcon } from "@components/atoms/icons";

const Actions = () => {
  const { movieSelected } = useMovieStore();
  const { visible } = useDelayedAnimateCycle(movieSelected);

  const handleActions = (action: string) => () => {
    console.warn(action);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          variants={translateXLeftToRight}
          initial="initial"
          animate="animate"
          className="flex flex-col justify-center md:flex-row md:justify-start gap-4 mt-3"
        >
          <Button
            variant="filled"
            onClick={handleActions("Playing!")}
            className="md:px-8 md:py-4"
          >
            <div className="flex gap-2 justify-center items-center">
              <PlayIcon svgClassName="-mt-[3px]" />
              <Text variant="body1" color="text-white">
                {Transcript.es.home.infoActions.actions.play}
              </Text>
            </div>
          </Button>
          <Button
            variant="outlined"
            onClick={handleActions("Added to my list")}
            className="md:px-8 md:py-4"
          >
            <div className="flex justify-center gap-2 items-center">
              <PlusIcon svgClassName="-mt-[3px]" />
              <Text variant="body1" color="text-white">
                {Transcript.es.home.infoActions.actions.myList}
              </Text>
            </div>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Actions;
