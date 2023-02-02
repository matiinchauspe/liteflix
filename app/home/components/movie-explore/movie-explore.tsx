"use client";
// External Dependencies
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
// Internal Dependencies
import { typeOfListOptions as options } from "@utils/index";
import { fadeIn } from "@animations/index";
import { Transcript } from "@lang/es";
import {
  MovieTransformed,
  MyMovieTransformed,
  ListMovieTypes,
} from "@internal-types/index";

import { Dropdown } from "@components/molecules/index";
import { MovieList } from "./movie-list";

type MoveExploreProps = {
  popularMovies: MovieTransformed[];
  myMovies: MyMovieTransformed[];
};

const MovieExplore = ({ popularMovies, myMovies }: MoveExploreProps) => {
  const router = useRouter();
  // Refresh the current route and fetch new data from the server without
  // losing client-side browser or React state.
  // Review this https://nextjs.org/docs/routing/dynamic-routes#refreshing-the-page
  useState(() => router.refresh()) // This is not the most elegant solution, but it works 😊
  const [chosen, setChosen] = useState(options[0].value);

  const handleSelect = (value: string) => setChosen(value);

  const listShowed =
    chosen === ListMovieTypes.POPULAR ? popularMovies : myMovies;

  return (
    <motion.section
      className="flex flex-col md:w-72 lg:w-80 gap-4 
     overflow-x-hidden xs:fixed xs:top-[25%] xs:left-0 px-10 -mt-[150px] sm:mt-0 py-[64px] md:py-0 md:px-0 bg-grayBlack md:bg-transparent"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <Dropdown
        label={Transcript.es.home.movies.label}
        selected={chosen}
        options={options}
        onChange={handleSelect}
      />
      <MovieList movies={listShowed} />
    </motion.section>
  );
};

export default MovieExplore;
