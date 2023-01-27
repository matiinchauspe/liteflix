"use client";
// External dependencies
import { motion, useCycle, Variants } from "framer-motion";
// Internal dependencies
import { Date } from "@utils/index";
import { MovieItemProps } from "./movie-item.types";
import { useMediaQuery } from "@hooks/index";
import { fadeIn } from "@animations/index";

import { PlayRoundedIcon, StarIcon } from "@components/atoms/icons";
import { Text, Button } from "@components/atoms";
import { AnimatedText } from "@components/molecules";

const MovieItem = ({ movie }: MovieItemProps) => {
  const [isOver, setOver] = useCycle(false, true);
  const { isLargest, isLarge, isMedium, isSmall } = useMediaQuery();

  const handleOver = (value: any) => () => {
    setOver(value);
  };

  // Responsible resolutions
  const textSizes = () => {
    if (isLarge || isMedium) return "body2";
    if (isLargest) return "body1";
    // return h3
    if (isSmall) return "body1";
  };

  return (
    <motion.div
      key={movie.id}
      className="w-[100%] h-[100%] relative rounded-md after:content-['\A'] after:absolute after:w-[100%] after:h-[100%] 
      after:top-0 after:left-0 after:bg-grayBlack after:opacity-30 after:transition-all after:duration-300 
      after:hover:opacity-50 after:rounded-md"
      onMouseOver={handleOver(true)}
      onMouseOut={handleOver(false)}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        src={movie.image_url}
        alt={movie.title}
        width="100%"
        className="object-cover aspect-[3/2] rounded-md shadow-sm shadow-grayBlack"
      />
      {/* This content will be displayed at the beginning */}
      <motion.div
        variants={fadeIn}
        initial="visible"
        animate={isOver ? "hidden" : "visible"}
        className={`absolute top-0 w-[100%] h-[100%] flex flex-col items-center justify-center ${
          isLargest ? "gap-14" : "gap-6"
        } mt-[10%] z-10`}
      >
        <PlayRoundedIcon svgClassName="h-[40px] w-[40px]" />
        <AnimatedText
          text={movie.title}
          variant={textSizes()}
          color="text-white"
        />
      </motion.div>
      {/* Hidden content that will be displayed when the user hovers over the image */}
      <motion.div
        className="absolute top-0 left-0 w-[100%] h-[100%] flex flex-col justify-between pt-10 pb-5 px-5 z-10"
        variants={fadeIn}
        initial="hidden"
        animate={isOver ? "visible" : "hidden"}
      >
        <div className={`flex items-center gap-4`}>
          <Button variant="text" onClick={() => {}}>
            <PlayRoundedIcon svgClassName="-mt-[5px] hover:fill-aquaGreen transition-all duration-500" />
          </Button>
          <Text variant={textSizes()} color="text-white" className="z-10">
            {movie.title}
          </Text>
        </div>
        <div className={`flex justify-between`}>
          <div className="flex gap-2 items-center">
            <StarIcon svgClassName="md:w-[16px] md:h-[16px] -mt-[5px]" />
            <Text variant="body2" color="text-white">
              {movie.vote_average}
            </Text>
          </div>
          <Text variant="body2" color="text-white">
            {Date.getYear(movie.date)}
          </Text>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MovieItem;
