"use client";
// External Dependencies
import SimpleBar from "simplebar-react";
import { motion, Variants } from "framer-motion";

// Internal Dependencies
import { useMediaQuery } from "@hooks/index";
import { MovieListProps } from "./movie-list.types";

import { MovieItem } from "./movie-item";

const MovieList = ({ movies }: MovieListProps) => {
  const { isSmall } = useMediaQuery();
  // TODO: move this later
  const staggerVariants: Variants =
    // ? {
    //     initial: {
    //       opacity: 0,
    //     },
    //     animate: {
    //       y: "35%",
    //       opacity: 1,
    //       transition: {
    //         staggerChildren: 0.1,
    //         delayChildren: 0.2,
    //       },
    //     },
    //   }
    // :
    {
      initial: {
        y: 0,
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    };

  return (
    <SimpleBar style={{ maxHeight: "750px" }}>
      <motion.div
        variants={staggerVariants}
        initial="initial"
        animate="animate"
        className="flex flex-1 flex-col gap-4"
      >
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </motion.div>
    </SimpleBar>
  );
};

export default MovieList;
