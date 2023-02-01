"use client";
// External Dependencies
import { motion, Variants } from "framer-motion";
import SimpleBar from "simplebar-react";

// Internal Dependencies
import { MovieListProps } from "./movie-list.types";

import { MovieItem } from "./movie-item";

const MovieList = ({ movies }: MovieListProps) => {
  // TODO: move this later
  const staggerVariants: Variants = {
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
    <SimpleBar className="max-w-[750px]" style={{ maxHeight: "750px" }}>
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
