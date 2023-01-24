"use client";
// External dependencies
import { useState } from "react";
import { motion } from "framer-motion";
// Internal dependencies
import { Transcript } from "@lang/es";
import { translateXLeftToRight } from "@animations/index";
import { useMediaQuery } from "@hooks/index";

import { Button, Text } from "@components/atoms";
import { PlayIcon, PlusIcon } from "@components/atoms/icons";

const Actions = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { isSmall } = useMediaQuery();

  return (
    <motion.div
      variants={translateXLeftToRight}
      initial="initial"
      animate="animate"
      className="flex md:flex-row md:justify-start sm:flex-col sm:justify-center gap-4 mt-3"
    >
      <Button
        variant="filled"
        onClick={() => {
          setIsPlaying(!isPlaying);
        }}
        className="md:px-8 md:py-4"
      >
        <div className="flex gap-2 sm:justify-center items-center">
          <PlayIcon svgClassName="-mt-[3px]" />
          <Text variant="body1" color="text-white">
            {Transcript.es.home.infoActions.actions.play}
          </Text>
        </div>
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          console.log("my list");
        }}
        className="md:px-8 md:py-4"
      >
        <div className="flex sm:justify-center gap-2 items-center">
          <PlusIcon svgClassName="-mt-[3px]" />
          <Text variant="body1" color="text-white">
            {Transcript.es.home.infoActions.actions.myList}
          </Text>
        </div>
      </Button>
    </motion.div>
  );
};

export default Actions;
