"use client";
// External dependencies
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
// Internal dependencies
import { useMovieStore } from "@state/store";
import { fadeIn } from "@animations/index";
import { useMediaQuery, useDelayedAnimateCycle } from "@hooks/index";

interface BackgroundImageProps {
  imageUrl: string;
  title: string;
}

const BackgroundImage = ({ imageUrl, title }: BackgroundImageProps) => {
  const { movieSelected } = useMovieStore();
  const { visible } = useDelayedAnimateCycle(movieSelected);
  const { isLarge, isLargest } = useMediaQuery();

  const url = movieSelected?.image_url ?? imageUrl;
  const alt = movieSelected?.title ?? title;

  const mediaQueryStyle = () => {
    if (isLarge || isLargest) {
      return "object-[20%, 50%]";
    }
    return "object-top";
  };

  return (
    <div className="absolute top-0 left-0 -z-10 flex flex-col">
      <AnimatePresence>
        {visible && (
          <motion.div
            variants={{
              initial: {
                opacity: 0,
                transition: {
                  duration: 0.2,
                },
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.7,
                },
              },
            }}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            <Image
              src={url}
              alt={alt}
              height={1080}
              width={1920}
              // hardcoded
              className={twMerge(
                `object-cover aspect-[1/1] ${mediaQueryStyle()}`
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BackgroundImage;
