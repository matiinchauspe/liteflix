"use client";
// External Dependencies
import { useState } from "react";
// Internal Dependencies
import { typeOfListOptions as options } from "@utils/index";
import { Transcript } from "@lang/es";
import { MovieTransformed, ListMovieTypes } from "@internal-types/index";

import { Dropdown } from "@components/molecules/index";
import { MovieList } from "./movie-list";

interface MoveExploreProps {
  popularMovies: MovieTransformed[];
  myMovies: MovieTransformed[];
}

const MovieExplore = ({ popularMovies, myMovies }: MoveExploreProps) => {
  const [chosen, setChosen] = useState(options[0].value);

  const handleSelect = (value: string) => setChosen(value);

  const listShowed =
    chosen === ListMovieTypes.POPULAR ? popularMovies : myMovies;

  return (
    <section
      className="flex flex-col md:w-72 lg:w-80 gap-4 
     overflow-x-hidden xs:fixed xs:top-[25%] xs:left-0 px-10 -mt-[150px] sm:mt-0 py-[64px] md:py-0 md:px-0 bg-grayBlack md:bg-transparent"
    >
      <Dropdown
        label={Transcript.es.home.movies.label}
        selected={chosen}
        options={options}
        onChange={handleSelect}
      />
      <MovieList movies={listShowed} />
    </section>
  );
};

export default MovieExplore;
