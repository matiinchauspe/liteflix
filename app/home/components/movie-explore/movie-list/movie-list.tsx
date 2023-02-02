// External Dependencies
import { motion } from "framer-motion";
import SimpleBar from "simplebar-react";
// Internal Dependencies
import { stagger } from "@animations/index";
import { MovieListProps } from "./movie-list.types";

import { MovieItem } from "./movie-item";

const MovieList = ({ movies }: MovieListProps) => (
  <SimpleBar className="max-w-[750px]" style={{ maxHeight: "750px" }}>
    <motion.div
      variants={stagger}
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

export default MovieList;
